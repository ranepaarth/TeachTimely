import CardWrapper from "@/components/card-wrapper";
import FormButton from "@/components/form-button";
import FormError from "@/components/form-error";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useLoginUserMutation } from "@/features/api/authApiSlice";
import { setAccessToken, setCredentials } from "@/features/userSlice";
import { LoginSchema } from "@/schemas/formSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import * as z from "zod";

const LoginForm = () => {
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const [loginUser, { isLoading }] = useLoginUserMutation();
  const dispatch = useDispatch();

  const form = useForm<z.infer<typeof LoginSchema>>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof LoginSchema>) => {
    try {
      setError("")
      const data = await loginUser(values).unwrap();
      dispatch(setCredentials(data.user));
      dispatch(setAccessToken(data.accessToken));
      if (data.user.role === "ADMIN") {
        navigate("/admin");
      }
      if (data.user.role === "INSTRUCTOR") {
        navigate("/instructor");
      }
    } catch (error: any) {
      console.log(error);
      setError(error.data.message);
    }
  };

  return (
    <CardWrapper
      formTitle={"Login"}
      formDesc={"👋 Welcome Back!"}
      footerHref={"/signup"}
      footerLabel={"Create Account"}
    >
      <Form {...form}>
        <form action="" onSubmit={form.handleSubmit(onSubmit)}>
          <div className="space-y-6">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      placeholder="test1@test.com"
                      type="email"
                      autoFocus
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      placeholder="******"
                      type="password"
                      autoComplete="off"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            {error && <FormError error={error} />}
            <FormButton isPending={isLoading} label={"Login"} />
          </div>
        </form>
      </Form>
    </CardWrapper>
  );
};

export default LoginForm;

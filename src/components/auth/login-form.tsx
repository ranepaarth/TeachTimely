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
import { LoginSchema } from "@/schemas/formSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import { useState } from "react";
import { useForm } from "react-hook-form";
import * as z from "zod";

const LoginForm = () => {
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState("");

  const form = useForm<z.infer<typeof LoginSchema>>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof LoginSchema>) => {
    setIsPending(true);
    await axios
      .post(`${import.meta.env.VITE_API_URL}/auth/login`, values, {
        withCredentials: true,
      })
      .then((response) => {
        console.log(response.data);
        setError("");
        setIsPending(false);
      })
      .catch((error) => {
        console.log(error.response.data.message);
        setError(error.response.data.message);
        setIsPending(false);
      });
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
            <FormButton isPending={isPending} label={"Login"} />
          </div>
        </form>
      </Form>
    </CardWrapper>
  );
};

export default LoginForm;

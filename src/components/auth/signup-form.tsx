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
import { RegisterSchema } from "@/schemas/formSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import { useState } from "react";
import { useForm } from "react-hook-form";
import * as z from "zod";
import FormSuccess from "../form-success";

const SignUpForm = () => {
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const form = useForm<z.infer<typeof RegisterSchema>>({
    resolver: zodResolver(RegisterSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof RegisterSchema>) => {
    setIsPending(true);
    setError("");
    setSuccess("");
    await axios
      .post(`${import.meta.env.VITE_API_URL}/auth/register`, values, {
        withCredentials: true,
      })
      .then((response) => {
        console.log(response.data);
        setError("");
        setSuccess(response.data.message);
        setIsPending(false);
      })
      .catch((error) => {
        console.log(error.response.data.message);
        setError(error.response.data.message);
        setSuccess("");
        setIsPending(false);
      });
  };

  return (
    <CardWrapper
      formTitle={"Register"}
      formDesc={"Create Account"}
      footerHref={"/login"}
      footerLabel={"Log In"}
    >
      <Form {...form}>
        <form action="" onSubmit={form.handleSubmit(onSubmit)}>
          <div className="space-y-6">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      placeholder="test user"
                      type="test"
                      autoFocus
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
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
            {success && <FormSuccess success={success} />}
            <FormButton isPending={isPending} label={"Create account"} />
          </div>
        </form>
      </Form>
    </CardWrapper>
  );
};

export default SignUpForm;

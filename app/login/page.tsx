"use client";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { loginFormSchema, LoginForm } from "@/schema/login";
import { LoginLink, RegisterLink } from "@kinde-oss/kinde-auth-nextjs";
import { Input } from "@/components/ui/input";

export default function Login() {
  const form = useForm<LoginForm>({
    resolver: zodResolver(loginFormSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const {
    handleSubmit,
    formState: { errors },
  } = form;

  const onSubmit = (data: LoginForm) => {
    console.log(data);
  };

  console.log(errors);

  return (
    <div className="w-1/6 flex flex-col gap-4 items-center justify-center h-screen mx-auto">
      <Form {...form}>
        <form onSubmit={handleSubmit(onSubmit)} className="w-full">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <>
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input type="email" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              </>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem className="mt-4">
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input type="password" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" className="w-full mt-4" asChild>
            <LoginLink>Login</LoginLink>
          </Button>
        </form>
      </Form>
      <p className="text-sm text-gray-500">
        Don&apos;t have an account?{" "}
        <Button
          variant="link"
          asChild
          className="p-0 text-blue-500 hover:text-blue-600"
        >
          <RegisterLink>Register</RegisterLink>
        </Button>
      </p>
    </div>
  );
}

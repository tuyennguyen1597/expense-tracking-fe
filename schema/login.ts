import { z } from "zod";

export const loginFormSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
});
export type LoginForm = z.infer<typeof loginFormSchema>;

export const registerFormSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8).max(32),
  confirmPassword: z.string().min(8).max(32).optional(),
  firstName: z.string().min(1).max(32).optional(),
  lastName: z.string().min(1).max(32).optional(),
});
export type RegisterForm = z.infer<typeof registerFormSchema>;

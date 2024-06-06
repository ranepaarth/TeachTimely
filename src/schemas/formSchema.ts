import * as z from "zod";

export const LoginSchema = z.object({
  email: z.string().email("Provide a valid email address"),
  password: z
    .string()
    .min(4, "Your password must be between 4 and 32 characters")
    .max(32, "Your password must be between 4 and 32 characters"),
});

import * as z from "zod";

export const LoginSchema = z.object({
  email: z.string().email("Provide a valid email address"),
  password: z
    .string()
    .min(4, "Your password must be between 4 and 32 characters")
    .max(32, "Your password must be between 4 and 32 characters"),
});

export const RegisterSchema = z.object({
  name: z.string().min(4, "Your name must be between 4 and 12 characters"),
  email: z.string().email("Provide a valid email address"),
  password: z
    .string()
    .min(4, "Your password must be between 4 and 32 characters")
    .max(32, "Your password must be between 4 and 32 characters"),
});

export const CreateCourseSchema = z.object({
  name: z.string().min(1, "Course name must be between 4 and 32 characters"),
  level: z.string({
    required_error:
      "Please select the difficulty level of the course to display",
  }),
  description: z
    .string()
    .min(4, "Your description must be at least 10 characters"),
});

export const UpdateCourseSchema = z.object({
  date: z.date({
    required_error: "Provide a lecture date",
  }),
  instructorId: z.string({
    required_error: "Select an instructor for conducting the lecture",
  }),
});

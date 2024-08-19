import { z } from "zod";
export const RegisterSchema = z
  .object({
    firstname: z.string().min(2, "username must be at least 2 characters"),
    lastname: z.string().min(2, "lastName must be at least 2 characters"),

    email: z.string().email("Invalid email address"),
    password: z.string().min(6, "password must be at least 6 characters"),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

export type RegisterData = z.infer<typeof RegisterSchema>;

export const LoginSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(6, "password must be at least 6 characters"),
});

export type LoginData = z.infer<typeof LoginSchema>;

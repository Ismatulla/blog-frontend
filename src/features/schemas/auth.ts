import { z } from "zod";
export const RegisterSchema = z
  .object({
    username: z.string().min(2, "username must be at least 2 characters"),
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

export const CreatePostSchema = z.object({
  title: z
    .string()
    .min(2, { message: "title must be at least 2 characters" })
    .refine((value) => !/\d/.test(value), {
      message: "Title should not contain numeric values",
    }),
  content: z
    .string()
    .min(20, { message: "content must be at least 20 characters" }),
  category: z.string().min(1, { message: "category is required" }),
});
export type CreatePostData = z.infer<typeof CreatePostSchema>;
export type LoginData = z.infer<typeof LoginSchema>;

export const CreateCommentSchema = z.object({
  content: z.string().min(1, { message: "content is required" }),
});
export type CreateCommentData = z.infer<typeof CreateCommentSchema>;

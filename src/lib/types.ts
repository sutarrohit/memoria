import { z } from "zod";

export const FormSchema = z.object({
  email: z.string().describe("Email").email({ message: "Invalid Email" }),
  password: z
    .string()
    .min(8, { message: "Password must be 8 or more characters long" })
    .refine((value) => /[A-Z]/.test(value), {
      message: "Password must contain at least one uppercase letter",
    })
    .refine((value) => /[0-9]/.test(value), {
      message: "Password must contain at least one digit",
    })
    .refine((value) => /[!@#$%^&*()_+{}\[\]:;<>,.?~\\-]/.test(value), {
      message: "Password must contain at least one special character",
    }),
});

export const SignUpFormSchema = z
  .object({
    email: z.string().describe("Email").email({ message: "Invalid Email" }),
    password: z
      .string()
      .min(8, { message: "Password must be 8 or more characters long" })
      .refine((value) => /[A-Z]/.test(value), {
        message: "Password must contain at least one uppercase letter",
      })
      .refine((value) => /[0-9]/.test(value), {
        message: "Password must contain at least one digit",
      })
      .refine((value) => /[!@#$%^&*()_+{}\[\]:;<>,.?~\\-]/.test(value), {
        message: "Password must contain at least one special character",
      }),

    confirmPassword: z
      .string()
      .min(8, { message: "Password must be 8 or more characters long" })
      .refine((value) => /[A-Z]/.test(value), {
        message: "Password must contain at least one uppercase letter",
      })
      .refine((value) => /[0-9]/.test(value), {
        message: "Password must contain at least one digit",
      })
      .refine((value) => /[!@#$%^&*()_+{}\[\]:;<>,.?~\\-]/.test(value), {
        message: "Password must contain at least one special character",
      }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match.",
    path: ["confirmPassword"],
  });

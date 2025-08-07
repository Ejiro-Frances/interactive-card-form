import { z } from "zod";

export const cardSchema = z.object({
  cardname: z
    .string()
    .min(1, "Card holder name is required")
    .max(30, "Name too long, abbreviate"),
  cardnumber: z
    .string()
    .min(1, "Can't be blank")
    .regex(/^\d+$/, "Wrong format, numbers only")
    .min(16, "Card number must be 16 digits")
    .max(16, "Too long, card number must be 16 digits"),
  month: z.string().min(1, "Can't be blank"),
  year: z.string().min(1, "Can't be blank"),
  cvc: z
    .string()
    .min(1, "Can't be blank")
    .min(3, "CVC must be 3 digits")
    .max(3, "CVC must be 3 digits"),
});

export type CardFormData = z.infer<typeof cardSchema>;

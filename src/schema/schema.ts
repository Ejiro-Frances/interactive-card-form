import { z } from "zod";

export const cardSchema = z.object({
  cardname: z.string().min(1, "Cardholder name is required"),
  cardnumber: z
    .string()
    .min(16, "Card number must be 16 digits")
    .max(16, "Card number must be 16 digits"),
  month: z.string().min(1, "Month is required"),
  year: z.string().min(1, "Year is required"),
  cvc: z.string().min(3, "CVC must be 3 digits").max(4, "CVC must be 4 digits"),
});

export type CardFormData = z.infer<typeof cardSchema>;

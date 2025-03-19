import { z } from "zod";

export const formSchema = z.object({
  amount: z.number().min(0).max(1000000),
  term: z.number(),
  rate: z.number(),
  type: z.enum(["interst-only", "repayment"]),
});

export type FormSchema = z.infer<typeof formSchema>;

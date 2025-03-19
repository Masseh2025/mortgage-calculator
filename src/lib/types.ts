import { z } from "zod";

export const formSchema = z.object({
  amount: z.coerce
    .number()
    .gt(0, "amount must be more then 0")
    .lte(10000000000, "amount must be less then or equal to 10000000000"),
  term: z.coerce
    .number()
    .gt(0, "amount must atleast a year")
    .lte(300, "term must be less then 300 years"),
  rate: z.coerce
    .number()
    .gt(0, "rate must be more then 0")
    .lte(50, "mortage rate must be less then 50"),
  type: z.enum(["interest-only", "repayment"]).default("interest-only"),
});

export type FormSchema = z.infer<typeof formSchema>;

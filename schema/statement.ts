import { z } from "zod";

export const statementTrackerSchema = z.object({
  id: z.string().min(1),
  amount: z.number().min(1),
  category: z.string().min(1).optional(),
  date: z.date().optional(),
  type: z.enum(["income", "expense"]).optional(),
  description: z.string().min(1).optional(),
});
export type StatementTracker = z.infer<typeof statementTrackerSchema>;

export const statementTrackerFormSchema = z.object({
  amount: z.number().min(1),
  category: z.string().min(1).optional(),
  type: z.enum(["income", "expense"]).optional(),
  description: z.string().min(1).optional(),
  date: z.date().optional(),
});
export type StatementTrackerForm = z.infer<typeof statementTrackerFormSchema>;

export const statementTableSchema = z.object({
  category: z.string().min(1),
  amount: z.number().min(1),
  date: z.date(),
  description: z.string().min(1),
});
export type StatementTable = z.infer<typeof statementTableSchema>;

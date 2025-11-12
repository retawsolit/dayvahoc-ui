import * as z from "zod";

export const contentSchema = z.object({
  title: z.string().min(3),
  description: z.string().min(10),
  category: z.string(),
  file: z.any().optional(),
});

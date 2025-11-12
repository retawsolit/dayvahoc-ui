import { z } from "zod";

export const userProfileSchema = z.object({
  name: z.string().min(1, "Họ tên không được để trống"),
  email: z.string().email("Email không hợp lệ"),
  phone: z.string().min(10, "Số điện thoại không hợp lệ"),
  department: z.string().optional(),
  bio: z.string().optional(),
});

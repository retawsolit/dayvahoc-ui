import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useAuth } from "../../context/AuthContext";

const schema = z
  .object({
    name: z.string().min(1, "Vui lòng nhập họ tên"),
    email: z.string().email("Vui lòng nhập đúng định dạng email"),
    password: z.string().min(6, "Mật khẩu phải có ít nhất 6 ký tự"),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Mật khẩu không khớp",
    path: ["confirmPassword"],
  });

type FormData = z.infer<typeof schema>;

const RegisterForm = () => {
  const { login } = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data: FormData) => {
    const mockUser = {
      name: data.name,
      email: data.email,
      role: "student" as const,
    };
    login(mockUser);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <h2 className="text-2xl font-bold text-center">Tạo tài khoản</h2>
      <p className="text-sm text-gray-600 text-center">
        Bắt đầu với LCMS bằng cách tạo tài khoản mới.
      </p>

      <div>
        <label className="block text-sm font-medium">Họ và tên</label>
        <input
          {...register("name")}
          className="w-full px-4 py-2 border rounded"
          placeholder="Nguyễn Văn A"
        />
        {errors.name && (
          <p className="text-sm text-red-500 mt-1">{errors.name.message}</p>
        )}
      </div>

      <div>
        <label className="block text-sm font-medium">Email</label>
        <input
          {...register("email")}
          type="email"
          className="w-full px-4 py-2 border rounded"
          placeholder="user@example.com"
        />
        {errors.email && (
          <p className="text-sm text-red-500 mt-1">{errors.email.message}</p>
        )}
      </div>

      <div>
        <label className="block text-sm font-medium">Mật khẩu</label>
        <input
          {...register("password")}
          type="password"
          className="w-full px-4 py-2 border rounded"
          placeholder="******"
        />
        {errors.password && (
          <p className="text-sm text-red-500 mt-1">
            {errors.password.message}
          </p>
        )}
      </div>

      <div>
        <label className="block text-sm font-medium">Xác nhận mật khẩu</label>
        <input
          {...register("confirmPassword")}
          type="password"
          className="w-full px-4 py-2 border rounded"
          placeholder="******"
        />
        {errors.confirmPassword && (
          <p className="text-sm text-red-500 mt-1">
            {errors.confirmPassword.message}
          </p>
        )}
      </div>

      <button
        type="submit"
        className="w-full bg-indigo-600 text-white py-2 rounded hover:bg-indigo-700"
      >
        Đăng ký
      </button>

      <p className="text-center text-sm mt-2">
        Đã có tài khoản?{" "}
        <a href="/login" className="text-blue-600 hover:underline">
          Đăng nhập ngay
        </a>
      </p>
    </form>
  );
};

export default RegisterForm;

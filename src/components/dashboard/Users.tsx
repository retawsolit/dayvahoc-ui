import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import {
  Tabs,
  TabList,
  TabTrigger,
  TabContent,
} from "../ui/tabs";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "../ui/card";
import { Button } from "../ui/button";

const profileSchema = z.object({
  name: z.string().min(1, "Vui lòng nhập họ tên"),
  email: z.string().email("Email không hợp lệ"),
  phone: z.string().min(9, "Số điện thoại không hợp lệ"),
  department: z.string().min(1, "Vui lòng nhập phòng ban"),
  bio: z.string().optional(),
});

const passwordSchema = z
  .object({
    currentPassword: z.string().min(6, "Mật khẩu hiện tại không hợp lệ"),
    newPassword: z.string().min(6, "Mật khẩu mới phải có ít nhất 6 ký tự"),
    confirmPassword: z.string().min(6, "Vui lòng xác nhận mật khẩu mới"),
  })
  .refine((data) => data.newPassword === data.confirmPassword, {
    message: "Mật khẩu mới không khớp",
    path: ["confirmPassword"],
  });

export default function Users() {
  const [activeTab, setActiveTab] = useState("profile");

  const {
    register: registerProfile,
    handleSubmit: handleSubmitProfile,
    formState: { errors: profileErrors },
    reset: resetProfile,
  } = useForm<z.infer<typeof profileSchema>>({
    resolver: zodResolver(profileSchema),
  });

  const {
    register: registerPassword,
    handleSubmit: handleSubmitPassword,
    formState: { errors: passwordErrors },
    reset: resetPassword,
  } = useForm<z.infer<typeof passwordSchema>>({
    resolver: zodResolver(passwordSchema),
  });

  const onSubmitProfile = (data: z.infer<typeof profileSchema>) => {
    console.log("Thông tin cá nhân:", data);
    alert("Lưu thông tin thành công!");
    resetProfile();
  };

  const onSubmitPassword = (data: z.infer<typeof passwordSchema>) => {
    console.log("Đổi mật khẩu:", data);
    alert("Đổi mật khẩu thành công!");
    resetPassword();
  };

  return (
    <div className="max-w-screen-md mx-auto px-4 py-6 text-foreground">
      <h1 className="text-3xl font-bold mb-2">Hồ sơ cá nhân</h1>
      <p className="text-sm text-muted-foreground mb-6">
        Quản lý thông tin tài khoản của bạn
      </p>

      <Tabs activeTab={activeTab} onChange={setActiveTab}>
        <TabList>
          <TabTrigger value="profile">Thông tin cá nhân</TabTrigger>
          <TabTrigger value="password">Đổi mật khẩu</TabTrigger>
        </TabList>

        <TabContent value="profile">
          <form onSubmit={handleSubmitProfile(onSubmitProfile)}>
            <Card>
              <CardHeader>
                <CardTitle>Thông tin cá nhân</CardTitle>
                <CardDescription>
                  Cập nhật thông tin hồ sơ của bạn
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <Input
                  label="Họ tên"
                  placeholder="Nguyễn Văn A"
                  {...registerProfile("name")}
                  error={profileErrors.name?.message}
                />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Input
                    label="Email"
                    placeholder="user@lcms.edu"
                    {...registerProfile("email")}
                    error={profileErrors.email?.message}
                  />
                  <Input
                    label="Số điện thoại"
                    placeholder="+84 912 345 678"
                    {...registerProfile("phone")}
                    error={profileErrors.phone?.message}
                  />
                </div>
                <Input
                  label="Phòng ban"
                  placeholder="Khoa Công Nghệ Thông Tin"
                  {...registerProfile("department")}
                  error={profileErrors.department?.message}
                />
                <Textarea
                  label="Tiểu sử"
                  placeholder="Giáo viên giảng dạy về lập trình"
                  {...registerProfile("bio")}
                />
                <Button type="submit" className="w-full">
                  Lưu thay đổi
                </Button>
              </CardContent>
            </Card>
          </form>
        </TabContent>

        <TabContent value="password">
          <form onSubmit={handleSubmitPassword(onSubmitPassword)}>
            <Card>
              <CardHeader>
                <CardTitle>Đổi mật khẩu</CardTitle>
                <CardDescription>
                  Cập nhật mật khẩu tài khoản của bạn
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <Input
                  label="Mật khẩu hiện tại"
                  type="password"
                  {...registerPassword("currentPassword")}
                  error={passwordErrors.currentPassword?.message}
                />
                <Input
                  label="Mật khẩu mới"
                  type="password"
                  {...registerPassword("newPassword")}
                  error={passwordErrors.newPassword?.message}
                />
                <Input
                  label="Xác nhận mật khẩu mới"
                  type="password"
                  {...registerPassword("confirmPassword")}
                  error={passwordErrors.confirmPassword?.message}
                />
                <Button type="submit" className="w-full">
                  Đổi mật khẩu
                </Button>
              </CardContent>
            </Card>
          </form>
        </TabContent>
      </Tabs>
    </div>
  );
}

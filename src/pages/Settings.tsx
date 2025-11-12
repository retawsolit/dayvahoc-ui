import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";

const Settings = () => {
  const navigate = useNavigate();

  const [darkMode, setDarkMode] = useState(false);
  const [syncWithSystem, setSyncWithSystem] = useState(true);
  const [notifyApp, setNotifyApp] = useState(true);
  const [notifyEmail, setNotifyEmail] = useState(true);
  const [autoSave, setAutoSave] = useState(true);

useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme === "dark") {
      setDarkMode(true);
      document.documentElement.classList.add("dark");
    } else if (storedTheme === "light") {
      setDarkMode(false);
      document.documentElement.classList.remove("dark");
    }
  }, []);

  useEffect(() => {
    if (syncWithSystem) {
      const mq = window.matchMedia("(prefers-color-scheme: dark)");
      const systemPref = mq.matches;
      document.documentElement.classList.toggle("dark", systemPref);
      setDarkMode(systemPref);

      const handleChange = (e: MediaQueryListEvent) => {
        document.documentElement.classList.toggle("dark", e.matches);
        setDarkMode(e.matches);
      };

      mq.addEventListener("change", handleChange);
      return () => mq.removeEventListener("change", handleChange);
    } else {
      document.documentElement.classList.toggle("dark", darkMode);
      localStorage.setItem("theme", darkMode ? "dark" : "light");
    }
  }, [darkMode, syncWithSystem]);

  return (
    <div className="p-6 space-y-6">
      <div>
        <h1 className="text-2xl font-bold">Cài đặt</h1>
        <p className="text-gray-500">Quản lý các tùy chọn của bạn</p>
      </div>

      <Card>
        <CardContent className="space-y-4 p-6">
          <div>
            <h2 className="text-lg font-semibold">Giao diện</h2>
            <p className="text-sm text-gray-500">Tùy chỉnh hình thức của ứng dụng</p>
          </div>

          <div className="flex items-center justify-between">
            <div>
              <Label className="font-medium">Chế độ tối/sáng</Label>
              <p className="text-sm text-muted-foreground">
                Chuyển đổi giữa giao diện tối và sáng
              </p>
            </div>
            <Switch
              checked={darkMode}
              onCheckedChange={(checked) => {
                setSyncWithSystem(false);
                setDarkMode(checked === true);
              }}
            />
          </div>

          <div className="flex items-center justify-between">
            <div>
              <Label className="font-medium">Tự động chọn theo hệ thống</Label>
              <p className="text-sm text-muted-foreground">Theo cài đặt của hệ điều hành</p>
            </div>
            <Checkbox
              checked={syncWithSystem}
              onCheckedChange={(checked) => setSyncWithSystem(checked === true)}
            />
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="space-y-4 p-6">
          <div>
            <h2 className="text-lg font-semibold">Thông báo</h2>
            <p className="text-sm text-gray-500">Quản lý cách bạn nhận thông báo</p>
          </div>

          <div className="flex items-center justify-between">
            <div>
              <Label className="font-medium">Bật thông báo</Label>
              <p className="text-sm text-muted-foreground">Nhận thông báo trong ứng dụng</p>
            </div>
            <Checkbox
              checked={notifyApp}
              onCheckedChange={(checked) => setNotifyApp(checked === true)}
            />
          </div>

          <div className="flex items-center justify-between">
            <div>
              <Label className="font-medium">Cảnh báo email</Label>
              <p className="text-sm text-muted-foreground">Nhận email khi có hoạt động quan trọng</p>
            </div>
            <Checkbox
              checked={notifyEmail}
              onCheckedChange={(checked) => setNotifyEmail(checked === true)}
            />
          </div>

          <div className="flex items-center justify-between">
            <div>
              <Label className="font-medium">Lưu tự động</Label>
              <p className="text-sm text-muted-foreground">Tự động lưu các tài liệu khi chỉnh sửa</p>
            </div>
            <Checkbox
              checked={autoSave}
              onCheckedChange={(checked) => setAutoSave(checked === true)}
            />
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="space-y-4 p-6">
          <div>
            <h2 className="text-lg font-semibold">Nội dung</h2>
            <p className="text-sm text-gray-500">Tùy chỉnh cách hiển thị nội dung</p>
          </div>

          <div className="space-y-2">
            <Label>Số tài liệu trên một trang</Label>
            <Select defaultValue="20">
              <SelectTrigger>
                <SelectValue placeholder="Chọn số lượng" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="10">10 tài liệu</SelectItem>
                <SelectItem value="20">20 tài liệu</SelectItem>
                <SelectItem value="50">50 tài liệu</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label>Định dạng ngày</Label>
            <Select defaultValue="dd/mm/yyyy">
              <SelectTrigger>
                <SelectValue placeholder="Chọn định dạng" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="dd/mm/yyyy">DD/MM/YYYY</SelectItem>
                <SelectItem value="mm/dd/yyyy">MM/DD/YYYY</SelectItem>
                <SelectItem value="yyyy-mm-dd">YYYY-MM-DD</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="space-y-4 p-6">
          <div>
            <h2 className="text-lg font-semibold">Bảo mật</h2>
            <p className="text-sm text-gray-500">Quản lý bảo mật tài khoản của bạn</p>
          </div>

          <div className="flex items-center justify-between">
            <div>
              <Label>Thay đổi mật khẩu</Label>
              <p className="text-sm text-muted-foreground">
                Cập nhật mật khẩu đăng nhập của bạn
              </p>
            </div>
            <Button onClick={() => navigate("/users?tab=password")}>Đổi mật khẩu</Button>
          </div>

          <div className="flex items-center justify-between">
            <div>
              <Label>Xóa tài khoản</Label>
              <p className="text-sm text-muted-foreground">
                Xóa vĩnh viễn tài khoản và dữ liệu
              </p>
            </div>
            <Button variant="destructive">Xóa</Button>
          </div>

          <div>
            <Label className="block mb-2">Phiên hoạt động</Label>
            <ul className="space-y-2">
              <li className="flex justify-between items-center border p-2 rounded-md text-sm">
                <span>
                  Chrome - Windows<br />
                  <span className="text-muted-foreground">Lần cuối hoạt động: 2 giờ trước</span>
                </span>
                <Button variant="outline" size="sm">Đăng xuất</Button>
              </li>
              <li className="flex justify-between items-center border p-2 rounded-md text-sm">
                <span>
                  Safari - macOS<br />
                  <span className="text-muted-foreground">Lần cuối hoạt động: 1 ngày trước</span>
                </span>
                <Button variant="outline" size="sm">Đăng xuất</Button>
              </li>
            </ul>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Settings;

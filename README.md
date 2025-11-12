## LCMS UI (DayVaHoc)

Đây là UI cho dự án DayVaHoc (LCMS UI).

Dự án này là một mô phỏng một Hệ thống Quản lý Nội dung Học tập (Learning Content Management System) hiện đại. Tập trung vào trải nghiệm người dùng sạch sẽ, responsive và nhất quán.

## Tính năng chính

- Giao diện Hiện đại: Được xây dựng với Tailwind CSS và shadcn/ui.

- Điều hướng: Sử dụng react-router-dom với các route công khai (public), xác thực (auth) và bảo vệ (protected).

- Dashboard Tương tác: Hiển thị dữ liệu thống kê (Stat Cards, Biểu đồ) bằng recharts.

- Xác thực Form: Đăng nhập và Đăng ký sử dụng react-hook-form + zod để xác thực (validation) theo thời gian thực.

- Logic Mock (Giả lập):

+ Đăng nhập: Hoạt động với bất kỳ email nào (đúng định dạng) và mật khẩu (ít nhất 6 ký tự).

+ Đăng ký: Tự động "đăng nhập" sau khi tạo tài khoản thành công.

+ Avatar: Tự động tạo fallback (ví dụ: "N") từ chữ cái đầu tiên của tên người dùng.

## Công nghệ sử dụng

- Khung sườn: React 18, Vite, TypeScript

- Styling: Tailwind CSS

- Components (UI): shadcn/ui (Card, Button, Avatar, Input...)

- Icons: lucide-react

- Điều hướng (Routing): react-router-dom

- Quản lý Form: react-hook-form

- Xác thực Schema: zod

- Biểu đồ (Charts): recharts

- Trình quản lý gói (Package Manager): pnpm

## Bắt đầu

- Yêu cầu
Node.js (khuyến nghị v22+)

pnpm (cài đặt bằng npm install -g pnpm)

- Cài đặt
Clone repository này về máy.

- Di chuyển vào thư mục dự án:
 ## cd lcms-ui

- Cài đặt tất cả các gói phụ thuộc (dependencies):
 ## pnpm install

- Chạy dự án

+ Khởi động máy chủ development (dev server):
 ## pnpm run dev

+ Mở trình duyệt và truy cập http://localhost:5173
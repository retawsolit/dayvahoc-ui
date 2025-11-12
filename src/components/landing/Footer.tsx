import { Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-700 mt-20">
      <div className="max-w-6xl mx-auto py-12 px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
        <h3 className="text-lg font-semibold mb-4">Liên hệ</h3>
        <ul className="space-y-3 text-sm">
            <li className="flex items-center gap-2">
            <Mail className="w-4 h-4 text-indigo-600" />
            <a href="mailto:contact@lcms.vn" className="hover:underline">info@dayvahoc.edu.vn</a>
            </li>
            <li className="flex items-center gap-2">
            <Phone className="w-4 h-4 text-indigo-600" />
            <a href="tel:0123456789" className="hover:underline">(+84) 940108059</a>
            </li>
            <li className="flex items-center gap-2">
            <MapPin className="w-4 h-4 text-indigo-600" />
            Toà nhà ST Moritz, TP Thủ Đức, TP HCM
            </li>
        </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4">Về DayVaHoc</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-indigo-600">Quản lý nội dung</a></li>
            <li><a href="#" className="hover:text-indigo-600">Hệ thống</a></li>
            <li><a href="#" className="hover:text-indigo-600">Hỗ trợ</a></li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4">Chính sách</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-indigo-600">Điều khoản sử dụng</a></li>
            <li><a href="#" className="hover:text-indigo-600">Chính sách bảo mật</a></li>
            <li><a href="#" className="hover:text-indigo-600">Hướng dẫn sử dụng</a></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-gray-300 text-center py-4 text-sm">
        © 2025 LCMS. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;

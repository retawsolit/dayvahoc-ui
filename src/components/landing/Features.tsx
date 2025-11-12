import { Book, Search, Users, BarChart } from "lucide-react";

const features = [
  {
    icon: <Book className="w-8 h-8 text-indigo-600" />,
    title: "Quản lý tài liệu",
    desc: "Dễ dàng thêm, sửa, xoá và phân loại các loại tài liệu học tập.",
  },
  {
    icon: <Search className="w-8 h-8 text-indigo-600" />,
    title: "Tìm kiếm nâng cao",
    desc: "Tìm kiếm theo tên, loại tài liệu, người đăng hoặc từ khoá.",
  },
  {
    icon: <Users className="w-8 h-8 text-indigo-600" />,
    title: "Quản lý người dùng",
    desc: "Quản lý giáo viên và học sinh trong cùng một hệ thống.",
  },
  {
    icon: <BarChart className="w-8 h-8 text-indigo-600" />,
    title: "Thống kê chi tiết",
    desc: "Xem thống kê về lượt tải, lượt xem, và tài liệu nổi bật.",
  },
];

const Features = () => {
  return (
    <section className="bg-gray-50 py-16 px-4">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-2">Tính năng chính</h2>
        <p className="text-gray-600">Mọi công cụ bạn cần để quản lý nội dung học tập đều có ở đây.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
        {features.map((item, index) => (
          <div key={index} className="bg-white rounded-xl shadow p-6 text-left">
            <div className="mb-4">{item.icon}</div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h3>
            <p className="text-gray-600">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;

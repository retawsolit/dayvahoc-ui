import { useNavigate } from "react-router-dom";
import logoImage from "@/assets/logo.png";

const Hero = () => {
  const navigate = useNavigate();

  return (
    <section className="max-w-7xl mx-auto py-20 px-4 grid md:grid-cols-2 gap-10 items-center">
      <div>
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          Quản lý nội dung học tập hiệu quả
        </h1>
        <p className="text-gray-600 mb-8">
          LCMS giúp giáo viên và học sinh tổ chức, truy cập và chia sẻ tài liệu học tập một cách dễ dàng và an toàn.
        </p>
        <div className="flex gap-4">
          <button
            className="bg-indigo-600 text-white px-6 py-3 rounded hover:bg-indigo-700 transition"
            onClick={() => navigate("/login")}
          >
            Bắt đầu ngay
          </button>
          <button
            className="border border-gray-400 text-gray-700 px-6 py-3 rounded hover:bg-gray-100 transition"
            onClick={() => window.scrollTo({ top: 800, behavior: "smooth" })}
          >
            Tìm hiểu thêm
          </button>
        </div>
      </div>
      <div>
        <div className="bg-indigo-100 p-6 rounded-xl shadow-md text-center">
          <img 
            src={logoImage} 
            alt="Tài liệu học tập" 
            className="w-40 mx-auto mb-4" 
          />

        </div>
      </div>
    </section>
  );
};

export default Hero;

import { Home, FileText, Users, BarChart, Settings } from "lucide-react";
import { NavLink } from "react-router-dom";

const menu = [
  { label: "Tổng quan", icon: <Home />, href: "/dashboard" },
  { label: "Tài liệu", icon: <FileText />, href: "/dashboard/documents" },
  { label: "Người dùng", icon: <Users />, href: "/dashboard/users" },
  { label: "Thống kê", icon: <BarChart />, href: "/dashboard/stats" },
  { label: "Cài đặt", icon: <Settings />, href: "/dashboard/settings" },
];

export default function DashboardSidebar() {
  return (
    <aside className="bg-[#1e1e2f] text-white w-64 h-screen fixed left-0 top-0 flex flex-col">
      <div className="text-xl font-bold px-6 py-5">L LCMS</div>
      <nav className="flex-1 px-4 space-y-2">
        {menu.map((item, idx) => (
          <NavLink
            key={idx}
            to={item.href}
            className={({ isActive }) =>
              `flex items-center gap-3 px-4 py-2 rounded-md hover:bg-[#2e2e3f] ${
                isActive ? "bg-[#2e2e3f]" : ""
              }`
            }
          >
            {item.icon}
            <span>{item.label}</span>
          </NavLink>
        ))}
      </nav>
    </aside>
  );
}

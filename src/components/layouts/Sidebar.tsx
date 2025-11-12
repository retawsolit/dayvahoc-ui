import { NavLink } from "react-router-dom";

const links = [
  { label: "Tổng quan", to: "/dashboard", icon: "📊" },
  { label: "Tài liệu", to: "/content", icon: "📁" },
  { label: "Người dùng", to: "/users", icon: "👥" },
  { label: "Thống kê", to: "/stats", icon: "📈" },
  { label: "Cài đặt", to: "/settings", icon: "⚙️" },
];

export default function Sidebar() {
  return (
    <aside className="w-60 border-r bg-background p-4 space-y-2">
      {links.map((item) => (
        <NavLink
          key={item.to}
          to={item.to}
          className={({ isActive }) =>
            `flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium hover:bg-muted ${
              isActive ? "bg-muted text-foreground" : "text-muted-foreground"
            }`
          }
        >
          <span className="text-xl">{item.icon}</span>
          {item.label}
        </NavLink>
      ))}
    </aside>
  );
}

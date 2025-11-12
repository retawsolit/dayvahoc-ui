import { useAuth } from "@/context/AuthContext";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import  Avatar from "@/components/ui/avatar";

export default function DashboardHeader() {
  const { user, logout } = useAuth();

  return (
    <header className="flex items-center justify-between h-16 px-6 bg-white shadow-sm border-b">
      <Breadcrumb paths={["Dashboard", "Content"]} />

      <div className="flex items-center gap-4">
        <div className="text-sm text-gray-800 font-medium">{user?.name}</div>
        <Avatar
          name={user?.name || "U"}
        />
        <button
          onClick={logout}
          className="text-sm text-gray-600 hover:underline"
        >
          Đăng xuất
        </button>
      </div>
    </header>
  );
}

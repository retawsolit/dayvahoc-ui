import { useAuth } from "@/context/AuthContext";
import  Avatar  from "@/components/ui/avatar";

export default function Header() {
  const { user, logout } = useAuth();

  return (
    <header className="flex justify-between items-center h-16 px-6 bg-white shadow-sm border-b">
      <div className="text-xl font-bold text-indigo-600">LCMS UI</div>

      {user && (
        <div className="flex items-center gap-4">
          <span className="text-sm text-gray-800 font-medium">{user.name}</span>
          <Avatar name={user.name} />
          <button
            onClick={logout}
            className="text-sm text-gray-600 hover:underline"
          >
            Đăng xuất
          </button>
        </div>
      )}
    </header>
  );
}

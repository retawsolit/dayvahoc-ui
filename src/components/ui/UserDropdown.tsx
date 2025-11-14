import { useNavigate } from "react-router-dom";
import { useAuth } from "@/context/AuthContext";
import { Moon, Sun, Settings, LogOut, User } from "lucide-react";
import Avatar from "./avatar";
import { Switch } from "@/components/ui/switch";
import { useTheme } from "@/context/ThemeContext";

export default function UserDropdown() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const { theme, setTheme } = useTheme();

  const isDark = theme === "dark";

  return (
    <div className="relative group">
      <div className="flex items-center space-x-2 cursor-pointer">
        <Avatar name={user?.name} />
        <span className="text-sm text-gray-800 dark:text-white">{user?.name}</span>
      </div>

      <div
        className="absolute right-0 mt-2 w-56 rounded-md border bg-white text-black shadow-lg
                   dark:bg-gray-800 dark:text-white dark:border-gray-700
                   transition-all duration-200 z-50 opacity-0 invisible
                   group-hover:opacity-100 group-hover:visible"
        onClick={(e) => e.stopPropagation()}
        onMouseLeave={(e) => e.stopPropagation()}
      >
        <button
          onClick={() => navigate("/users")}
          className="flex w-full items-center px-4 py-2 text-sm text-black dark:text-white
                     hover:bg-gray-100 dark:hover:bg-gray-700"
        >
          <User className="w-4 h-4 mr-2" /> Thông tin tài khoản
        </button>

        <button
          onClick={() => navigate("/settings")}
          className="flex w-full items-center px-4 py-2 text-sm text-black dark:text-white
                     hover:bg-gray-100 dark:hover:bg-gray-700"
        >
          <Settings className="w-4 h-4 mr-2" /> Cài đặt
        </button>

        {/* Theme Switch */}
        <div className="flex items-center justify-between px-4 py-2 text-sm text-black dark:text-white
                        hover:bg-gray-100 dark:hover:bg-gray-700">
          <div className="flex items-center">
            {isDark ? (
              <Moon className="w-4 h-4 mr-2" />
            ) : (
              <Sun className="w-4 h-4 mr-2" />
            )}
            {isDark ? "Chế độ Tối" : "Chế độ Sáng"}
          </div>
          <Switch
            checked={isDark}
            onCheckedChange={(val) => setTheme(val ? "dark" : "light")}
          />
        </div>

        <button
          onClick={logout}
          className="flex w-full items-center px-4 py-2 text-sm
                     text-red-600 dark:text-red-400
                     hover:bg-red-100 dark:hover:bg-red-700"
        >
          <LogOut className="w-4 h-4 mr-2" /> Đăng xuất
        </button>
      </div>
    </div>
  );
}

import { Link, NavLink } from "react-router-dom";
import { useAuth } from "@/context/AuthContext";
import { Button } from "@/components/ui/button";
import logoImage from "@/assets/logo.png";
import UserDropdown from "@/components/ui/UserDropdown";

export default function Navbar() {
  const { user } = useAuth();
  const isLoggedIn = !!user;

  return (
    <header
      className="border-b sticky top-0 z-50 
      bg-zinc-100/90 backdrop-blur-md 
      dark:bg-zinc-800 dark:border-zinc-700 shadow-sm"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <Link to="/">
          <img src={logoImage} alt="DayVaHoc Logo" className="h-8 w-auto" />
        </Link>

        {isLoggedIn ? (
          <div className="flex items-center space-x-4">
            <nav className="hidden md:flex items-center space-x-4 text-sm font-medium">
              <NavLink
              to="/dashboard"
              className={({ isActive }) =>
                `px-3 py-1.5 rounded-md transition-colors duration-200 ${
                  isActive
                    ? "text-blue-600 bg-blue-100 dark:text-blue-400 dark:bg-blue-900/40 border border-blue-300/50 dark:border-blue-700/60"
                    : "text-muted-foreground hover:text-foreground hover:bg-zinc-200/50 dark:hover:bg-zinc-700/60"
                }`
              }
            >
              Tổng Quan
            </NavLink>

              <NavLink
              to="/content"
              className={({ isActive }) =>
                `px-3 py-1.5 rounded-md transition-colors duration-200 ${
                  isActive
                    ? "text-blue-600 bg-blue-100 dark:text-blue-400 dark:bg-blue-900/40 border border-blue-300/50 dark:border-blue-700/60"
                    : "text-muted-foreground hover:text-foreground hover:bg-zinc-200/50 dark:hover:bg-zinc-700/60"
                }`
              }
            >
              Tài Liệu
            </NavLink>
            </nav>

            <UserDropdown />
          </div>
        ) : (
          <Button asChild variant="outline" size="sm">
            <Link to="/login">Đăng nhập</Link>
          </Button>
        )}
      </div>
    </header>
  );
}

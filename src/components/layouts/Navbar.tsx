import { Link, NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "@/context/AuthContext";
import { Button } from "@/components/ui/button";
import logoImage from "@/assets/logo.png";
import UserDropdown from "@/components/ui/UserDropdown";
import { cn } from "@/lib/utils";
import { Menu } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import ThemeToggle from "@/components/ui/theme-toggle";

export default function Navbar() {
  const { user, logout } = useAuth();
  const isLoggedIn = !!user;
  const navigate = useNavigate();

  const MobileNavLink = ({ to, children }: { to: string; children: React.ReactNode }) => (
    <NavLink
      to={to}
      className={({ isActive }) =>
        cn(
          "flex items-center px-3 py-2 rounded-md text-sm font-medium transition-colors",
          isActive
            ? "bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400"
            : "text-muted-foreground hover:text-foreground hover:bg-zinc-100 dark:hover:bg-zinc-800"
        )
      }
    >
      {children}
    </NavLink>
  );

  return (
    <header
      className="border-b sticky top-0 z-50 
      bg-zinc-100/90 backdrop-blur-md 
      dark:bg-zinc-800 dark:border-zinc-700 shadow-sm"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link to="/">
          <img src={logoImage} alt="DayVaHoc Logo" className="h-10 w-auto sm:h-12" />
        </Link>

        {isLoggedIn ? (
          <div className="flex items-center gap-4">
            {/* Desktop Nav */}
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

            {/* Desktop User Dropdown */}
            <div className="hidden md:block">
              <UserDropdown />
            </div>

            {/* MOBILE MENU */}
            <div className="md:hidden">
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon" className="-mr-2">
                    <Menu className="h-6 w-6" />
                    <span className="sr-only">Menu</span>
                  </Button>
                </SheetTrigger>
                <SheetContent
                  side="right"
                  className="w-[280px] sm:w-[340px] bg-background dark:bg-zinc-900 rounded-l-2xl shadow-xl overflow-y-auto"
                >
                  {/* Header */}
                  <div className="flex items-center gap-2 px-4 pb-3 border-b border-zinc-200 dark:border-zinc-700">
                    <h2 className="text-base font-semibold tracking-tight text-foreground">
                      Menu
                    </h2>
                   </div>
                   
                  {/* Nav Items */}
                  <nav className="px-4 pt-4 space-y-1">
                    <MobileNavLink to="/dashboard">Tổng Quan</MobileNavLink>
                    <MobileNavLink to="/content">Tài Liệu</MobileNavLink>
                    <MobileNavLink to="/users">Thông Tin Tài Khoản</MobileNavLink>
                    <MobileNavLink to="/settings">Cài Đặt</MobileNavLink>
                  </nav>

                  {/* Theme Toggle */}
                  <div className="px-4 pt-1 space-y-1">
                    <ThemeToggle />
                  </div>

                  {/* Logout Button */}
                  <div className="px-4 pt-1 space-y-1">
                    <Button
                      variant="outline"
                      className="w-full justify-start text-red-600 hover:text-red-700 hover:bg-red-50 dark:hover:bg-red-900/30 border-red-200 dark:border-red-600"
                      onClick={() => {
                        logout();
                        navigate("/");
                      }}
                    >
                      Đăng xuất
                    </Button>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
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

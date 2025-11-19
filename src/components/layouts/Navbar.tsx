import { Link, NavLink } from "react-router-dom";
import { useAuth } from "@/context/AuthContext";
import { Button } from "@/components/ui/button";
import logoImage from "@/assets/logo.png";
import UserDropdown from "@/components/ui/UserDropdown";

export default function Navbar() {

  const { user } = useAuth();
  const isLoggedIn = !!user;

  return (
    <header className="border-b bg-background sticky top-0 z-50">
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
                  isActive
                    ? "text-foreground"
                    : "text-muted-foreground hover:text-foreground"
                }
              >
                Tổng Quan
              </NavLink>

              <NavLink 
                to="/content" 
                className={({ isActive }) =>
                  isActive
                    ? "text-foreground" 
                    : "text-muted-foreground hover:text-foreground"
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
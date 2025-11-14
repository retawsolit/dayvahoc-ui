import { Link } from "react-router-dom";
import { useAuth } from "@/context/AuthContext";
import { Button } from "@/components/ui/button";
import Avatar from "@/components/ui/avatar";
import logoImage from "@/assets/logo.png";
import UserDropdown from "@/components/ui/UserDropdown";

export default function Navbar({ isLoggedIn = false }: { isLoggedIn?: boolean }) {
  const { user } = useAuth();

  return (
    <header className="flex items-center justify-between px-6 py-4 border-b bg-background">
      <Link to="/">
        <img src={logoImage} alt="DayVaHoc Logo" className="h-8 w-auto" />
      </Link>

      {isLoggedIn ? (
        <div className="flex items-center space-x-4">
          <nav className="hidden md:flex items-center space-x-4 text-sm font-medium">
            <Link to="/dashboard" className="hover:underline">Tổng Quan</Link>
            <Link to="/content" className="hover:underline">Tài Liệu</Link>
          </nav>
          <UserDropdown />
        </div>
      ) : (
        <Button asChild variant="outline" size="sm">
          <Link to="/login">Đăng nhập</Link>
        </Button>
      )}
    </header>
  );
}

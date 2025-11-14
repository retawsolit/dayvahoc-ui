import Navbar from "@/components/layouts/Navbar";
import { type ReactNode } from "react";

export default function MainLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground transition-colors">
      <Navbar isLoggedIn />
      <main className="flex-1 p-6 overflow-y-auto">{children}</main>
    </div>
  );
}

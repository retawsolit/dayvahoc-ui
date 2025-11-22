import Navbar from "@/components/layouts/Navbar";
import { type ReactNode } from "react";

export default function MainLayout({ children }: { children: ReactNode }) {
  return (
    <div
      className="flex min-h-screen flex-col 
                 bg-background text-foreground 
                 text-[1.05rem] md:text-[1.1rem]
                 transition-colors"
    >
      <Navbar />

      <main className="flex-1 overflow-y-auto px-6 py-10">
        <div
          className="max-w-7xl mx-auto 
            bg-zinc-50/95 dark:bg-zinc-900/70 backdrop-blur-sm
            border border-zinc-300 dark:border-zinc-700 
            rounded-2xl shadow-md p-10 
            transition-colors duration-300"
        >
          {children}
        </div>
      </main>
    </div>
  );
}

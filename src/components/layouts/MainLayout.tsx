import Navbar from "@/components/layouts/Navbar";
import { type ReactNode } from "react";

export default function MainLayout({ children }: { children: ReactNode }) {
  return (
    <div
      className="flex min-h-screen flex-col 
                 bg-background text-foreground 
                 transition-colors"
    >
      <Navbar />

      <main className="flex-1 overflow-y-auto 
        px-2 py-3          /* 320px: Rất sát (8px) */
        md:px-4 md:py-6    /* 768px & 1024px: Sát vừa phải (16px) */
        xl:px-8 xl:py-10   /* 1440px+: Thoáng (32px-40px) - Giữ nguyên vẻ đẹp cũ */
      ">
        
        <div
          className="max-w-7xl mx-auto 
            bg-zinc-50/95 dark:bg-zinc-900/70 backdrop-blur-sm
            border border-zinc-300 dark:border-zinc-700 
            
            /* Bo góc */
            rounded-lg md:rounded-2xl 
            
            shadow-md 
            
            /*(Khoảng cách từ viền khung vào nội dung) */
            p-2                /* 320px: Cực gọn (8px) */
            sm:p-4             /* Mobile lớn: (16px) */
            md:p-4             /* 768px & 1024px: (24px) */
            xl:p-4            /* 1440px+: (40px) */
            
            transition-colors duration-300"
        >
          {children}
        </div>
      </main>
    </div>
  );
}
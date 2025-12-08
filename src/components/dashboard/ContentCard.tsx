import { useState } from "react";
import { useEffect, useRef } from "react";
import { type Content } from "@/types/content";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import PreviewModal from "./PreviewModal";
import {
  Pencil,
  Trash2,
  Eye,
  FileText,
  FileImage,
  FileVideo,
  FileType,
  Archive,
} from "lucide-react";

export default function ContentCard({
  item,
  onEdit,
  onDelete,
}: {
  item: Content;
  onEdit: (id: string) => void;
  onDelete: (id: string) => void;
}) {
  const [hovered, setHovered] = useState(false);
  const [showPreview, setShowPreview] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const getFileStyle = (type: string) => {
    switch (type) {
      case "PDF":
        return {
          icon: <FileText className="w-6 h-6" />,
          color: "text-red-600 bg-red-50 dark:bg-red-900/20",
        };
      case "DOCX":
        return {
          icon: <FileText className="w-6 h-6" />,
          color: "text-blue-600 bg-blue-50 dark:bg-blue-900/20",
        };
      case "ZIP":
        return {
          icon: <Archive className="w-6 h-6" />,
          color: "text-yellow-600 bg-yellow-50 dark:bg-yellow-900/20",
        };
      case "MP4":
        return {
          icon: <FileVideo className="w-6 h-6" />,
          color: "text-purple-600 bg-purple-50 dark:bg-purple-900/20",
        };
      case "JPG":
      case "PNG":
        return {
          icon: <FileImage className="w-6 h-6" />,
          color: "text-green-600 bg-green-50 dark:bg-green-900/20",
        };
      default:
        return {
          icon: <FileType className="w-6 h-6" />,
          color: "text-gray-600 bg-gray-50 dark:bg-gray-800",
        };
    }
  };

  const style = getFileStyle(item.type);
  const canPreview = true;
  const [descKey, setDescKey] = useState("");
  const [needScroll, setNeedScroll] = useState(false);
  const descRef = useRef<HTMLParagraphElement>(null);
 
  const [expanded, setExpanded] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
  if (hovered && descRef.current) {
    const fullHeight = descRef.current.scrollHeight;
    const maxHeight = 72;
    setNeedScroll(fullHeight > maxHeight);
  }
}, [hovered, item.description]);

  return (
    <Card
      onMouseEnter={() => {
  // Clear timeout cũ nếu có
  if (timeoutRef.current) clearTimeout(timeoutRef.current);

  // Mở card (height) trước
  setExpanded(true);

  // Sau delay ngắn mới hiển thị nội dung
  timeoutRef.current = setTimeout(() => {
    setHovered(true);
    setDescKey(item.id + "-" + Date.now());
  }, 180); // bạn có thể chỉnh 100–250ms tùy cảm giác
}}

onMouseLeave={() => {
  if (timeoutRef.current) clearTimeout(timeoutRef.current);

  // Tắt nội dung (chữ) trước
  setHovered(false);

  // Sau đó thu card lại
  timeoutRef.current = setTimeout(() => {
    setExpanded(false);
  }, 250); // delay này ≥ thời gian fade-out chữ
}}
      className={`relative border rounded-2xl shadow-sm hover:shadow-md transition-all duration-500 ease-in-out flex flex-col
        bg-white dark:bg-zinc-800 dark:border-zinc-700
        p-4 sm:p-5 md:p-6
        ${expanded 
          ? "min-h-[240px] sm:min-h-[280px] md:min-h-[340px] lg:min-h-[380px] xl:min-h-[400px]"
          : "min-h-[200px] sm:min-h-[205px] md:min-h-[215px] lg:min-h-[220px]"
        }
        ${hovered && isMobile ? "max-h-[85vh]" : ""}
      `}
    >
      {/* Nội dung */}
      <div className={`space-y-3 sm:space-y-4 flex-1 min-h-0 ${hovered && isMobile ? "overflow-y-auto" : ""}`}>
        {/* Icon + title */}
        <div className="flex items-start gap-3">
          <div className={`p-2 rounded-lg shrink-0 ${style.color}`}>
            {style.icon}
          </div>
          <h3
            className="font-semibold text-base leading-tight line-clamp-2 pt-1 text-foreground dark:text-zinc-100"
            title={item.title}
          >
            {item.title}
          </h3>
        </div>

        {/* Mô tả / Chi tiết */}
        <div className="relative text-sm text-gray-600 dark:text-gray-300 min-h-[60px] sm:min-h-[70px] md:min-h-[80px] transition-all duration-250 delay-0 ease-in">
          {/* Mô tả ngắn */}
          <div
            className={`absolute inset-0 transition-all ease-in-out ${
              hovered
                ? "opacity-0 -translate-y-[8px] pointer-events-none delay-0 duration-200"
                : "opacity-100 translate-y-0 delay-100 duration-400"
            }`}
          >
            <div className="space-y-2">
              <p className="font-medium text-foreground dark:text-zinc-200">
                {item.size || "Unknown"}
              </p>
              <p className="line-clamp-2 text-sm">{item.description}</p>
            </div>
          </div>

          {/* Chi tiết khi hover */}
          <div
            className={`absolute inset-0 transition-all ease-in-out ${
              hovered
                ? "opacity-100 translate-y-0 duration-500 delay-150"
                : "opacity-0 translate-y-2 pointer-events-none duration-200"
            }`}
          >

            <div className="space-y-1.5 sm:space-y-2 text-sm bg-white dark:bg-zinc-800">
              <div
                key={descKey}
                className="relative h-[60px] sm:h-[72px] overflow-hidden mb-2 sm:mb-3 border-b border-zinc-600/40 pb-2"
              >
                <p
                  ref={descRef}
                  className={`italic text-sm sm:text-sm leading-snug absolute w-full ${
                    needScroll ? "animate-scroll-desc" : ""
                  }`}
                >
                  "{item.description}"
                </p>
              </div>

              <p className="flex justify-between text-xs sm:text-sm">
                <span>Loại:</span>
                <span className="font-medium text-foreground">{item.type}</span>
              </p>
              <p className="flex justify-between text-xs sm:text-sm">
                <span>Danh mục:</span>
                <span className="font-medium text-foreground">
                  {item.category}
                </span>
              </p>
              <p className="flex justify-between text-xs sm:text-sm">
                <span>Người đăng:</span>
                <span className="font-medium text-foreground">
                  {item.uploaderRole === "admin" ? "Admin" : "User"}
                </span>
              </p>
              <p className="flex justify-between text-xs sm:text-sm">
                <span>Ngày tạo:</span>
                <span className="font-medium text-foreground">
                  {item.createdAt}
                </span>
              </p>
              <p className="flex justify-between text-xs sm:text-sm">
                <span>Dung lượng:</span>
                <span className="font-medium text-foreground">
                  {item.size}
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className={`flex items-center justify-between pt-2.5 sm:pt-3 md:pt-5 lg:pt-6 border-t border-gray-200 dark:border-zinc-700 shrink-0`}>
        <div>
          {canPreview && (
            <Button
              size="sm"
              variant="outline"
              className="text-blue-600 border-blue-200 hover:bg-blue-50 dark:hover:bg-blue-900/30 gap-1.5 h-8 px-3 text-sm"
              onClick={() => {
                const isMobile = window.innerWidth < 768;

                if (isMobile) {
                  window.open(item.fileUrl || "", "_blank");
                } else {
                  setShowPreview(true);
                }
              }}
            >
              <Eye className="w-3.5 h-3.5" />
              Xem
            </Button>
          )}
        </div>

        <div className="flex gap-2">
          <Button
            size="icon"
            variant="ghost"
            className="h-8 w-8 text-orange-500 hover:text-orange-600 hover:bg-orange-50"
            onClick={() => onEdit(item.id)}
            title="Sửa"
          >
            <Pencil className="w-4 h-4" />
          </Button>
          <Button
            size="icon"
            variant="ghost"
            className="h-8 w-8 text-red-500 hover:text-red-600 hover:bg-red-50"
            onClick={() => onDelete(item.id)}
            title="Xóa"
          >
            <Trash2 className="w-4 h-4" />
          </Button>
        </div>
      </div>

      {/* Preview Modal */}
      {showPreview && canPreview && (
        <PreviewModal
          open={showPreview}
          title={item.title}
          fileType={item.fileType as "image" | "video"}
          fileUrl={item.fileUrl || ""}
          onClose={() => setShowPreview(false)}
        />
      )}
    </Card>
  );
}

import { useState } from "react";
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
  Archive 
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

  const getFileStyle = (type: string) => {
    switch (type) {
      case "PDF": return { icon: <FileText className="w-6 h-6" />, color: "text-red-600 bg-red-50 dark:bg-red-900/20" };
      case "DOCX": return { icon: <FileText className="w-6 h-6" />, color: "text-blue-600 bg-blue-50 dark:bg-blue-900/20" };
      case "ZIP": return { icon: <Archive className="w-6 h-6" />, color: "text-yellow-600 bg-yellow-50 dark:bg-yellow-900/20" };
      case "MP4": return { icon: <FileVideo className="w-6 h-6" />, color: "text-purple-600 bg-purple-50 dark:bg-purple-900/20" };
      case "JPG": 
      case "PNG": return { icon: <FileImage className="w-6 h-6" />, color: "text-green-600 bg-green-50 dark:bg-green-900/20" };
      default: return { icon: <FileType className="w-6 h-6" />, color: "text-gray-600 bg-gray-50 dark:bg-gray-800" };
    }
  };

  const style = getFileStyle(item.type);
  const canPreview = true;

  return (
    <Card
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={`relative p-5 border rounded-xl shadow-sm hover:shadow-md transition-all duration-300 ease-in-out flex flex-col justify-between overflow-hidden 
        bg-white dark:bg-zinc-800 dark:border-zinc-700
        ${hovered ? "min-h-[340px]" : "min-h-[200px]"}
      `}
    >
      <div className="space-y-3">
        <div className="flex items-start gap-3">
          <div className={`p-2 rounded-lg shrink-0 ${style.color}`}>
            {style.icon}
          </div>
          <h3 className="font-semibold text-base leading-tight line-clamp-2 pt-1 text-foreground dark:text-zinc-100" title={item.title}>
            {item.title}
          </h3>
        </div>

        <div className="text-sm text-gray-600 dark:text-gray-300 relative transition-all duration-500 ease-in-out">
          <div
            className={`absolute inset-0 transition-all duration-500 ease-in-out ${
              hovered
                ? "opacity-0 translate-y-[-10px] pointer-events-none"
                : "opacity-100 translate-y-0"
            }`}
          >
            <div className="space-y-2">
              <p className="font-medium text-foreground dark:text-zinc-200">
                {item.size || "Unknown"}
              </p>
              <p className="line-clamp-2 text-sm">{item.description}</p>
            </div>
          </div>

          {/* Phần chi tiết (hiện khi hover) */}
          <div
            className={`absolute inset-0 transition-all duration-500 ease-in-out ${
              hovered ? "opacity-100 translate-y-0" : "opacity-0 translate-y-[10px]"
            }`}
          >
            <div className="space-y-1.5 text-sm">
              <p className="italic mb-2 border-b pb-2 text-sm">"{item.description}"</p>

              <p className="flex justify-between">
                <span>Loại:</span> 
                <span className="font-medium text-foreground">{item.type}</span>
              </p>
              <p className="flex justify-between">
                <span>Danh mục:</span> 
                <span className="font-medium text-foreground">{item.category}</span>
              </p>
              <p className="flex justify-between">
                <span>Người đăng:</span> 
                <span className="font-medium text-foreground">
                  {item.uploaderRole === "admin" ? "Admin" : "User"}
                </span>
              </p>
              <p className="flex justify-between">
                <span>Ngày tạo:</span> 
                <span className="font-medium text-foreground">{item.createdAt}</span>
              </p>
              <p className="flex justify-between">
                <span>Dung lượng:</span> 
                <span className="font-medium text-foreground">{item.size}</span>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* --- Footer --- */}
      <div className="flex items-center justify-between pt-4 border-t border-gray-200 dark:border-zinc-700 mt-auto">

        <div>
          {canPreview ? (
            <Button
              size="sm"
              variant="outline"
              className="text-blue-600 border-blue-200 hover:bg-blue-50 dark:hover:bg-blue-900/30 gap-1.5 h-8 px-3 text-sm"
              onClick={() => setShowPreview(true)}
            >
              <Eye className="w-3.5 h-3.5" />
              Xem
            </Button>
          ) : <div />}
        </div>

        {/* Nút Sửa & Xóa (Bên phải) */}
        <div className="flex gap-1">
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

      {/* === MODAL XEM TRƯỚC === */}
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

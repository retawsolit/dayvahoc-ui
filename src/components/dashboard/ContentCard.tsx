import { type Content } from "@/types/content";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useState } from "react";

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

  const getFileIcon = (type: string) => {
    switch (type) {
      case "PDF":
        return "📕";
      case "DOCX":
        return "📘";
      case "ZIP":
        return "📙";
      default:
        return "📄";
    }
  };

  return (
        <Card
  onMouseEnter={() => setHovered(true)}
  onMouseLeave={() => setHovered(false)}
  className={`relative p-4 bg-background shadow-md border rounded-xl transition-all duration-300 ease-in-out overflow-hidden ${
  hovered ? "min-h-[270px]" : "min-h-[170px]"
}`}
>   
      {/* --- Non-Hover View --- */}
      {!hovered ? (
        <>
          <div className="text-lg font-semibold truncate">
            {getFileIcon(item.type)} {item.title}
          </div>

          <p className="text-sm mt-1 text-muted-foreground">{item.size}</p>

          <div className="flex justify-between items-center text-sm text-muted-foreground mt-2">
            <span>👤 {item.uploaderRole === "admin" ? "Admin" : "User"}</span>
            <span>🗓 {item.createdAt}</span>
          </div>

          <div className="flex justify-end items-center gap-2 mt-3">
            <Button
              size="sm"
              variant="ghost"
              onClick={() => onEdit(item.id)}
              className="text-blue-600"
            >
              ✏️
            </Button>
            <Button
              size="sm"
              variant="ghost"
              onClick={() => onDelete(item.id)}
              className="text-red-600"
            >
              🗑️
            </Button>
          </div>
        </>
      ) : (
        /* --- Hover View --- */
        <>
          <div className="text-sm space-y-1">
            <p className="font-semibold text-base">
              {getFileIcon(item.type)} {item.title}
            </p>
            <p className="text-muted-foreground">🔎 {item.description}</p>
            <p>
              📦 Loại: <span className="font-medium">{item.type}</span>{" "}
              📚 Danh mục: <span className="font-medium">{item.category}</span>
            </p>
            <p>📥 Lượt tải: {item.downloads}</p>
            <p>👤 Người đăng: {item.uploaderRole === "admin" ? "Admin" : "User"}</p>
            <p>🗓 Ngày tạo: {item.createdAt}</p>
            <p>📂 Dung lượng: {item.size}</p>
          </div>

          <div className="flex justify-end items-center gap-2 mt-3">
            <Button
              size="sm"
              variant="ghost"
              onClick={() => onEdit(item.id)}
              className="text-blue-600"
            >
              ✏️ Sửa
            </Button>
            <Button
              size="sm"
              variant="ghost"
              onClick={() => onDelete(item.id)}
              className="text-red-600"
            >
              🗑️ Xóa
            </Button>
          </div>
        </>
      )}
    </Card>
  );
}

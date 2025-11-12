import { useState } from "react";
import { type Content } from "@/types/content";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "sonner";

const mockContents: Content[] = [
  {
    id: "1",
    title: "Giáo trình Lập trình Web",
    description: "Tài liệu toàn diện về phát triển web hiện đại",
    type: "PDF",
    category: "Lập trình",
    createdAt: "2025-11-01",
    downloads: 234,
  },
  {
    id: "2",
    title: "Bài giảng JavaScript nâng cao",
    description: "Các khái niệm nâng cao trong JavaScript ES6+",
    type: "DOCX",
    category: "Lập trình",
    createdAt: "2025-10-28",
    downloads: 189,
  },
  {
    id: "3",
    title: "React Hooks Tutorial",
    description: "Hướng dẫn chi tiết sử dụng React Hooks",
    type: "PDF",
    category: "Frontend",
    createdAt: "2025-10-25",
    downloads: 456,
  },
  {
    id: "4",
    title: "Database Design Best Practices",
    description: "Các thực hành tốt nhất trong thiết kế cơ sở dữ liệu",
    type: "ZIP",
    category: "Database",
    createdAt: "2025-10-20",
    downloads: 123,
  },
];

function getTypeColor(type: string) {
  switch (type) {
    case "PDF":
      return "bg-red-100 text-red-800";
    case "DOCX":
      return "bg-blue-100 text-blue-800";
    case "ZIP":
      return "bg-yellow-100 text-yellow-800";
    default:
      return "bg-gray-100 text-gray-800";
  }
}

export default function ContentList({
  onEdit,
}: {
  onEdit: (id: string) => void;
}) {
  const [contents, setContents] = useState<Content[]>(mockContents);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterType, setFilterType] = useState("all");

  const filteredContents = contents.filter((content) => {
    const matchSearch = content.title
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchType = filterType === "all" ? true : content.type === filterType;
    return matchSearch && matchType;
  });

  const handleDelete = (id: string) => {
    if (confirm("Bạn có chắc muốn xóa tài liệu này?")) {
      setContents((prev) => prev.filter((item) => item.id !== id));
      toast.success("Đã xóa tài liệu!");
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-xl font-semibold">Quản lý nội dung</h1>
        <div className="flex gap-2">
          <Input
            placeholder="Tìm kiếm tài liệu..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-64 rounded-lg border border-gray-300 px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
          />
          <Select value={filterType} onValueChange={setFilterType}>
            <SelectTrigger className="w-40">
              <SelectValue placeholder="Tất cả loại" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Tất cả loại</SelectItem>
              <SelectItem value="PDF">PDF</SelectItem>
              <SelectItem value="DOCX">DOCX</SelectItem>
              <SelectItem value="ZIP">ZIP</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <p className="text-sm text-muted-foreground italic mt-2">
        Tìm thấy {filteredContents.length} tài liệu
      </p>

      <Card className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b text-left">
              <th className="px-4 py-2">Tiêu đề</th>
              <th className="px-4 py-2">Loại</th>
              <th className="px-4 py-2">Danh mục</th>
              <th className="px-4 py-2">Ngày tạo</th>
              <th className="px-4 py-2">Lượt tải</th>
              <th className="px-4 py-2 text-right">Hành động</th>
            </tr>
          </thead>
          <tbody>
            {filteredContents.map((item) => (
              <tr key={item.id} className="border-b hover:bg-gray-50">
                <td className="px-4 py-2">
                  <div className="font-medium">{item.title}</div>
                  <div className="text-muted-foreground text-xs">
                    {item.description}
                  </div>
                </td>
                <td className="px-4 py-2">
                  <Badge className={getTypeColor(item.type)}>
                    {item.type}
                  </Badge>
                </td>
                <td className="px-4 py-2">{item.category}</td>
                <td className="px-4 py-2">{item.createdAt}</td>
                <td className="px-4 py-2">{item.downloads}</td>
                <td className="px-4 py-2 text-right space-x-2">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => onEdit(item.id)}
                  >
                    Sửa
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="text-destructive"
                    onClick={() => handleDelete(item.id)}
                  >
                    Xóa
                  </Button>
                </td>
              </tr>
            ))}
            {filteredContents.length === 0 && (
              <tr>
                <td
                  colSpan={6}
                  className="text-center py-6 text-muted-foreground"
                >
                  Không tìm thấy tài liệu phù hợp.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </Card>
    </div>
  );
}

import { useState } from "react";
import { type Content } from "@/types/content";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import ContentCard from "./ContentCard";  
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "sonner";

import { List, LayoutGrid } from "lucide-react";

const mockContents: Content[] = [
  {
    id: "1",
    title: "Giáo trình Lập trình Web",
    description: "Tài liệu toàn diện về phát triển web hiện đại",
    type: "PDF",
    category: "Lập trình",
    createdAt: "2025-11-01",
    downloads: 234,
    size: "16.63MB",
    uploaderRole: "admin",
  },
  {
    id: "2",
    title: "Bài giảng JavaScript nâng cao",
    description: "Các khái niệm nâng cao trong JavaScript ES6+",
    type: "DOCX",
    category: "Lập trình",
    createdAt: "2025-10-28",
    downloads: 189,
    size: "12.45MB",
    uploaderRole: "user",
  },
  {
    id: "3",
    title: "React Hooks Tutorial",
    description: "Hướng dẫn chi tiết sử dụng React Hooks",
    type: "PDF",
    category: "Frontend",
    createdAt: "2025-10-25",
    downloads: 456,
    size: "18.21MB",
    uploaderRole: "admin",
  },
  {
    id: "4",
    title: "Database Design Best Practices",
    description: "Các thực hành tốt nhất trong thiết kế cơ sở dữ liệu",
    type: "ZIP",
    category: "Database",
    createdAt: "2025-10-20",
    downloads: 123,
    size: "22.87MB",
    uploaderRole: "user",
  },
  {
    id: "5",
    title: "Cấu trúc dữ liệu & Giải thuật",
    description: "Phân tích thuật toán, cấu trúc dữ liệu cơ bản",
    type: "PDF",
    category: "Lập trình",
    createdAt: "2025-10-18",
    downloads: 312,
    size: "15.04MB",
    uploaderRole: "user",
  },
  {
    id: "6",
    title: "Machine Learning Overview",
    description:
      "Tổng quan về machine learning, supervised và unsupervised learning",
    type: "DOCX",
    category: "AI",
    createdAt: "2025-10-15",
    downloads: 415,
    size: "20.13MB",
    uploaderRole: "admin",
  },
  {
    id: "7",
    title: "Web Security Handbook",
    description: "Bảo mật web và OWASP Top 10",
    type: "PDF",
    category: "Security",
    createdAt: "2025-10-12",
    downloads: 203,
    size: "13.29MB",
    uploaderRole: "admin",
  },
  {
    id: "8",
    title: "Cẩm nang Git & GitHub",
    description: "Branching model, GitHub Actions, workflow",
    type: "ZIP",
    category: "DevOps",
    createdAt: "2025-10-10",
    downloads: 98,
    size: "19.05MB",
    uploaderRole: "user",
  },
  {
    id: "9",
    title: "UI/UX Design Guidelines",
    description: "Các tiêu chuẩn thiết kế trải nghiệm người dùng hiện đại",
    type: "DOCX",
    category: "Design",
    createdAt: "2025-10-07",
    downloads: 167,
    size: "11.77MB",
    uploaderRole: "user",
  },
];

function getTypeColor(type: string) {
  switch (type) {
    case "PDF":
      return "bg-red-500/10 text-red-600 dark:bg-red-500/20 dark:text-red-300";
    case "DOCX":
      return "bg-blue-500/10 text-blue-600 dark:bg-blue-500/20 dark:text-blue-300";
    case "ZIP":
      return "bg-yellow-500/10 text-yellow-700 dark:bg-yellow-500/20 dark:text-yellow-300";
    default:
      return "bg-gray-500/10 text-gray-700 dark:bg-gray-500/20 dark:text-gray-300";
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
  const [viewMode, setViewMode] = useState<"list" | "card">("card");

  const filteredContents = contents.filter((content) => {
    const matchSearch = content.title
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchType =
      filterType === "all" ? true : content.type === filterType;
    return matchSearch && matchType;
  });

  const handleDelete = (id: string) => {
    if (confirm("Bạn có chắc muốn xóa tài liệu này?")) {
      setContents((prev) => prev.filter((item) => item.id !== id));
      toast.success("Đã xóa tài liệu!");
    }
  };

  return (
    <div className="max-w-screen-xl mx-auto px-4 py-6 space-y-6 text-foreground">
      {/* Header + filter + toggle */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <h1 className="text-3xl font-bold">Quản lý nội dung</h1>

        <div className="flex flex-col sm:flex-row gap-2">
          <Input
            placeholder="Tìm kiếm tài liệu..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="sm:w-64 rounded-lg border px-4 py-2 text-sm bg-background text-foreground"
          />
          <Select value={filterType} onValueChange={setFilterType}>
            <SelectTrigger className="sm:w-40 bg-background text-foreground border">
              <SelectValue placeholder="Tất cả loại" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Tất cả loại</SelectItem>
              <SelectItem value="PDF">PDF</SelectItem>
              <SelectItem value="DOCX">DOCX</SelectItem>
              <SelectItem value="ZIP">ZIP</SelectItem>
            </SelectContent>
          </Select>

          {/* View toggle buttons */}
          <div className="flex gap-2">
            <Button
              size="icon"
              variant={viewMode === "card" ? "default" : "outline"}
              onClick={() => setViewMode("card")}
            >
              <LayoutGrid className="w-4 h-4" />
            </Button>

            <Button
              size="icon"
              variant={viewMode === "list" ? "default" : "outline"}
              onClick={() => setViewMode("list")}
            >
              <List className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>

      <p className="text-sm text-muted-foreground italic">
        Tìm thấy {filteredContents.length} tài liệu
      </p>

      {/* LIST VIEW */}
      {viewMode === "list" ? (
        <Card className="overflow-x-auto bg-background text-foreground shadow-md rounded-xl">
          <table className="w-full text-[15px]">
            <thead>
              <tr className="border-b text-left bg-muted/20">
                <th className="px-6 py-4">Tiêu đề</th>
                <th className="px-6 py-4">Dung lượng</th>
                <th className="px-6 py-4">Người đăng</th>
                <th className="px-6 py-4">Loại</th>
                <th className="px-6 py-4">Danh mục</th>
                <th className="px-6 py-4">Ngày tạo</th>
                <th className="px-6 py-4">Lượt tải</th>
                <th className="px-6 py-4 text-right">Hành động</th>
              </tr>
            </thead>

            <tbody>
            {filteredContents.map((item) => (
              <tr
                key={item.id}
                className="border-b hover:bg-muted/50 transition-colors"
              >
                {/* Tiêu đề + mô tả */}
                <td className="px-6 py-4 font-medium">
                  <div>{item.title}</div>
                  <div className="text-muted-foreground text-xs">
                    {item.description}
                  </div>
                </td>

                {/* Dung lượng */}
                <td className="px-6 py-4">
                  {item.size || <span className="text-muted-foreground text-sm">?</span>}
                </td>

                {/* Người đăng */}
                <td className="px-6 py-4 capitalize text-sm">
                  {item.uploaderRole === "admin" ? (
                    <span className="text-red-600 font-medium">Admin</span>
                  ) : (
                    <span className="text-gray-700 dark:text-gray-300">User</span>
                  )}
                </td>

                {/* Loại tài liệu */}
                <td className="px-6 py-4">
                  <Badge className={getTypeColor(item.type)}>{item.type}</Badge>
                </td>

                {/* Danh mục */}
                <td className="px-6 py-4">{item.category}</td>

                {/* Ngày tạo */}
                <td className="px-6 py-4">{item.createdAt}</td>

                {/* Lượt tải */}
                <td className="px-6 py-4">{item.downloads}</td>

                {/* Hành động */}
                <td className="px-6 py-4 text-right space-x-2">
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
                  colSpan={8}
                  className="text-center py-8 text-muted-foreground"
                >
                  Không tìm thấy tài liệu phù hợp.
                </td>
              </tr>
            )}
          </tbody>
          </table>
        </Card>
      ) : (
    <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {filteredContents.map((item) => (
        <ContentCard
          key={item.id}
          item={item}
          onEdit={onEdit}
          onDelete={handleDelete}
        />
      ))}
    </div>
  
          )}
        </div>
  );
}

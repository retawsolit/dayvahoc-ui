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
    title: "System & Network Administration Scripting & Shell",
    description: "Khái niệm cơ bản về shell, hướng dẫn lập trình sh scripting",
    type: "PDF",
    category: "Lập trình",
    createdAt: "2025-11-01",
    downloads: 234,
    size: "16.63MB",
    uploaderRole: "admin",
    fileType: "pdf",
    fileUrl: "/mock_data/SNA_Scripting.pdf",
  },
  {
    id: "2",
    title: "Bài thực hành Lab 4 - Shell Script",
    description:
      "Các thao tác cơ bản, và câu lệnh điều kiện trong Shell Script (bash).",
    type: "DOCX",
    category: "Lập trình",
    createdAt: "2025-10-28",
    downloads: 189,
    size: "12.45MB",
    uploaderRole: "user",
    fileType: "docx",
    fileUrl: "/mock_data/Lab4_SNA.pdf",
  },
  {
    id: "3",
    title: "Chương 5: Network Layer Control Plane",
    description:
      "Thuật toán định tuyến (Link State, Distance Vector) , các giao thức (OSPF, BGP)",
    type: "PPTX",
    category: "Frontend",
    createdAt: "2025-10-25",
    downloads: 456,
    size: "18.21MB",
    uploaderRole: "admin",
    fileType: "pptx",
    fileUrl: "/mock_data/Chapter_5_v8.0.pdf",
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
  {
    id: "10",
    title: "Video Visual",
    description: "Demo video preview",
    type: "MP4",
    category: "Frontend",
    createdAt: "2025-11-18",
    downloads: 100,
    size: "3.21 MB",
    uploaderRole: "admin",
    fileType: "video",
    fileUrl: "/mock_data/visualizer.mp4",
  },
  {
    id: "11",
    title: "Ảnh Visual",
    description: "Demo image preview",
    type: "JPG",
    category: "Design",
    createdAt: "2025-11-18",
    downloads: 58,
    size: "42.3 KB",
    uploaderRole: "user",
    fileType: "image",
    fileUrl: "/mock_data/background.jpg",
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
    case "MP4":
      return "bg-purple-500/10 text-purple-600 dark:bg-purple-500/20 dark:text-purple-300";
    case "JPG":
      return "bg-green-500/10 text-green-600 dark:bg-green-500/20 dark:text-green-300";
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

  // PAGINATION
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;

  const filteredContents = contents.filter((content) => {
    const matchSearch = content.title
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchType = filterType === "all" || content.type === filterType;
    return matchSearch && matchType;
  });

  const totalItems = filteredContents.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = Math.min(startIndex + itemsPerPage, totalItems);

  const paginatedContents = filteredContents.slice(startIndex, endIndex);

  const handleDelete = (id: string) => {
    if (confirm("Bạn có chắc muốn xóa tài liệu này?")) {
      setContents((prev) => prev.filter((item) => item.id !== id));
      toast.success("Đã xóa tài liệu!");
    }
  };

  return (
    <div className="max-w-screen-xl mx-auto px-4 py-6 space-y-6 text-foreground">
      {/* Header + filter + toggle */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
        <h1 className="text-3xl font-bold text-center lg:text-left">
          Quản lý nội dung
        </h1>

        <div className="flex flex-col sm:flex-row gap-2 w-full lg:w-auto">
          <Input
            placeholder="Tìm kiếm tài liệu..."
            value={searchTerm}
            onChange={(e) => {
              setSearchTerm(e.target.value);
              setCurrentPage(1);
            }}
            className="w-full sm:w-64 sm:flex-1 lg:flex-none rounded-lg border px-4 py-2 text-sm bg-background text-foreground"
            
          />
        <div className="flex gap-2 sm:flex-1 lg:flex-none"></div>
          <Select
            value={filterType}
            onValueChange={(v) => {
              setFilterType(v);
              setCurrentPage(1);
            }}
          >
            <SelectTrigger className="w-full sm:w-40 bg-background text-foreground border">
              <SelectValue placeholder="Tất cả loại" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Tất cả loại</SelectItem>
              <SelectItem value="PDF">PDF</SelectItem>
              <SelectItem value="DOCX">DOCX</SelectItem>
              <SelectItem value="ZIP">ZIP</SelectItem>
              <SelectItem value="MP4">MP4</SelectItem>
              <SelectItem value="JPG">JPG</SelectItem>
            </SelectContent>
          </Select>

          {/* View toggle */}
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

      {/* Result count */}
      <p className="text-sm text-muted-foreground italic">
        Đang xem {startIndex + 1}–{endIndex} / {totalItems} tài liệu
      </p>

      {/* LIST VIEW */}
      {viewMode === "list" ? (
        <Card className="overflow-x-auto bg-white dark:bg-zinc-800 text-foreground shadow-md rounded-xl">
          <table className="w-full text-[15px]">
            <thead>
              <tr className="border-b text-left bg-zinc-100 dark:bg-zinc-700/40">
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
              {paginatedContents.map((item) => (
                <tr
                  key={item.id}
                  className="border-b hover:bg-zinc-700/30 transition-colors"
                >
                  <td className="px-6 py-4 font-medium">
                    <div>{item.title}</div>
                    <div className="text-muted-foreground text-xs">
                      {item.description}
                    </div>
                  </td>

                  <td className="px-6 py-4">{item.size || "-"}</td>

                  <td className="px-6 py-4 capitalize text-sm">
                    {item.uploaderRole === "admin" ? (
                      <span className="text-red-600 font-medium">Admin</span>
                    ) : (
                      <span className="text-gray-700 dark:text-gray-300">User</span>
                    )}
                  </td>

                  <td className="px-6 py-4">
                    <Badge className={getTypeColor(item.type)}>
                      {item.type}
                    </Badge>
                  </td>

                  <td className="px-6 py-4">{item.category}</td>
                  <td className="px-6 py-4">{item.createdAt}</td>
                  <td className="px-6 py-4">{item.downloads}</td>

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

              {totalItems === 0 && (
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
        /* CARD VIEW */
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {paginatedContents.map((item) => (
            <ContentCard
              key={item.id}
              item={item}
              onEdit={onEdit}
              onDelete={handleDelete}
            />
          ))}
        </div>
      )}

      {/* PAGINATION BUTTONS */}
      {totalPages > 1 && (
        <div className="flex justify-center items-center gap-3 pt-6">
          <Button
            variant="outline"
            disabled={currentPage === 1}
            onClick={() => setCurrentPage((p) => p - 1)}
          >
            Trước
          </Button>

          <span className="text-sm">
            Trang {currentPage}/{totalPages}
          </span>

          <Button
            variant="outline"
            disabled={currentPage === totalPages}
            onClick={() => setCurrentPage((p) => p + 1)}
          >
            Sau
          </Button>
        </div>
      )}
    </div>
  );
}

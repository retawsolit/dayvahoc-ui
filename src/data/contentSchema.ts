export type ContentType = "PDF" | "DOCX" | "ZIP";

export interface Content {
  id: string;
  title: string;
  description: string;
  type: ContentType;
  category: string;
  createdAt: string;
  downloadCount: number;
}

export const mockContents: Content[] = [
  {
    id: "1",
    title: "Giáo trình Lập trình Web",
    description: "Tài liệu toàn diện về phát triển web hiện đại",
    type: "PDF",
    category: "Lập trình",
    createdAt: "2025-11-01",
    downloadCount: 234,
  },
  {
    id: "2",
    title: "Bài giảng JavaScript nâng cao",
    description: "Các khái niệm nâng cao trong JavaScript ES6+",
    type: "DOCX",
    category: "Lập trình",
    createdAt: "2025-10-28",
    downloadCount: 189,
  },
  {
    id: "3",
    title: "React Hooks Tutorial",
    description: "Hướng dẫn chi tiết sử dụng React Hooks",
    type: "PDF",
    category: "Frontend",
    createdAt: "2025-10-25",
    downloadCount: 456,
  },
  {
    id: "4",
    title: "Database Design Best Practices",
    description: "Các thực hành tốt nhất trong thiết kế cơ sở dữ liệu",
    type: "ZIP",
    category: "Database",
    createdAt: "2025-10-20",
    downloadCount: 123,
  },
];

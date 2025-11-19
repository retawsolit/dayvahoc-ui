export type Content = {
  id: string;
  title: string;
  description: string;
  type: "PDF" | "DOCX" | "PPTX" | "ZIP" | "JPG" | "MP4";
  category: string;
  createdAt: string;
  downloads: number;
  size?: string;
  uploaderRole?: "admin" | "user";
  fileType?: "image" | "video" | "pdf" | "docx" | "pptx" | "unknown";
  fileUrl?: string;
};

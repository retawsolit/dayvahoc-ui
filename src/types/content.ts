export type Content = {
  id: string;
  title: string;
  description: string;
  type: "PDF" | "DOCX" | "ZIP";
  category: string;
  createdAt: string;
  downloads: number;
  size?: string;
  uploaderRole?: "admin" | "user";
};

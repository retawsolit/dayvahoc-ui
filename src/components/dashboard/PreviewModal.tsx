import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { ExternalLink } from "lucide-react";

interface PreviewModalProps {
  open: boolean;
  onClose: () => void;
  fileUrl: string;
  fileType: "image" | "video" | "pdf" | "docx" | "pptx" | "unknown" | string;
  title?: string;
}

export default function PreviewModal({
  open,
  onClose,
  fileUrl,
  fileType,
  title,
}: PreviewModalProps) {
  
  const renderPreview = () => {
    const type = fileType?.toLowerCase();

    switch (type) {
      case "image":
      case "jpg":
      case "png":
      case "jpeg":
      case "gif":
        return (
          <img
            src={fileUrl}
            alt="Preview"
            className="w-full h-auto rounded-md object-contain"
          />
        );

      case "video":
      case "mp4":
        return (
          <video
            src={fileUrl}
            controls
            autoPlay
            className="w-full rounded-md bg-black"
          />
        );

      case "pdf":
      case "docx":
      case "pptx":
        return (
          <iframe
            src={fileUrl}
            title="Document Preview"
            className="w-full h-full min-h-[60vh] rounded-md border dark:border-zinc-700"
          />
        );

      default:
        return (
          <div className="text-center text-muted-foreground py-12">
            <p className="mb-4">Không hỗ trợ xem trước định dạng này.</p>
             <a 
              href={fileUrl} 
              target="_blank" 
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-md text-sm font-medium bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-6 py-2"
            >
              Tải xuống tài liệu
            </a>
          </div>
        );
    }
  };

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent 
        className="max-w-4xl h-[90vh] flex flex-col overflow-hidden p-0 bg-white dark:bg-zinc-800 dark:border-zinc-700 border-border"
      >
        {fileUrl && (
          <a
            href={fileUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="absolute right-14 top-3 flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium opacity-80 ring-offset-background transition-all hover:opacity-100 hover:bg-zinc-100 dark:hover:bg-zinc-700 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none text-foreground z-50"
            title="Mở trong tab mới"
          >
            <ExternalLink className="h-4 w-4" />
            <span>Mở tab mới</span> 
          </a>
        )}

        <div className="px-6 py-4 border-b dark:border-zinc-700">
          <DialogHeader>
            <DialogTitle className="text-foreground dark:text-zinc-100 text-xl pr-32 truncate">
              Xem trước: {title || "Tài liệu"}
            </DialogTitle>
          </DialogHeader>
        </div>

        <div className="flex-1 overflow-y-auto p-6 bg-zinc-50/50 dark:bg-zinc-900/50 flex items-center justify-center">
          {renderPreview()}
        </div>

      </DialogContent>
    </Dialog>
  );
}
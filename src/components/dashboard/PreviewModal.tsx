import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";

interface PreviewModalProps {
  open: boolean;
  onClose: () => void;
  fileUrl: string;
  fileType: "image" | "video" | "pdf" | "docx" | "pptx" | "unknown";
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
    switch (fileType) {
      case "image":
        return (
          <img
            src={fileUrl}
            alt="Image preview"
            className="w-full h-auto rounded-md"
          />
        );

      case "video":
        return (
          <video
            src={fileUrl}
            controls
            className="w-full max-h-[500px] rounded-md"
          />
        );

      case "pdf":
      case "docx":
      case "pptx":
        return (
          <iframe
            src={fileUrl}
            title="Document Preview"
            className="w-full h-[600px] rounded-md border"
          />
        );

      default:
        return (
          <div className="text-center text-muted-foreground py-8">
            Không hỗ trợ xem trước định dạng này.
          </div>
        );
    }
  };

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto bg-white dark:bg-zinc-800 dark:border-zinc-700 border-border">
        <DialogHeader>
          <DialogTitle className="text-foreground text-xl">
            Xem trước: {title || "Tài liệu"}</DialogTitle>
        </DialogHeader>

        <div className="mt-4 flex justify-center">
          {renderPreview()}
          </div>
      </DialogContent>
    </Dialog>
  );
}

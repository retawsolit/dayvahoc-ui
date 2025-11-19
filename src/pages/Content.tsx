import MainLayout from "@/components/layouts/MainLayout";
import ContentForm from "@/components/dashboard/ContentForm";
import ContentList from "@/components/dashboard/ContentList";
import { useState } from "react";
import { Button } from "@/components/ui/button";

export default function ContentPage() {
  const [showForm, setShowForm] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);

  const handleEdit = (id: string) => {
    setEditingId(id);
    setShowForm(true);
  };

  const handleCancel = () => {
    setEditingId(null);
    setShowForm(false);
  };

return (
  <MainLayout>
    {/* Header section */}
    <div className="bg-background py-6">
      <div className="max-w-screen-xl mx-auto px-4 flex flex-col sm:flex-row justify-between items-center gap-4">
        {!showForm && (
          <h1 className="text-3xl font-bold">Tài liệu</h1>
        )}

        {!showForm && (
          <Button
            onClick={() => setShowForm(true)}
            className="bg-blue-600 hover:bg-blue-700 text-white dark:bg-blue-500 dark:hover:bg-blue-600"
          >
            Tạo mới
          </Button>
        )}
      </div>
    </div>

    {/* Nội dung chính */}
    <div className="max-w-screen-xl mx-auto px-4 py-6">
      {showForm ? (
        <ContentForm
          content={
            editingId
              ? {
                  id: editingId,
                  title: "Mock",
                  description: "",
                  type: "PDF",
                  category: "Test",
                  createdAt: "",
                  downloads: 0,
                  size: "1.2MB",            
                  uploaderRole: "admin",    
                }
              : undefined
          }
          onCancel={handleCancel}
        />
      ) : (
        <ContentList onEdit={handleEdit} />
      )}
    </div>
  </MainLayout>
);
}

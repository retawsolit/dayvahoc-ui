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
      {!showForm && (
        <div className="py-6">
          <div className="max-w-screen-xl mx-auto px-4 flex flex-col sm:flex-row justify-between items-center gap-4">
            <h1 className="text-3xl font-bold">Tài liệu</h1>
            
            <Button
              onClick={() => setShowForm(true)}
              className="bg-blue-600 hover:bg-blue-700 text-white dark:bg-blue-500 dark:hover:bg-blue-600"
            >
              Tạo mới
            </Button>
          </div>
        </div>
      )}

      <div>
        {showForm ? (
          <ContentForm
            content={
              editingId
                ? {
                    id: editingId,
                    title: "Mock Document",
                    description: "Mô tả mẫu...",
                    type: "PDF",
                    category: "Lập trình",
                    createdAt: "2025-01-01",
                    downloads: 10,
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
import MainLayout from "@/components/layouts/MainLayout";
import ContentForm from "@/components/dashboard/ContentForm";
import ContentList from "@/components/dashboard/ContentList";
import { useState } from "react";

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
      <div className="flex justify-between mb-4">
        <h1 className="text-2xl font-bold">Tài liệu</h1>
        {!showForm && (
          <button
            onClick={() => setShowForm(true)}
            className="bg-primary text-white px-4 py-2 rounded-md text-sm"
          >
            Tạo mới
          </button>
        )}
      </div>

      {showForm ? (
        <ContentForm content={editingId ? { id: editingId, title: "Mock", description: "", type: "PDF", category: "Test", createdAt: "", downloads: 0 } : undefined} onCancel={handleCancel} />
      ) : (
        <ContentList onEdit={handleEdit} />
      )}
    </MainLayout>
  );
}

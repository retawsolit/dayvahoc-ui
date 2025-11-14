import { useState } from "react";
import { type Content } from "@/types/content";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "sonner";
import { categories } from "@/data/categories";

export default function ContentForm({
  content,
  onCancel,
}: {
  content?: Content;
  onCancel: () => void;
}) {
  const isEditing = !!content;

  const [formData, setFormData] = useState({
    title: content?.title || "",
    description: content?.description || "",
    category: content?.category || "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.title || !formData.description || !formData.category) {
      toast.error("Vui lòng nhập đầy đủ thông tin!");
      return;
    }

    toast.success(
      isEditing
        ? "Cập nhật tài liệu thành công!"
        : "Tạo mới tài liệu thành công!"
    );

    onCancel();
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 text-foreground">
      <h1 className="text-xl font-semibold">
        {isEditing ? "Chỉnh sửa tài liệu" : "Tạo tài liệu mới"}
      </h1>

      <div className="space-y-4">
        <div>
          <Label>Tiêu đề tài liệu</Label>
          <Input
            placeholder="Nhập tiêu đề tài liệu"
            value={formData.title}
            onChange={(e) =>
              setFormData({ ...formData, title: e.target.value })
            }
          />
        </div>
        <div>
          <Label>Mô tả</Label>
          <Textarea
            placeholder="Nhập mô tả tài liệu"
            value={formData.description}
            onChange={(e) =>
              setFormData({ ...formData, description: e.target.value })
            }
          />
        </div>
        <div>
          <Label>Danh mục</Label>
          <Select
            value={formData.category}
            onValueChange={(val) =>
              setFormData({ ...formData, category: val })
            }
          >
            <SelectTrigger>
              <SelectValue placeholder="Chọn danh mục" />
            </SelectTrigger>
            <SelectContent>
              {categories.map((cat) => (
                <SelectItem key={cat.value} value={cat.label}>
                  {cat.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {!isEditing && (
          <div>
            <Label>Tệp tài liệu</Label>
            <label
              htmlFor="file"
              className="block w-full p-6 text-center border border-dashed rounded-lg cursor-pointer 
                         bg-background text-foreground hover:bg-muted transition"
            >
              <p>Kéo thả tệp hoặc nhấn để chọn</p>
              <input id="file" type="file" className="hidden" />
            </label>
          </div>
        )}
      </div>

      <div className="flex justify-end gap-2">
        <Button variant="outline" type="button" onClick={onCancel}>
          Hủy
        </Button>
        <Button type="submit">{isEditing ? "Cập nhật" : "Tạo mới"}</Button>
      </div>
    </form>
  );
}

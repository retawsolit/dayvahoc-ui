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
    <div className="max-w-3xl mx-auto px-4 md:px-6 py-10">
      <h1 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-8">
        {isEditing ? "Chỉnh sửa tài liệu" : "Tạo tài liệu mới"}
      </h1>

      <div
    className="rounded-xl border border-zinc-200 dark:border-zinc-700 
               bg-background shadow-sm p-8 transition-colors duration-300">
        <form onSubmit={handleSubmit} className="space-y-8 text-foreground">
          {/* Tiêu đề */}
          <div>
            <Label
              htmlFor="title"
              className="text-base font-medium text-foreground mb-3 block"
            >
              Tiêu đề tài liệu
            </Label>
            <Input
              id="title"
              placeholder="Nhập tiêu đề tài liệu"
              value={formData.title}
              onChange={(e) =>
                setFormData({ ...formData, title: e.target.value })
              }
              className="text-base"
            />
          </div>

          {/* Mô tả */}
          <div>
            <Label
              htmlFor="description"
              className="text-base font-medium text-foreground mb-3 block"
            >
              Mô tả
            </Label>
            <Textarea
              id="description"
              placeholder="Nhập mô tả tài liệu"
              value={formData.description}
              onChange={(e) =>
                setFormData({ ...formData, description: e.target.value })
              }
              className="text-base min-h-[120px]"
            />
          </div>

          {/* Danh mục */}
          <div>
            <Label
              htmlFor="category"
              className="text-base font-medium text-foreground mb-3 block"
            >
              Danh mục
            </Label>
            <Select
              value={formData.category}
              onValueChange={(val) =>
                setFormData({ ...formData, category: val })
              }
            >
              <SelectTrigger id="category" className="text-base">
                <SelectValue placeholder="Chọn danh mục" />
              </SelectTrigger>
              <SelectContent
                className="z-50 w-[var(--radix-select-trigger-width)] max-h-[150px] overflow-y-auto"
                position="popper"
              >
                {categories.map((cat) => (
                  <SelectItem key={cat.value} value={cat.label}>
                    {cat.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Upload file */}
          {!isEditing && (
            <div>
              <Label
                htmlFor="file"
                className="text-base font-medium text-foreground mb-3 block"
              >
                Tệp tài liệu
              </Label>
              <label
                htmlFor="file"
                className="block w-full p-6 text-center border border-dashed rounded-lg cursor-pointer 
                           bg-background text-foreground hover:bg-muted transition"
              >
                <p className="text-base">Kéo thả tệp hoặc nhấn để chọn</p>
                <input id="file" type="file" className="hidden" />
              </label>
            </div>
          )}

          {/* Action buttons */}
          <div className="flex justify-end gap-3 pt-6 border-t border-zinc-200 dark:border-zinc-700">
            <Button variant="outline" type="button" onClick={onCancel}>
              Hủy
            </Button>
            <Button type="submit">
              {isEditing ? "Cập nhật" : "Tạo mới"}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}

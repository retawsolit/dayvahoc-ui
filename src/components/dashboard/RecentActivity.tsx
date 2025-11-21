import { Card, CardContent } from "@/components/ui/card";

const activities = [
  { title: "Tải lên tài liệu mới", by: "Admin", time: "2 giờ trước" },
  { title: "Tạo người dùng mới", by: "Manager", time: "5 giờ trước" },
  { title: "Cập nhật tài liệu", by: "Admin", time: "1 ngày trước" },
  { title: "Xóa tài liệu", by: "Admin", time: "2 ngày trước" },
];

const RecentActivity = () => {
  return (
    <Card className="shadow-sm bg-white dark:bg-zinc-800 border-border dark:border-zinc-700">
      <CardContent className="p-4">
        <h2 className="font-semibold text-lg mb-2">Hoạt động gần đây</h2>
        <ul className="space-y-3">
          {activities.map((item, index) => (
            <li
              key={index}
              className="border-b border-border pb-2 hover:bg-muted transition-colors rounded-sm px-2"
            >
              <p className="font-medium">{item.title}</p>
              <p className="text-sm text-muted-foreground">
                Bởi {item.by} – {item.time}
              </p>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
};

export default RecentActivity;

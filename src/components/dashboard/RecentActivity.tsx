import { Card, CardContent } from "@/components/ui/card";

const activities = [
  { title: "Tải lên tài liệu mới", by: "Admin", time: "2 giờ trước" },
  { title: "Tạo người dùng mới", by: "Manager", time: "5 giờ trước" },
  { title: "Cập nhật tài liệu", by: "Admin", time: "1 ngày trước" },
  { title: "Xóa tài liệu", by: "Admin", time: "2 ngày trước" },
];

const RecentActivity = () => {
  return (
    <Card className="shadow-sm bg-white dark:bg-zinc-800 border border-border dark:border-zinc-700">
      <CardContent className="px-4 py-5 sm:px-6 sm:py-6">
        <h2 className="font-semibold text-lg sm:text-xl mb-4 text-gray-900 dark:text-white">
          Hoạt động gần đây
        </h2>

        <ul className="space-y-3">
          {activities.map((item, index) => (
            <li
              key={index}
              className="border-b last:border-none border-border pb-2 sm:pb-3 hover:bg-zinc-100 dark:hover:bg-zinc-700 transition-colors duration-150 rounded-md px-2 sm:px-3"
            >
              <p className="font-medium text-sm sm:text-base text-gray-800 dark:text-gray-100">
                {item.title}
              </p>
              <p className="text-xs sm:text-sm text-muted-foreground dark:text-zinc-400">
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

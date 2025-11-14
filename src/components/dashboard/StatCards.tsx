import { Card, CardContent } from "@/components/ui/card";

const stats = [
  {
    title: "Tài liệu",
    value: "245",
    icon: "📁",
    valueColor: "text-blue-700 dark:text-blue-400",
  },
  {
    title: "Người dùng",
    value: "1.2K",
    icon: "👥",
    valueColor: "text-purple-700 dark:text-purple-400",
  },
  {
    title: "Lượt tải",
    value: "8.3K",
    icon: "⬇️",
    valueColor: "text-emerald-700 dark:text-emerald-400",
  },
  {
    title: "Dung lượng",
    value: "2.5GB",
    icon: "💾",
    valueColor: "text-indigo-700 dark:text-indigo-400",
  },
];

const StatCards = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
      {stats.map((stat) => (
        <Card
          key={stat.title}
          className="shadow-md bg-background text-foreground border border-border"
        >
          <CardContent className="p-6 min-h-[120px] flex flex-col justify-between">
            <div className="flex justify-between items-start">
              <p className="text-sm font-medium text-muted-foreground">
                {stat.title}
              </p>
              <span className="text-2xl">{stat.icon}</span>
            </div>

            <p className={`text-3xl font-bold mt-4 ${stat.valueColor}`}>
              {stat.value}
            </p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default StatCards;

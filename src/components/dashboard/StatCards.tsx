import { Card, CardContent } from "@/components/ui/card";

const stats = [
  {
    title: "Tài liệu",
    value: "245",
    icon: "📁",
    color: "bg-red-100 text-red-700 dark:bg-red-450/20 dark:text-red-400",
  },
  {
    title: "Người dùng",
    value: "1.2K",
    icon: "👥",
    color: "bg-purple-100 text-purple-700 dark:bg-purple-450/20 dark:text-purple-400",
  },
  {
    title: "Lượt tải",
    value: "8.3K",
    icon: "⬇️",
    color: "bg-emerald-100 text-emerald-700 dark:bg-emerald-450/20 dark:text-emerald-400",
  },
  {
    title: "Dung lượng",
    value: "2.5GB",
    icon: "💾",
    color: "bg-cyan-100 text-cyan-700 dark:bg-cyan-450/20 dark:text-cyan-400",
  },
];

const StatCards = () => {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4">
      {stats.map((stat) => (
        <Card
          key={stat.title}
          className="shadow-sm rounded-xl transition-all duration-200 hover:shadow-md bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700"
        >
          <CardContent className="p-4 sm:p-5 md:p-6">
            <div className="flex items-center justify-between gap-3">
              <div>
                <p className="text-sm text-muted-foreground dark:text-zinc-400">{stat.title}</p>
                <p className={`text-2xl font-bold mt-1 ${stat.color.split(" ")[1]}`}>
                  {stat.value}
                </p>
              </div>
              <div className={`w-10 h-10 rounded-full flex items-center justify-center ${stat.color}`}>
                <span className="text-xl">{stat.icon}</span>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default StatCards;

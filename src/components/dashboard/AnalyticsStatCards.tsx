import { Card, CardContent } from "@/components/ui/card";

const stats = [
  {
    title: "Tổng tài liệu",
    value: "1,234",
    diff: "+12% so với tháng trước",
  },
  {
    title: "Lượt tải",
    value: "45,678",
    diff: "+8% so với tháng trước",
  },
  {
    title: "Người dùng hoạt động",
    value: "892",
    diff: "+15% so với tháng trước",
  },
  {
    title: "Tỉ lệ tương tác",
    value: "78.5%",
    diff: "+5% so với tháng trước",
  },
];

const AnalyticsStatCards = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {stats.map((stat, index) => (
        <Card key={index} className="shadow-md">
          <CardContent className="p-4">
            <p className="text-gray-600 text-sm">{stat.title}</p>
            <p className="text-2xl font-bold text-indigo-700">{stat.value}</p>
            <p className="text-green-600 text-sm">{stat.diff}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default AnalyticsStatCards;

import { Card, CardContent } from "@/components/ui/card";


const activities = [
{ title: "Tải lên tài liệu mới", by: "Admin", time: "2 giờ trước" },
{ title: "Tạo người dùng mới", by: "Manager", time: "5 giờ trước" },
{ title: "Cập nhật tài liệu", by: "Admin", time: "1 ngày trước" },
{ title: "Xóa tài liệu", by: "Admin", time: "2 ngày trước" },
];


const RecentActivity = () => {
return (
<Card className="shadow-md">
<CardContent className="p-4">
<h2 className="font-semibold text-lg mb-2">Hoạt động gần đây</h2>
<ul className="space-y-3">
{activities.map((item, index) => (
<li key={index} className="border-b pb-2">
<p className="text-gray-800 font-medium">{item.title}</p>
<p className="text-sm text-gray-500">
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
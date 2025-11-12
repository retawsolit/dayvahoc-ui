
import { Card, CardContent } from "@/components/ui/card";
import { BookOpen, Users, Download, HardDrive } from "lucide-react";


const stats = [
{ title: "Tài liệu", icon: <BookOpen className="w-6 h-6 text-indigo-600" />, value: "245" },
{ title: "Người dùng", icon: <Users className="w-6 h-6 text-indigo-600" />, value: "1.2K" },
{ title: "Lượt tải", icon: <Download className="w-6 h-6 text-indigo-600" />, value: "8.3K" },
{ title: "Dung lượng", icon: <HardDrive className="w-6 h-6 text-indigo-600" />, value: "2.5GB" },
];


const StatCards = () => {
return (
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
{stats.map((stat) => (
<Card key={stat.title} className="shadow-md">
<CardContent className="p-4 flex items-center gap-4">
{stat.icon}
<div>
<p className="text-gray-600 text-sm">{stat.title}</p>
<p className="text-2xl font-bold text-indigo-700">{stat.value}</p>
</div>
</CardContent>
</Card>
))}
</div>
);
};


export default StatCards;
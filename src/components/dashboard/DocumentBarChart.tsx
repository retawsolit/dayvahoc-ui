import {
BarChart,
Bar,
XAxis,
YAxis,
CartesianGrid,
Tooltip,
Legend,
ResponsiveContainer,
} from "recharts";


const data = [
{ month: "T1", documents: 52, uploads: 40 },
{ month: "T2", documents: 61, uploads: 49 },
{ month: "T3", documents: 68, uploads: 53 },
{ month: "T4", documents: 80, uploads: 65 },
{ month: "T5", documents: 72, uploads: 58 },
{ month: "T6", documents: 90, uploads: 75 },
];


const DocumentBarChart = () => {
return (
<div className="bg-white rounded-lg shadow-md p-4">
<h2 className="font-semibold text-lg mb-2">Số lượng tài liệu 6 tháng qua</h2>
<ResponsiveContainer width="100%" height={300}>
<BarChart data={data}>
<CartesianGrid strokeDasharray="3 3" />
<XAxis dataKey="month" />
<YAxis />
<Tooltip />
<Legend />
<Bar dataKey="documents" fill="#1f2937" name="Tài liệu" />     
<Bar dataKey="uploads" fill="#6b7280" name="Tải lên" />  
</BarChart>
</ResponsiveContainer>
</div>
);
};

export default DocumentBarChart;
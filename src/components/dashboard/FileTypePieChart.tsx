import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "PDF", value: 45 },
  { name: "DOCX", value: 30 },
  { name: "PPTX", value: 15 },
  { name: "ZIP", value: 10 },
];

const COLORS = ["#6366f1", "#ef4444", "#10b981", "#f59e0b", "#3b82f6"];

const FileTypePieChart = () => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4">
      <h2 className="font-semibold text-lg mb-2">Loại tài liệu</h2>
      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie
            data={data}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            outerRadius={90}
            fill="#8884d8"
            label
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default FileTypePieChart;

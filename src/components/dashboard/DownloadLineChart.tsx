import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  { month: "T1", downloads: 13 },
  { month: "T2", downloads: 20 },
  { month: "T3", downloads: 26 },
  { month: "T4", downloads: 33 },
  { month: "T5", downloads: 41 },
  { month: "T6", downloads: 50 },
];

const DownloadLineChart = () => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4">
      <h2 className="font-semibold text-lg mb-2">
        Xu hướng lượt tải 6 tháng qua
      </h2>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis label={{ value: "Lượt tải", angle: -90, position: "insideLeft" }} />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey="downloads"
            stroke="#000000"
            name="Lượt tải"
            strokeWidth={2}
            dot={{ r: 4 }}
            activeDot={{ r: 6 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default DownloadLineChart;

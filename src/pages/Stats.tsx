import AnalyticsStatCards from "@/components/dashboard/AnalyticsStatCards";
import DocumentBarChart from "@/components/dashboard/DocumentBarChart";
import DownloadLineChart from "@/components/dashboard/DownloadLineChart";
import FileTypePieChart from "@/components/dashboard/FileTypePieChart";
import PopularDocumentsList from "@/components/dashboard/PopularDocumentsList";
import TimeRangeSelect from "@/components/dashboard/TimeRangeSelect";

const Stats = () => {
  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold">Thống kê</h1>
          <p className="text-gray-500">Phân tích chi tiết hoạt động hệ thống</p>
        </div>
        <TimeRangeSelect />
      </div>

      <AnalyticsStatCards />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <DocumentBarChart />
        <FileTypePieChart />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <DownloadLineChart />
        <PopularDocumentsList />
      </div>
    </div>
  );
};

export default Stats;

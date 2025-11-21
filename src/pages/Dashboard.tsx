import { useAuth } from "@/context/AuthContext";
import StatCards from "@/components/dashboard/StatCards";
import DocumentBarChart from "@/components/dashboard/DocumentBarChart";
import DownloadLineChart from "@/components/dashboard/DownloadLineChart";
import RecentActivity from "@/components/dashboard/RecentActivity";

const Dashboard = () => {
  const { user } = useAuth();

  return (
   <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-foreground">Xin chào, {user?.name}</h1>
        <p className="text-muted-foreground">Dưới đây là tổng quan hệ thống của bạn.</p>
      </div>

      <StatCards />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <DocumentBarChart />
        <DownloadLineChart />
      </div>

      <RecentActivity />
    </div>
  );
};

export default Dashboard;
import TopBanner from "@/components/TopBanner";
import DashboardNav from "@/components/DashboardNav";
import PlanOrbit from "@/components/PlanOrbit";
import InsightsPanel from "@/components/InsightsPanel";
import BottomBar from "@/components/BottomBar";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background overflow-hidden">
      {/* Top AI Banner */}
      <TopBanner />

      {/* Navigation */}
      <DashboardNav />

      {/* Main Content */}
      <div className="flex flex-1 overflow-hidden">
        {/* Orbit Area */}
        <PlanOrbit />

        {/* Insights Sidebar */}
        <InsightsPanel />
      </div>

      {/* Bottom Bar */}
      <BottomBar />
    </div>
  );
};

export default Index;

import { useState } from "react";
import { Sparkles } from "lucide-react";
import { Drawer, DrawerContent, DrawerTrigger } from "@/components/ui/drawer";
import TopBanner from "@/components/TopBanner";
import DashboardNav from "@/components/DashboardNav";
import PlanOrbit from "@/components/PlanOrbit";
import InsightsPanel, { InsightsPanelContent } from "@/components/InsightsPanel";
import BottomBar from "@/components/BottomBar";

const Index = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-background overflow-hidden">
      <TopBanner />
      <DashboardNav />

      <div className="flex flex-col md:flex-row flex-1 overflow-hidden">
        <PlanOrbit />
        <div className="hidden md:block">
          <InsightsPanel />
        </div>
      </div>

      {/* Mobile AI Insights FAB */}
      <div className="md:hidden fixed bottom-16 right-4 z-50">
        <Drawer open={drawerOpen} onOpenChange={setDrawerOpen}>
          <DrawerTrigger asChild>
            <button className="w-12 h-12 rounded-full flex items-center justify-center shadow-lg glow-primary bg-primary animate-pulse-glow">
              <Sparkles className="w-5 h-5 text-primary-foreground" />
            </button>
          </DrawerTrigger>
          <DrawerContent className="border-t border-primary/30" style={{ backgroundColor: 'hsl(215 40% 12%)' }}>
            <div className="p-5 max-h-[70vh] overflow-y-auto">
              <InsightsPanelContent onClose={() => setDrawerOpen(false)} />
            </div>
          </DrawerContent>
        </Drawer>
      </div>

      <BottomBar />
    </div>
  );
};

export default Index;

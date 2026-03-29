import { X } from "lucide-react";

interface InsightsPanelProps {
  onClose?: () => void;
}

const InsightsPanelContent = ({ onClose }: InsightsPanelProps) => {
  return (
    <>
      <div className="flex items-center justify-between mb-4">
        <h2 className="font-display text-sm font-bold tracking-wider text-foreground">AI PLAN INSIGHTS</h2>
        {onClose && (
          <button onClick={onClose} className="text-muted-foreground hover:text-foreground transition-colors">
            <X className="w-4 h-4" />
          </button>
        )}
      </div>

      <p className="text-muted-foreground text-xs font-ui mb-4 leading-relaxed">
        Star Health offers linne plan compared to our family criteria.
      </p>

      {/* Highlighted Plan */}
      <div className="glass-surface rounded-lg p-3 mb-4 border-glow">
        <div className="flex items-center justify-between mb-2">
          <div>
            <h3 className="font-display text-[11px] font-bold text-foreground">STAR HEALTH</h3>
            <p className="text-muted-foreground text-[10px] font-ui">Premium</p>
            <p className="text-primary text-xs font-bold font-ui">Rs. 10 Lakh</p>
          </div>
          <div className="w-11 h-11 rounded-full border-2 flex flex-col items-center justify-center glow-orange"
            style={{ borderColor: 'hsl(25 95% 55%)' }}>
            <span className="text-xs font-bold font-display text-glow-orange leading-none">94%</span>
            <span className="text-[6px] font-ui text-glow-orange/80">Match</span>
          </div>
        </div>
        <p className="text-muted-foreground text-[10px] font-ui">
          PED Cover Start Date: 11:00 PM. p.m
        </p>
      </div>

      {/* Bullet Points */}
      <ul className="space-y-3">
        <li className="flex gap-2 text-muted-foreground text-[11px] font-ui leading-relaxed">
          <span className="text-primary mt-0.5">•</span>
          Star Health offers no room rent limit, ines no room rent limit.
        </li>
        <li className="flex gap-2 text-muted-foreground text-[11px] font-ui leading-relaxed">
          <span className="text-primary mt-0.5">•</span>
          Star Health offers no room rent limit, and hospital network.
        </li>
        <li className="flex gap-2 text-muted-foreground text-[11px] font-ui leading-relaxed">
          <span className="text-primary mt-0.5">•</span>
          Star Health offers no room rent limit, on detail.
        </li>
        <li className="flex gap-2 text-muted-foreground text-[11px] font-ui leading-relaxed">
          <span className="text-primary mt-0.5">•</span>
          PED Cover Start Date - 11:30 time last 5:00 pr
        </li>
      </ul>
    </>
  );
};

// Desktop sidebar version
const InsightsPanel = () => {
  return (
    <div className="w-[280px] glass-card rounded-l-xl p-5 h-full overflow-y-auto border-l border-primary/20">
      <InsightsPanelContent />
    </div>
  );
};

export { InsightsPanelContent };
export default InsightsPanel;

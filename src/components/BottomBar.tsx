import { CalendarDays, User, LayoutGrid, Sparkles } from "lucide-react";

const BottomBar = () => {
  return (
    <div className="w-full px-6 py-3 glass-surface flex items-center justify-between">
      {/* Left */}
      <div className="flex items-center gap-4">
        <button className="text-muted-foreground hover:text-foreground transition-colors">
          <LayoutGrid className="w-5 h-5" />
        </button>
        <button className="flex items-center gap-2 px-4 py-2 glass-card rounded-lg hover:border-primary/40 transition-all border-glow">
          <CalendarDays className="w-4 h-4 text-primary" />
          <span className="font-display text-[11px] font-bold tracking-wider text-foreground">BOOK APPOINTMENT</span>
        </button>
      </div>

      {/* Center CTA */}
      <button className="flex items-center gap-3 px-8 py-3 rounded-full font-display text-xs font-bold tracking-widest transition-all bg-primary glow-primary">
        <User className="w-5 h-5 text-primary-foreground" />
        <span className="text-primary-foreground">CONNECT TO HUMAN EXPERT</span>
      </button>

      {/* Right */}
      <div>
        <Sparkles className="w-6 h-6 text-primary animate-pulse" />
      </div>
    </div>
  );
};

export default BottomBar;

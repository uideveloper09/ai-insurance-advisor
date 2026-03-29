import { CalendarDays, User, LayoutGrid, Sparkles } from "lucide-react";

const BottomBar = () => {
  return (
    <div className="w-full px-3 md:px-6 py-2 md:py-3 glass-surface flex items-center justify-between gap-2">
      {/* Left */}
      <div className="flex items-center gap-2 md:gap-4">
        <button className="text-muted-foreground hover:text-foreground transition-colors hidden md:block">
          <LayoutGrid className="w-5 h-5" />
        </button>
        <button className="flex items-center gap-1.5 md:gap-2 px-2 md:px-4 py-1.5 md:py-2 glass-card rounded-lg hover:border-primary/40 transition-all border-glow">
          <CalendarDays className="w-3.5 h-3.5 md:w-4 md:h-4 text-primary" />
          <span className="font-display text-[9px] md:text-[11px] font-bold tracking-wider text-foreground hidden sm:inline">BOOK APPOINTMENT</span>
          <span className="font-display text-[9px] font-bold tracking-wider text-foreground sm:hidden">BOOK</span>
        </button>
      </div>

      {/* Center CTA */}
      <button className="flex items-center gap-1.5 md:gap-3 px-3 md:px-8 py-2 md:py-3 rounded-full font-display text-[9px] md:text-xs font-bold tracking-widest transition-all bg-primary glow-primary">
        <User className="w-4 h-4 md:w-5 md:h-5 text-primary-foreground" />
        <span className="text-primary-foreground hidden sm:inline">CONNECT TO HUMAN EXPERT</span>
        <span className="text-primary-foreground sm:hidden">EXPERT</span>
      </button>

      {/* Right */}
      <div>
        <Sparkles className="w-5 h-5 md:w-6 md:h-6 text-primary animate-pulse" />
      </div>
    </div>
  );
};

export default BottomBar;

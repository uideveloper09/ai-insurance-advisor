interface PlanCardProps {
  name: string;
  type: string;
  price: string;
  matchPercent: number;
  badge: "best" | "sasta" | null;
  logoColor: string;
  logoText: string;
}

const PlanCard = ({ name, type, price, matchPercent, badge, logoColor, logoText }: PlanCardProps) => {
  const matchColor = matchPercent >= 96
    ? "text-glow-green border-glow-green"
    : "text-glow-orange border-glow-orange";

  const matchBg = matchPercent >= 96
    ? "from-glow-green/20 to-glow-green/5"
    : "from-glow-orange/20 to-glow-orange/5";

  return (
    <div className="glass-card rounded-xl p-3 md:p-4 w-full md:w-[210px] relative animate-float border border-border/60" style={{ animationDelay: `${Math.random() * 2}s` }}>
      {/* Badge */}
      {badge && (
        <div className={`absolute -top-2.5 -right-2.5 px-2 md:px-2.5 py-0.5 rounded-full text-[9px] md:text-[10px] font-bold font-ui ${
          badge === "best"
            ? "bg-glow-green text-primary-foreground"
            : "bg-glow-orange text-primary-foreground"
        }`}>
          {badge === "best" ? "Best Match" : "Sabse Sasta"}
        </div>
      )}

      {/* Logo & Info */}
      <div className="flex items-start gap-2 md:gap-3 mb-2 md:mb-3">
        <div
          className="w-9 h-9 md:w-11 md:h-11 rounded-lg flex items-center justify-center text-[7px] md:text-[8px] font-bold font-ui shrink-0"
          style={{ backgroundColor: logoColor }}
        >
          <span className="text-foreground leading-tight text-center">{logoText}</span>
        </div>
        <div className="min-w-0">
          <h3 className="font-display text-[10px] md:text-[11px] font-bold text-foreground tracking-wide leading-tight">{name}</h3>
          <p className="text-muted-foreground text-[9px] md:text-[10px] font-ui">{type}</p>
          <p className="text-[11px] md:text-xs font-bold font-ui" style={{ color: 'hsl(40 85% 50%)' }}>{price}</p>
        </div>
      </div>

      {/* Match Circle + VIEW WHY */}
      <div className="flex items-center justify-between gap-2">
        <button className="flex-1 border-2 border-primary bg-primary/20 hover:bg-primary/30 text-primary text-[9px] md:text-[10px] font-display font-bold px-2 md:px-3 py-1.5 md:py-2 rounded-md tracking-widest transition-all">
          VIEW WHY?
        </button>
        <div className={`w-11 h-11 md:w-14 md:h-14 rounded-full border-2 flex flex-col items-center justify-center bg-gradient-to-br ${matchBg} ${matchColor}`}
          style={{ borderColor: matchPercent >= 96 ? 'hsl(142 70% 49%)' : 'hsl(25 95% 55%)' }}>
          <span className="text-xs md:text-sm font-bold font-display leading-none">{matchPercent}%</span>
          <span className="text-[6px] md:text-[7px] font-ui opacity-80">Match</span>
        </div>
      </div>
    </div>
  );
};

export default PlanCard;

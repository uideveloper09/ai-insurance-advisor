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

  const matchShadow = matchPercent >= 96
    ? "glow-green"
    : "glow-orange";

  return (
    <div className="glass-card rounded-xl p-3 w-[180px] relative animate-float" style={{ animationDelay: `${Math.random() * 2}s` }}>
      {/* Badge */}
      {badge && (
        <div className={`absolute -top-2 -right-2 px-2 py-0.5 rounded-full text-[10px] font-bold font-ui ${
          badge === "best"
            ? "bg-glow-green text-primary-foreground"
            : "bg-glow-orange text-primary-foreground"
        }`}>
          {badge === "best" ? "Best Match" : "Sabse Sasta"}
        </div>
      )}

      {/* Logo & Info */}
      <div className="flex items-start gap-2 mb-2">
        <div
          className="w-10 h-10 rounded-lg flex items-center justify-center text-[8px] font-bold font-ui shrink-0"
          style={{ backgroundColor: logoColor }}
        >
          <span className="text-foreground leading-tight text-center">{logoText}</span>
        </div>
        <div className="min-w-0">
          <h3 className="font-display text-[11px] font-bold text-foreground tracking-wide leading-tight">{name}</h3>
          <p className="text-muted-foreground text-[10px] font-ui">{type}</p>
          <p className="text-primary text-xs font-bold font-ui">{price}</p>
        </div>
      </div>

      {/* Match Circle */}
      <div className="flex items-center justify-between mt-1">
        <button className="bg-primary hover:bg-primary/90 text-primary-foreground text-[10px] font-display font-bold px-4 py-1.5 rounded-md tracking-wider transition-all">
          VIEW WHY?
        </button>
        <div className={`w-12 h-12 rounded-full border-2 flex flex-col items-center justify-center bg-gradient-to-br ${matchBg} ${matchShadow} ${matchColor}`}
          style={{ borderColor: matchPercent >= 96 ? 'hsl(142 70% 49%)' : 'hsl(25 95% 55%)' }}>
          <span className="text-sm font-bold font-display leading-none">{matchPercent}%</span>
          <span className="text-[7px] font-ui opacity-80">Match</span>
        </div>
      </div>
    </div>
  );
};

export default PlanCard;

import PlanCard from "./PlanCard";
import VoiceOrb from "./VoiceOrb";
import FamilyInfo from "./FamilyInfo";

const plans = [
  {
    name: "STAR HEALTH",
    type: "Premium",
    price: "Rs. 279,000",
    matchPercent: 96,
    badge: "best" as const,
    logoColor: "#1a5276",
    logoText: "STAR",
  },
  {
    name: "HDFC ERGO",
    type: "Premium",
    price: "Rs. 10 Lakh",
    matchPercent: 94,
    badge: "sasta" as const,
    logoColor: "#c0392b",
    logoText: "HDFC",
  },
  {
    name: "ICICI LOMBARD",
    type: "Premium",
    price: "Rs. 10 Lakh",
    matchPercent: 94,
    badge: "best" as const,
    logoColor: "#2c3e50",
    logoText: "ICICI",
  },
  {
    name: "HDFC ERGO",
    type: "Premium",
    price: "Rs. 10 Lakh",
    matchPercent: 94,
    badge: "sasta" as const,
    logoColor: "#c0392b",
    logoText: "HDFC",
  },
  {
    name: "ICICI LOMBARD",
    type: "Premium",
    price: "Rs. 10 Lakh",
    matchPercent: 94,
    badge: null,
    logoColor: "#2c3e50",
    logoText: "ICICI",
  },
  {
    name: "RELIANCE HEALTH",
    type: "Premium\nSabse Sasta",
    price: "Rs. 10 Lakh",
    matchPercent: 94,
    badge: "sasta" as const,
    logoColor: "#1a237e",
    logoText: "REL",
  },
];

const PlanOrbit = () => {
  return (
    <div className="flex-1 flex flex-col items-center justify-start md:justify-center relative py-4 overflow-y-auto overflow-x-hidden">
      {/* Plan Orbit Title */}
      <div className="glass-card rounded-full px-6 md:px-8 py-2 mb-4 border-glow">
        <h2 className="font-display text-xs md:text-sm font-bold tracking-[0.3em] text-foreground">PLAN ORBIT</h2>
      </div>

      {/* Mobile Layout: scrollable vertical list */}
      <div className="md:hidden w-full px-4 space-y-4">
        {/* Voice Orb at top on mobile */}
        <div className="flex justify-center py-4">
          <VoiceOrb />
        </div>

        {/* Cards in a 2-column grid */}
        <div className="grid grid-cols-2 gap-3">
          {plans.map((plan, i) => (
            <PlanCard key={i} {...plan} />
          ))}
        </div>

        {/* Family Info */}
        <div className="flex justify-center py-4">
          <FamilyInfo />
        </div>
      </div>

      {/* Desktop Layout: Orbit pattern */}
      <div className="hidden md:block relative w-full max-w-[850px] mx-auto">
        {/* Row 1: Top cards */}
        <div className="flex justify-between px-4 mb-4">
          <PlanCard {...plans[0]} />
          <PlanCard {...plans[3]} />
        </div>

        {/* Row 2: Middle cards + Orb */}
        <div className="flex items-center justify-between px-0 relative mb-4">
          <PlanCard {...plans[1]} />
          
          {/* Center Orb with orbit rings */}
          <div className="relative flex items-center justify-center" style={{ width: '280px', height: '280px' }}>
            <div className="absolute w-[280px] h-[280px] rounded-full border" style={{ borderColor: 'hsl(190 50% 30% / 0.15)' }} />
            <div className="absolute w-[220px] h-[220px] rounded-full border" style={{ borderColor: 'hsl(190 50% 30% / 0.2)' }} />
            <div className="absolute w-[160px] h-[160px] rounded-full border" style={{ borderColor: 'hsl(190 50% 30% / 0.1)' }} />
            <VoiceOrb />
          </div>

          <PlanCard {...plans[4]} />
        </div>

        {/* Row 3: Bottom cards + Family Info */}
        <div className="flex items-start justify-between px-4">
          <PlanCard {...plans[2]} />
          
          {/* Family Info centered */}
          <div className="flex-1 flex justify-center pt-2">
            <FamilyInfo />
          </div>

          <PlanCard {...plans[5]} />
        </div>
      </div>
    </div>
  );
};

export default PlanOrbit;

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
    <div className="flex-1 flex flex-col items-center justify-center relative py-4">
      {/* Plan Orbit Title */}
      <div className="glass-card rounded-full px-8 py-2 mb-6 border-glow">
        <h2 className="font-display text-sm font-bold tracking-[0.3em] text-foreground">PLAN ORBIT</h2>
      </div>

      {/* Orbit Container */}
      <div className="relative w-full max-w-[800px] h-[420px]">
        {/* Orbit Rings */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-[500px] h-[500px] rounded-full border absolute" style={{ borderColor: 'hsl(190 50% 30% / 0.15)' }} />
          <div className="w-[380px] h-[380px] rounded-full border absolute" style={{ borderColor: 'hsl(190 50% 30% / 0.2)' }} />
          <div className="w-[260px] h-[260px] rounded-full border absolute" style={{ borderColor: 'hsl(190 50% 30% / 0.1)' }} />
        </div>

        {/* Center Orb */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
          <VoiceOrb />
        </div>

        {/* Plan Cards positioned around orbit */}
        {/* Top Left */}
        <div className="absolute top-0 left-0">
          <PlanCard {...plans[0]} />
        </div>

        {/* Left Middle */}
        <div className="absolute top-[45%] -left-2 -translate-y-1/2">
          <PlanCard {...plans[1]} />
        </div>

        {/* Bottom Left-Center */}
        <div className="absolute bottom-0 left-[15%]">
          <PlanCard {...plans[2]} />
        </div>

        {/* Top Right */}
        <div className="absolute top-0 right-0">
          <PlanCard {...plans[3]} />
        </div>

        {/* Right Middle */}
        <div className="absolute top-[45%] -right-2 -translate-y-1/2">
          <PlanCard {...plans[4]} />
        </div>

        {/* Bottom Right */}
        <div className="absolute bottom-0 right-[10%]">
          <PlanCard {...plans[5]} />
        </div>
      </div>

      {/* Family Info */}
      <FamilyInfo />
    </div>
  );
};

export default PlanOrbit;

import { Mic } from "lucide-react";

const VoiceOrb = () => {
  return (
    <div className="flex flex-col items-center gap-3">
      {/* Orb */}
      <div className="relative w-40 h-40">
        {/* Outer rings */}
        <div className="absolute inset-0 rounded-full border border-[hsl(190_60%_40%/0.2)] animate-pulse-glow" />
        <div className="absolute inset-3 rounded-full border border-[hsl(190_60%_40%/0.3)]" />
        <div className="absolute inset-6 rounded-full border border-[hsl(190_60%_40%/0.1)]" />

        {/* Core orb */}
        <div className="absolute inset-8 rounded-full flex items-center justify-center"
          style={{
            background: 'radial-gradient(circle, hsl(190 60% 40% / 0.4), hsl(190 60% 40% / 0.1), transparent)',
          }}>
          <div className="w-16 h-16 rounded-full flex items-center justify-center animate-pulse-glow"
            style={{
              background: 'radial-gradient(circle, hsl(190 60% 40% / 0.6), hsl(190 60% 40% / 0.2))',
            }}>
            <Mic className="w-7 h-7" style={{ color: 'hsl(190 60% 50%)' }} />
          </div>
        </div>

        {/* Curved text simulation */}
        <div className="absolute -top-1 left-1/2 -translate-x-1/2 whitespace-nowrap">
          <span className="text-[9px] font-ui tracking-[0.3em]" style={{ color: 'hsl(190 50% 40% / 0.5)' }}>VOICE ORBIT</span>
        </div>
        <div className="absolute -right-12 top-1/2 -translate-y-1/2 -rotate-90 whitespace-nowrap">
          <span className="text-[8px] font-ui tracking-[0.2em]" style={{ color: 'hsl(190 50% 40% / 0.4)' }}>- Tap to speak or type</span>
        </div>
        <div className="absolute -left-12 top-1/2 -translate-y-1/2 rotate-90 whitespace-nowrap">
          <span className="text-[8px] font-ui tracking-[0.2em]" style={{ color: 'hsl(190 50% 40% / 0.4)' }}>- Tap to speak or type</span>
        </div>
      </div>

      {/* Label */}
      <div className="flex items-center gap-2 text-muted-foreground text-xs font-ui">
        <span className="font-display text-sm font-bold tracking-wider" style={{ color: 'hsl(190 60% 50%)' }}>VOICE ORBIT</span>
        <span>- Tap to speak or type</span>
      </div>
    </div>
  );
};

export default VoiceOrb;

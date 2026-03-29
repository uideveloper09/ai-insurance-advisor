import { Users, FileText } from "lucide-react";

const FamilyInfo = () => {
  return (
    <div className="flex items-center gap-6 md:gap-12 mt-2">
      {/* Your Family */}
      <div className="flex flex-col items-center gap-1.5 md:gap-2">
        <div className="w-12 h-12 md:w-16 md:h-16 rounded-full glass-card border-glow flex items-center justify-center">
          <Users className="w-5 h-5 md:w-7 md:h-7 text-primary" />
        </div>
        <div className="text-center">
          <h4 className="font-display text-[10px] md:text-xs font-bold tracking-wider text-foreground">YOUR FAMILY</h4>
          <p className="text-muted-foreground text-[10px] md:text-[11px] font-ui">Self (32), Spouse (30),</p>
          <p className="text-muted-foreground text-[10px] md:text-[11px] font-ui">Child (5)</p>
        </div>
      </div>

      {/* Plan Type */}
      <div className="flex flex-col items-center gap-1.5 md:gap-2">
        <div className="w-12 h-12 md:w-16 md:h-16 rounded-full glass-card border-glow flex items-center justify-center">
          <FileText className="w-5 h-5 md:w-7 md:h-7 text-primary" />
        </div>
        <div className="text-center">
          <h4 className="font-display text-[10px] md:text-xs font-bold tracking-wider text-foreground">PLAN TYPE</h4>
          <p className="text-muted-foreground text-[10px] md:text-[11px] font-ui">Rs. 10 Lakh</p>
          <p className="text-muted-foreground text-[10px] md:text-[11px] font-ui">Floater</p>
        </div>
      </div>
    </div>
  );
};

export default FamilyInfo;

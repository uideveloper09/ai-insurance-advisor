const TopBanner = () => {
  return (
    <div className="w-full py-1.5 md:py-2 px-3 md:px-4 text-center font-ui text-[11px] md:text-sm tracking-wide"
      style={{ background: 'linear-gradient(90deg, hsl(210 40% 25%), hsl(215 45% 30%))' }}>
      <span className="text-foreground font-medium">
        AI ADVISER PICK: <span className="font-bold">STAR HEALTH</span> leads with best overall value and hospital network in <span className="font-bold">DELHI</span>.
      </span>
    </div>
  );
};

export default TopBanner;

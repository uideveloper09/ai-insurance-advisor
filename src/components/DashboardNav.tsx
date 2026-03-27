import { useState } from "react";

const navItems = ["DASHBOARD", "PLANS", "COMPARISON", "SUPPORT", "ACCOUNT"];

const DashboardNav = () => {
  const [active, setActive] = useState("DASHBOARD");

  return (
    <nav className="flex items-center justify-between px-6 py-3 glass-surface">
      {/* Logo */}
      <div className="font-display text-2xl font-bold tracking-wider text-primary italic">
        LSF
      </div>

      {/* Nav Items */}
      <div className="flex items-center gap-1">
        {navItems.map((item) => (
          <button
            key={item}
            onClick={() => setActive(item)}
            className={`px-6 py-2.5 font-display text-xs tracking-widest transition-all duration-300 rounded-md ${
              active === item
                ? "bg-primary text-primary-foreground glow-primary font-bold"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            {item}
          </button>
        ))}
      </div>
    </nav>
  );
};

export default DashboardNav;

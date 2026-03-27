import { useState } from "react";

const navItems = ["DASHBOARD", "PLANS", "COMPARISON", "SUPPORT", "ACCOUNT"];

const DashboardNav = () => {
  const [active, setActive] = useState("DASHBOARD");

  return (
    <nav className="flex items-center justify-between px-6 py-3 glass-surface border-b border-[hsl(215_30%_25%)]">
      {/* Logo */}
      <div className="relative font-display text-3xl font-bold tracking-wider italic" style={{ color: '#c89a3c' }}>
        LSF
        <svg className="absolute -bottom-1 left-0 w-full" height="6" viewBox="0 0 60 6" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 5C10 2 20 1 30 1C40 1 50 2 60 3" stroke="#c89a3c" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      </div>

      {/* Nav Items */}
      <div className="flex items-center gap-2">
        {navItems.map((item) => (
          <button
            key={item}
            onClick={() => setActive(item)}
            className={`px-7 py-2.5 font-display text-xs tracking-widest transition-all duration-300 rounded-md ${
              active === item
                ? "border-2 border-primary bg-primary/30 text-primary-foreground font-bold"
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

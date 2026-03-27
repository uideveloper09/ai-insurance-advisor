import { useState } from "react";

const navItems = ["DASHBOARD", "PLANS", "COMPARISON", "SUPPORT", "ACCOUNT"];

const DashboardNav = () => {
  const [active, setActive] = useState("DASHBOARD");

  return (
    <nav className="flex items-center px-8 py-3 border-b" style={{ backgroundColor: 'hsl(216 40% 12%)', borderBottomColor: 'hsl(215 30% 22%)' }}>
      {/* Logo */}
      <div className="relative font-display text-3xl font-bold tracking-wider italic mr-12" style={{ color: '#c89a3c' }}>
        LSF
        <svg className="absolute -bottom-1 left-0 w-full" height="6" viewBox="0 0 60 6" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 5C10 2 20 1 30 1C40 1 50 2 60 3" stroke="#c89a3c" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      </div>

      {/* Nav Items - spread evenly */}
      <div className="flex items-center flex-1 justify-between">
        {navItems.map((item) => (
          <button
            key={item}
            onClick={() => setActive(item)}
            className={`px-8 py-2.5 font-display text-xs tracking-widest transition-all duration-300 rounded-md ${
              active === item
                ? "border border-primary bg-primary/50 text-foreground font-bold"
                : "hover:text-foreground"
            }`}
            style={active !== item ? { color: 'hsl(35 40% 70%)' } : undefined}
          >
            {item}
          </button>
        ))}
      </div>
    </nav>
  );
};

export default DashboardNav;

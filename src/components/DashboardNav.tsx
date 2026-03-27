import { useState } from "react";
import lsfLogo from "@/assets/lsf-logo-clean.png";

const navItems = ["DASHBOARD", "PLANS", "COMPARISON", "SUPPORT", "ACCOUNT"];

const DashboardNav = () => {
  const [active, setActive] = useState("DASHBOARD");

  return (
    <nav className="flex items-center px-8 py-3 border-b" style={{ backgroundColor: 'hsl(215 35% 15%)', borderBottomColor: 'hsl(215 25% 25%)' }}>
      {/* Logo */}
      <div className="mr-4 md:mr-12 flex-shrink-0 flex items-center">
        <img src={lsfLogo} alt="LSF" className="h-10 md:h-12 w-auto" />
      </div>

      {/* Nav Items - spread evenly */}
      <div className="flex items-center flex-1 justify-between">
        {navItems.map((item) => (
          <button
            key={item}
            onClick={() => setActive(item)}
            className={`px-8 py-2.5 font-display text-xs tracking-widest transition-all duration-300 rounded-md ${
              active === item
                ? "font-bold"
                : "hover:text-foreground"
            }`}
            style={
              active === item
                ? { border: '1px solid hsl(35 50% 40%)', backgroundColor: 'hsl(35 40% 30% / 0.6)', color: 'hsl(210 30% 90%)' }
                : { color: 'hsl(215 25% 65%)' }
            }
          >
            {item}
          </button>
        ))}
      </div>
    </nav>
  );
};

export default DashboardNav;

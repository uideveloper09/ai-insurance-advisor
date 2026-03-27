import { useState } from "react";

const navItems = ["DASHBOARD", "PLANS", "COMPARISON", "SUPPORT", "ACCOUNT"];

const DashboardNav = () => {
  const [active, setActive] = useState("DASHBOARD");

  return (
    <nav className="flex items-center px-8 py-3 border-b" style={{ backgroundColor: 'hsl(215 35% 15%)', borderBottomColor: 'hsl(215 25% 25%)' }}>
      {/* Logo */}
      <div className="relative mr-12 flex items-center">
        <svg width="80" height="36" viewBox="0 0 80 36" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* L */}
          <text x="0" y="26" fontFamily="Orbitron, sans-serif" fontSize="28" fontWeight="800" fontStyle="italic" fill="white">L</text>
          {/* S - orange */}
          <text x="18" y="26" fontFamily="Orbitron, sans-serif" fontSize="28" fontWeight="800" fontStyle="italic" fill="#e8792b">S</text>
          {/* F */}
          <text x="38" y="26" fontFamily="Orbitron, sans-serif" fontSize="28" fontWeight="800" fontStyle="italic" fill="white">F</text>
          {/* Orange swoosh underline */}
          <path d="M2 32 Q20 28 40 30 Q55 32 75 29" stroke="#e8792b" strokeWidth="2.5" strokeLinecap="round" fill="none"/>
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

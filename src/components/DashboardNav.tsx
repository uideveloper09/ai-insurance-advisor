import { useState } from "react";
import { Menu, X } from "lucide-react";
import lsfLogo from "@/assets/lsf-logo-clean.png";

const navItems = ["DASHBOARD", "PLANS", "COMPARISON", "SUPPORT", "ACCOUNT"];

const DashboardNav = () => {
  const [active, setActive] = useState("DASHBOARD");
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="relative border-b" style={{ backgroundColor: 'hsl(215 35% 15%)', borderBottomColor: 'hsl(215 25% 25%)' }}>
      <div className="flex items-center px-4 md:px-8 py-3">
        {/* Logo */}
        <div className="mr-4 md:mr-12 flex-shrink-0 flex items-center">
          <img src={lsfLogo} alt="LSF" className="w-auto" style={{ height: 'auto' }} />
        </div>

        {/* Desktop Nav Items */}
        <div className="hidden md:flex items-center flex-1 justify-between">
          {navItems.map((item) => (
            <button
              key={item}
              onClick={() => setActive(item)}
              className={`px-8 py-2.5 font-display text-xs tracking-widest transition-all duration-300 rounded-md ${
                active === item ? "font-bold" : "hover:text-foreground"
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

        {/* Mobile Hamburger */}
        <button
          className="md:hidden ml-auto p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          style={{ color: 'hsl(215 25% 65%)' }}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="md:hidden flex flex-col gap-1 px-4 pb-4" style={{ backgroundColor: 'hsl(215 35% 15%)' }}>
          {navItems.map((item) => (
            <button
              key={item}
              onClick={() => { setActive(item); setMenuOpen(false); }}
              className={`w-full text-left px-4 py-2.5 font-display text-xs tracking-widest transition-all duration-300 rounded-md ${
                active === item ? "font-bold" : ""
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
      )}
    </nav>
  );
};

export default DashboardNav;

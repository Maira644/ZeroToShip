import { NavLink } from "react-router-dom";

function Navbar() {
  const linkClass = ({ isActive }) =>
    `relative px-3 py-2 rounded-lg transition-all duration-300
    ${
      isActive
        ? "text-emerald-400 bg-slate-800/70"
        : "text-slate-300 hover:text-white hover:bg-slate-800/40"
    }
    after:absolute after:left-3 after:right-3 after:-bottom-1 after:h-[2px]
    after:rounded-full after:bg-emerald-400 after:transition-all after:duration-300
    ${
      isActive
        ? "after:opacity-100 after:scale-100"
        : "after:opacity-0 after:scale-0 hover:after:opacity-100 hover:after:scale-100"
    }`;

  return (
    <nav className="sticky top-0 z-50 border-b border-slate-700/60 bg-gradient-to-r from-slate-900 via-slate-900/95 to-slate-800 backdrop-blur-xl shadow-lg">

      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">

        {/* Brand */}
        <div className="flex items-center gap-4 cursor-pointer group">

          {/* Animated Live Indicator */}
          <div className="relative flex items-center justify-center">

            <span className="absolute h-5 w-5 rounded-full bg-emerald-400 opacity-30 animate-ping"></span>

            <span className="relative h-3 w-3 rounded-full bg-emerald-400 shadow-[0_0_18px_rgba(16,185,129,0.9)]"></span>

          </div>

          {/* Logo */}
          <div className="transition-all duration-300 group-hover:translate-x-1">

            <h1 className="text-2xl font-extrabold tracking-tight text-white leading-none">
              Peer Project
            </h1>

            <p className="text-[11px] uppercase tracking-[0.35em] text-slate-400 mt-1">
              Build • Learn • Collaborate
            </p>

          </div>

        </div>

        {/* Navigation */}
        <div className="flex items-center gap-4 text-base font-medium">

          <NavLink to="/" className={linkClass} end>
            Home
          </NavLink>

          <NavLink to="/marketplace" className={linkClass}>
            Marketplace
          </NavLink>

          <NavLink to="/dashboard" className={linkClass}>
            Dashboard
          </NavLink>

        </div>

      </div>

    </nav>
  );
}

export default Navbar;
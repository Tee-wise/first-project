import {
  BookOpen,
  ClipboardList,
  Bell,
  Trophy,
  Info,
  Phone,
  Heart,
} from "lucide-react";
import { NavLink } from "react-router-dom";

const navItems = [
  { label: "Dashboard", path: "/", Icon: BookOpen },
  { label: "Study Plan", path: "/study-plan", Icon: ClipboardList },
  { label: "Reminder", path: "/reminders", Icon: Bell },
  { label: "Score Board", path: "/score-board", Icon: Trophy },
  { label: "About", path: "/about", Icon: Info },
];

export default function Sidebar({ menuOpen, setMenuOpen }) {
  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <aside className={'sidebar ${menuOpen ? "open" : " "} '}>
        <div className="logo">
          <span>↗️</span>
        </div>

        <nav>
          {navItems.map(({ label, path, Icon }) => (
            <NavLink
              key={path}
              to={path}
              end={path === "/"}
              className={({ isActive }) =>
                'nav-btn ${isActive ? "active" : ""}'
              }
              onClick={closeMenu}
            >
              <Icon size={16} />
              <span>{label}</span>
            </NavLink>
          ))}
        </nav>

        <div className="side-bottom">
          <NavLink
            to="/contact"
            className="nav-btn"
            onClick={closeMenu}
          >
            <Phone size={16} />
            <span>Contact</span>
          </NavLink>

          <NavLink
            to="/donate"
            className="nav-btn"
            onClick={closeMenu}
          >
            <Heart size={16} />
            <span>Donate to site</span>
          </NavLink>
        </div>
      </aside>

      {menuOpen && (
        <div className="overlay" onClick={closeMenu} />
      )}
    </>
  );
}
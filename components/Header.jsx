import { Menu, X } from "lucide-react";

export default function Header({ menuOpen, setMenuOpen }) {
  return (
    <header className="mobile-header">
      <button
        className="icon-btn"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        {menuOpen ? <X size={22} /> : <Menu size={22} />}
      </button>

      <div className="brand-mark">
        <span>↗️</span>
      </div>

      <div className="mobile-title">E-Learning</div>
    </header>
  );
}
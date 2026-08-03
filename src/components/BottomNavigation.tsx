import { NavLink } from "react-router-dom";

import "../styles/BottomNavigation.css";

export default function BottomNavigation() {
  return (
    <nav className="bottom-nav">

      <NavLink
        to="/"
        end
        className={({ isActive }) =>
          `nav-item ${isActive ? "active" : ""}`
        }
      >
        <div className="nav-icon">🏠</div>
        <div className="nav-label">Accueil</div>
      </NavLink>

      <NavLink
        to="/calendar"
        className={({ isActive }) =>
          `nav-item ${isActive ? "active" : ""}`
        }
      >
        <div className="nav-icon">📅</div>
        <div className="nav-label">Calendrier</div>
      </NavLink>

      <NavLink
        to="/statistics"
        className={({ isActive }) =>
          `nav-item ${isActive ? "active" : ""}`
        }
      >
        <div className="nav-icon">📊</div>
        <div className="nav-label">Stats</div>
      </NavLink>

      <NavLink
        to="/profile"
        className={({ isActive }) =>
          `nav-item ${isActive ? "active" : ""}`
        }
      >
        <div className="nav-icon">👤</div>
        <div className="nav-label">Profil</div>
      </NavLink>

    </nav>
  );
}
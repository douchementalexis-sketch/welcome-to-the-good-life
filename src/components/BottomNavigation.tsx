import { NavLink } from "react-router-dom";

import "../styles/BottomNavigation.css";

const items = [
  {
    to: "/",
    icon: "🏠",
    label: "Accueil",
  },
  {
    to: "/program",
    icon: "💪",
    label: "Programme",
  },
  {
    to: "/calendar",
    icon: "📅",
    label: "Planning",
  },
  {
    to: "/statistics",
    icon: "📊",
    label: "Stats",
  },
  {
    to: "/profile",
    icon: "👤",
    label: "Profil",
  },
];

export default function BottomNavigation() {

  return (

    <nav className="bottomNav">

      {items.map((item) => (

        <NavLink
          key={item.to}
          to={item.to}
          end={item.to === "/"}
          className={({ isActive }) =>
            `bottomNavItem ${isActive ? "active" : ""}`
          }
        >

          <span className="bottomNavIcon">
            {item.icon}
          </span>

          <span className="bottomNavLabel">
            {item.label}
          </span>

        </NavLink>

      ))}

    </nav>

  );

}
import "../styles/BottomNavigation.css";

export default function BottomNavigation() {
  return (
    <nav className="bottom-nav">

      <div className="nav-item active">
        <div className="nav-icon">🏠</div>
        <div className="nav-label">Accueil</div>
      </div>

      <div className="nav-item">
        <div className="nav-icon">📅</div>
        <div className="nav-label">Calendrier</div>
      </div>

      <div className="nav-item">
        <div className="nav-icon">📊</div>
        <div className="nav-label">Statistiques</div>
      </div>

      <div className="nav-item">
        <div className="nav-icon">👤</div>
        <div className="nav-label">Profil</div>
      </div>

    </nav>
  );
}
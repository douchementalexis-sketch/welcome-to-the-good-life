export default function BottomNavigation() {
  return (
    <nav
      style={{
        position: "sticky",
        bottom: 20,
        marginTop: 30,
        background: "white",
        borderRadius: "20px",
        padding: "18px",
        display: "flex",
        justifyContent: "space-around",
        boxShadow: "0 10px 30px rgba(0,0,0,.12)",
      }}
    >
      <div style={{ textAlign: "center", cursor: "pointer" }}>
        🏠
        <br />
        <small>Accueil</small>
      </div>

      <div style={{ textAlign: "center", cursor: "pointer" }}>
        💪
        <br />
        <small>Sport</small>
      </div>

      <div style={{ textAlign: "center", cursor: "pointer" }}>
        🍎
        <br />
        <small>Nutrition</small>
      </div>

      <div style={{ textAlign: "center", cursor: "pointer" }}>
        📈
        <br />
        <small>Suivi</small>
      </div>

      <div style={{ textAlign: "center", cursor: "pointer" }}>
        👤
        <br />
        <small>Profil</small>
      </div>
    </nav>
  );
}
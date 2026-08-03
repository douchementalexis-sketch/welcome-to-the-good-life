import "../styles/Header.css";

export default function Header() {
  const now = new Date();

  const date = now.toLocaleDateString("fr-FR", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <header className="header">
      <h1 className="header-title">
        🌿 Welcome to the Good Life
      </h1>

      <h2 className="header-date">
        📅 {date}
      </h2>

      <div className="quote-card">
        <div className="quote-title">
          ❤️ Citation du jour
        </div>

        <p className="quote-text">
          "Chaque petit pas compte."
        </p>
      </div>
    </header>
  );
}
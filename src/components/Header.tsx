import "../styles/Header.css";

interface HeaderProps {
  firstName?: string;
}

export default function Header({
  firstName = "Rachel",
}: HeaderProps) {

  const now = new Date();

  const date = now.toLocaleDateString("fr-FR", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (

    <header className="header">

      <div className="headerLeft">

        <span className="headerOverline">
          Welcome To The Good Life
        </span>

        <h1>
          Bonjour {firstName} 👋
        </h1>

        <p>
          {date}
        </p>

      </div>

      <div className="headerRight">

        <button className="headerButton">
          🔔
        </button>

        <div className="headerAvatar">
          R
        </div>

      </div>

    </header>

  );

}
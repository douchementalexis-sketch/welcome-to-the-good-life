export default function Header() {
  const now = new Date();

  const date = now.toLocaleDateString("fr-FR", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <header
      style={{
        textAlign: "center",
        marginBottom: 35,
      }}
    >
      <h1
        style={{
          color: "#4d7b62",
          marginBottom: 20,
          fontSize: 34,
          fontWeight: "700",
        }}
      >
        🌿 Welcome to the Good Life
      </h1>

      <h2
        style={{
          color: "#355f4b",
          fontSize: 24,
          textTransform: "capitalize",
          marginBottom: 20,
        }}
      >
        📅 {date}
      </h2>

      <div
        style={{
          background: "#eef6f1",
          borderRadius: 20,
          padding: 18,
          boxShadow: "0 4px 15px rgba(0,0,0,.06)",
        }}
      >
        <strong
          style={{
            color: "#4d7b62",
            fontSize: 16,
          }}
        >
          ❤️ Citation du jour
        </strong>

        <p
          style={{
            marginTop: 10,
            fontStyle: "italic",
            color: "#555",
            fontSize: 17,
            lineHeight: 1.5,
          }}
        >
          « Chaque petit pas compte. »
        </p>
      </div>
    </header>
  );
}
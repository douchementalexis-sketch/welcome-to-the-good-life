export default function Quote() {
  const quotes = [
    "Chaque petit pas construit un grand changement.",
    "Aujourd'hui est une nouvelle opportunité.",
    "Tu es plus forte que tu ne le crois.",
    "Le progrès vaut mieux que la perfection.",
    "Prends soin de toi aujourd'hui."
  ];

  const quote =
    quotes[new Date().getDate() % quotes.length];

  return (
    <div>
      <p
        style={{
          fontStyle: "italic",
          fontSize: "18px",
          color: "#355f4b",
          lineHeight: "1.7",
        }}
      >
        "{quote}"
      </p>
    </div>
  );
}
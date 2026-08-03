import { useContext } from "react";
import { AppContext } from "../context/AppContext";

const moods = [
  { emoji: "😞", text: "Journée difficile" },
  { emoji: "😐", text: "Ça va" },
  { emoji: "🙂", text: "Je me sens bien" },
  { emoji: "😁", text: "Très bonne journée" },
  { emoji: "🤩", text: "Je suis au top !" },
];

export default function Stats() {
  const { water, workoutDone, mood } = useContext(AppContext);

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(3,1fr)",
        gap: 18,
        marginBottom: 35,
      }}
    >
      <div
        style={{
          background: "#fff",
          borderRadius: 20,
          padding: 18,
          textAlign: "center",
          boxShadow: "0 6px 18px rgba(0,0,0,.06)",
        }}
      >
        <div style={{ fontSize: 32 }}>💧</div>

        <h2
          style={{
            margin: "8px 0",
            color: "#355f4b",
          }}
        >
          {water}/8
        </h2>

        <p
          style={{
            margin: 0,
            color: "#777",
            fontSize: 14,
          }}
        >
          Hydratation
        </p>
      </div>

      <div
        style={{
          background: "#fff",
          borderRadius: 20,
          padding: 18,
          textAlign: "center",
          boxShadow: "0 6px 18px rgba(0,0,0,.06)",
        }}
      >
        <div style={{ fontSize: 32 }}>🏋️</div>

        <h2 style={{ margin: "8px 0" }}>
          {workoutDone ? "✅" : "❌"}
        </h2>

        <p
          style={{
            margin: 0,
            color: "#777",
            fontSize: 14,
          }}
        >
          Séance
        </p>
      </div>

      <div
        style={{
          background: "#fff",
          borderRadius: 20,
          padding: 18,
          textAlign: "center",
          boxShadow: "0 6px 18px rgba(0,0,0,.06)",
        }}
      >
        <div
          style={{
            fontSize: 40,
            marginBottom: 8,
          }}
        >
          {moods[mood].emoji}
        </div>

        <p
          style={{
            margin: 0,
            color: "#355f4b",
            fontWeight: "bold",
            fontSize: 14,
          }}
        >
          {moods[mood].text}
        </p>
      </div>
    </div>
  );
}
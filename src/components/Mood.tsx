import { useContext } from "react";
import { AppContext } from "../context/AppContext";

const moods = [
  { emoji: "😞", text: "Journée difficile", value: 20 },
  { emoji: "😐", text: "Ça va", value: 40 },
  { emoji: "🙂", text: "Je me sens bien", value: 60 },
  { emoji: "😁", text: "Très bonne journée", value: 80 },
  { emoji: "🤩", text: "Je suis au top !", value: 100 },
];

export default function Mood() {
  const { mood, setMood } = useContext(AppContext);

  const currentMood = moods[mood];

  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          marginBottom: 22,
        }}
      >
        {moods.map((item, index) => (
          <span
            key={index}
            onClick={() => setMood(index)}
            style={{
              cursor: "pointer",
              fontSize: 24,
              transition: ".25s",
              transform: mood === index ? "scale(1.2)" : "scale(1)",
              opacity: mood === index ? 1 : 0.45,
            }}
          >
            {item.emoji}
          </span>
        ))}
      </div>

      <div
        style={{
          width: "100%",
          height: 18,
          background: "#dfe9e2",
          borderRadius: 20,
          overflow: "hidden",
          marginBottom: 18,
        }}
      >
        <div
          style={{
            width: `${currentMood.value}%`,
            height: "100%",
            background: "#4d7b62",
            transition: ".3s",
          }}
        />
      </div>

      <p
        style={{
          textAlign: "center",
          fontWeight: "bold",
          color: "#355f4b",
          fontSize: 17,
          marginBottom: 8,
        }}
      >
        {currentMood.value} %
      </p>

      <p
        style={{
          textAlign: "center",
          color: "#666",
          fontSize: 15,
          margin: 0,
        }}
      >
        {currentMood.emoji} {currentMood.text}
      </p>
    </div>
  );
}
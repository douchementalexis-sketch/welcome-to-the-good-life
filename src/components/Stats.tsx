import { useContext } from "react";
import { AppContext } from "../context/AppContext";

import "../styles/Stats.css";

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
    <div className="stats-grid">

      <div className="stat-card">
        <div className="stat-icon">💧</div>

        <div className="stat-value">
          {water}/8
        </div>

        <div className="stat-title">
          Hydratation
        </div>
      </div>

      <div className="stat-card">
        <div className="stat-icon">🏋️</div>

        <div className="stat-value">
          {workoutDone ? "✅" : "❌"}
        </div>

        <div className="stat-title">
          Séance
        </div>
      </div>

      <div className="stat-card">
        <div className="stat-icon">
          {moods[mood].emoji}
        </div>

        <div className="stat-value">
          {moods[mood].text}
        </div>

        <div className="stat-title">
          Ressenti
        </div>
      </div>

    </div>
  );
}
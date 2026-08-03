import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import { getTodayDate } from "../utils/date";

import "../styles/Stats.css";

const moods = [
  { emoji: "😞", text: "Journée difficile" },
  { emoji: "😐", text: "Ça va" },
  { emoji: "🙂", text: "Je me sens bien" },
  { emoji: "😁", text: "Très bonne journée" },
  { emoji: "🤩", text: "Je suis au top !" },
];

export default function Stats() {
  const { days } = useContext(AppContext);

  const today = getTodayDate();

  const current =
    days.find((day) => day.date === today) ?? {
      water: 0,
      mood: 2,
      workoutDone: false,
    };

  return (
    <div className="stats-grid">

      <div className="stat-card">
        <div className="stat-icon">💧</div>

        <div className="stat-value">
          {current.water}/8
        </div>

        <div className="stat-title">
          Hydratation
        </div>
      </div>

      <div className="stat-card">
        <div className="stat-icon">🏋️</div>

        <div className="stat-value">
          {current.workoutDone ? "✅" : "❌"}
        </div>

        <div className="stat-title">
          Séance
        </div>
      </div>

      <div className="stat-card">
        <div className="stat-icon">
          {moods[current.mood].emoji}
        </div>

        <div className="stat-value">
          {moods[current.mood].text}
        </div>

        <div className="stat-title">
          Ressenti
        </div>
      </div>

    </div>
  );
}
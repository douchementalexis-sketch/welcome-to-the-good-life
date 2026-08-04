import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import { getTodayDate } from "../utils/date";

import "../styles/Stats.css";

const moods = [
  { emoji: "😞", text: "Difficile" },
  { emoji: "😐", text: "Moyenne" },
  { emoji: "🙂", text: "Bien" },
  { emoji: "😁", text: "Très bien" },
  { emoji: "🤩", text: "Au top" },
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

  const completedWorkouts = days.filter(
    (day) => day.workoutDone
  ).length;

  return (

    <div className="stats-grid">

      <div className="stat-card water-card">

        <div className="stat-icon">💧</div>

        <div className="stat-value">
          {current.water}/8
        </div>

        <div className="stat-title">
          Hydratation
        </div>

      </div>

      <div className="stat-card workout-card">

        <div className="stat-icon">🏋️</div>

        <div className="stat-value">
          {completedWorkouts}
        </div>

        <div className="stat-title">
          Séances
        </div>

      </div>

      <div className="stat-card mood-card">

        <div className="stat-icon">
          {moods[current.mood].emoji}
        </div>

        <div className="stat-value">
          {moods[current.mood].text}
        </div>

        <div className="stat-title">
          Humeur
        </div>

      </div>

      <div className="stat-card streak-card">

        <div className="stat-icon">🔥</div>

        <div className="stat-value">
          0
        </div>

        <div className="stat-title">
          Série
        </div>

      </div>

    </div>

  );

}
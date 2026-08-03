import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import { getTodayDate } from "../utils/date";

import "../styles/Workout.css";

export default function Workout() {

  const { days, updateDay } =
    useContext(AppContext);

  const today = getTodayDate();

  const current =
    days.find(
      (day) => day.date === today
    ) ?? {
      workoutDone: false,
    };

  function toggleWorkout() {

    updateDay(today, {
      workoutDone: !current.workoutDone,
    });

  }

  return (
    <div className="workout">

      <p>
        <strong>Programme :</strong> Full Body A
      </p>

      <p>
        ⏱️ Durée : 40 minutes
      </p>

      <p>
        🟢 Niveau : Débutante
      </p>

      <button
        className={`workout-button ${
          current.workoutDone
            ? "done"
            : "todo"
        }`}
        onClick={toggleWorkout}
      >
        {current.workoutDone
          ? "✅ Séance terminée"
          : "💪 J'ai terminé ma séance"}
      </button>

    </div>
  );
}
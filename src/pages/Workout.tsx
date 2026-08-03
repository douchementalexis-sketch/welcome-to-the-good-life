import { useContext } from "react";
import { AppContext } from "../context/AppContext";

import "../styles/Workout.css";

export default function Workout() {
  const { workoutDone, setWorkoutDone } = useContext(AppContext);

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
          workoutDone ? "done" : "todo"
        }`}
        onClick={() => setWorkoutDone(!workoutDone)}
      >
        {workoutDone
          ? "✅ Séance terminée"
          : "💪 J'ai terminé ma séance"}
      </button>

    </div>
  );
}
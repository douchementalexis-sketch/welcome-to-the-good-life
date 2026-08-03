import { useContext } from "react";
import { AppContext } from "../context/AppContext";

export default function Workout() {
  const { workoutDone, setWorkoutDone } = useContext(AppContext);

  return (
    <div>
      <p
        style={{
          marginBottom: 12,
          fontSize: 17,
        }}
      >
        <strong>Programme :</strong> Full Body A
      </p>

      <p
        style={{
          marginBottom: 10,
          color: "#666",
        }}
      >
        ⏱️ Durée : 40 minutes
      </p>

      <p
        style={{
          marginBottom: 25,
          color: "#666",
        }}
      >
        🟢 Niveau : Débutante
      </p>

      <button
        style={{
          width: "100%",
          padding: "14px",
          borderRadius: 12,
          border: "none",
          fontSize: 16,
          fontWeight: "bold",
          background: workoutDone ? "#2e7d32" : "#4d7b62",
          color: "white",
          transition: ".3s",
        }}
        onClick={() => setWorkoutDone(!workoutDone)}
      >
        {workoutDone
          ? "✅ Séance terminée"
          : "💪 J'ai terminé ma séance"}
      </button>
    </div>
  );
}
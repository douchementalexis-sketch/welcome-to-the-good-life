import { useContext } from "react";
import { useNavigate } from "react-router-dom";

import BottomNavigation from "../components/BottomNavigation";
import WorkoutProgram from "../components/workout/WorkoutProgram";

import { AppContext } from "../context/AppContext";
import { getTodayDate } from "../utils/date";
import { getWorkout } from "../utils/getWorkout";

import "./Home.css";

export default function WorkoutSession() {

  const navigate = useNavigate();

  const {
    days,
    updateDay,
  } = useContext(AppContext);

  const today = getTodayDate();

  const workout = getWorkout(today);

  const current = days.find(
    (day) => day.date === today
  );

  const finished =
    current?.workoutDone ?? false;

  const completedExercises =
    current?.completedExercises ?? [];

  const allExercisesCompleted =
    completedExercises.length ===
    workout.exercises.length;

  function validateWorkout() {

    if (!allExercisesCompleted || finished) {
      return;
    }

    updateDay(today, {
      workoutDone: true,
    });

  }

  return (

    <div className="home">

      <div className="hero">

        <button

          onClick={() => navigate("/")}

          style={{
            marginBottom: 20,
            border: "none",
            background: "transparent",
            color: "#355F4B",
            fontSize: 16,
            fontWeight: 700,
            cursor: "pointer",
          }}

        >

          ← Retour à l'accueil

        </button>

        <h1
          style={{
            color:"#355F4B",
            marginBottom:8,
          }}
        >

          🏋️ Séance du jour

        </h1>

        <p
          style={{
            color:"#666",
            marginBottom:20,
          }}
        >

          Coche chaque exercice au fur et à mesure 💪

        </p>

        <WorkoutProgram
          date={today}
        />        <div
          style={{
            marginTop: 40,
            marginBottom: 30,
            display: "flex",
            justifyContent: "center",
          }}
        >

          {finished ? (

            <button
              disabled
              style={{
                background: "#2E7D32",
                color: "white",
                border: "none",
                borderRadius: 16,
                padding: "16px 28px",
                fontSize: 17,
                fontWeight: 700,
                cursor: "default",
                opacity: 0.9,
              }}
            >
              ✅ Séance validée
            </button>

          ) : (

            <button

              onClick={validateWorkout}

              disabled={!allExercisesCompleted}

              style={{

                background:
                  allExercisesCompleted
                    ? "#355F4B"
                    : "#BDBDBD",

                color: "white",

                border: "none",

                borderRadius: 16,

                padding: "16px 28px",

                fontSize: 17,

                fontWeight: 700,

                cursor:
                  allExercisesCompleted
                    ? "pointer"
                    : "not-allowed",

                transition: "0.2s",

              }}

            >

              💾 Enregistrer la séance

            </button>

          )}

        </div>      </div>

      <BottomNavigation />

    </div>

  );

}
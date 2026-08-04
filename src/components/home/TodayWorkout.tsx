import { useContext } from "react";
import { useNavigate } from "react-router-dom";

import { AppContext } from "../../context/AppContext";
import { getTodayDate } from "../../utils/date";
import { getWorkout } from "../../utils/getWorkout";

import "../../styles/TodayWorkout.css";

export default function TodayWorkout() {

  const navigate = useNavigate();

  const { days } = useContext(AppContext);

  const today = getTodayDate();

  const workout = getWorkout(today);

  const current = days.find(
    (day) => day.date === today
  );

  const completed =
    current?.completedExercises?.length ?? 0;

  const total =
    workout.exercises.length;

  const progress =
    total === 0
      ? 0
      : Math.round((completed / total) * 100);

  const finished =
    completed === total && total > 0;

  return (

    <div className="today-workout">

      <div className="today-top">

        <div>

          <div className="today-badge">
            SÉANCE DU JOUR
          </div>

          <h1>
            {workout.icon} {workout.title}
          </h1>

          <p>
            Programme personnalisé Rachel 💚
          </p>

        </div>

      </div>

      <div className="today-infos">

        <div className="info-card">

          <span>⏱</span>

          <div>

            <strong>45 min</strong>

            <small>Durée</small>

          </div>

        </div>

        <div className="info-card">

          <span>💪</span>

          <div>

            <strong>{total}</strong>

            <small>Exercices</small>

          </div>

        </div>

      </div>

      <div className="today-progress">

        <div className="progress-header">

          <span>Progression</span>

          <span>{completed}/{total}</span>

        </div>

        <div className="progress-bar">

          <div
            className="progress-fill"
            style={{
              width: `${progress}%`,
            }}
          />

        </div>

      </div>

      <button
        className="today-button"
        disabled={finished}
        onClick={() => navigate("/workout")}
      >
        {finished
          ? "✅ Séance terminée"
          : "▶ Commencer la séance"}
      </button>

    </div>

  );

}
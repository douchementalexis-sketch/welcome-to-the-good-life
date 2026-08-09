import {
  useContext,
} from "react";

import {
  useNavigate,
} from "react-router-dom";

import {
  AppContext,
} from "../../context/AppContext";

import {
  getTodayDate,
} from "../../utils/date";

import {
  getWorkout,
} from "../../utils/getWorkout";

import "../../styles/TodayWorkout.css";

export default function TodayWorkout() {

  const navigate =
    useNavigate();

  const {
    days,
  } = useContext(AppContext);

  const today =
    getTodayDate();

  const workout =
    getWorkout(today);

  const current =
    days.find(
      day =>
        day.date === today
    );

  const completed =
    current?.completedExercises?.length ?? 0;

  const total =
    workout.exercises.length;

  const progress =
    total === 0
      ? 0
      : Math.round(
          (completed / total) * 100
        );

  const finished =
    current?.workoutDone ?? false;

  const isRest =
    workout.id === "rest";

  let motivation =
    "Aujourd'hui est un nouveau départ 💚";

  if (progress >= 25)
    motivation =
      "C'est bien parti 🌸";

  if (progress >= 50)
    motivation =
      "Continue comme ça 🔥";

  if (progress === 100)
    motivation =
      "Bravo Rachel 🎉";

  return (

    <section className="todayWorkout">

      <div className="todayTop">

        <div className="todayBadge">

          🌸 Séance du jour

        </div>

        {

          !isRest && (

            <div className="todayProgress">

              {progress}%

            </div>

          )

        }

      </div>

      <div className="todayTitle">

        <span className="todayEmoji">

          {workout.icon}

        </span>

        <div>

          <h2>

            {workout.title}

          </h2>

          <p>

            Programme personnalisé Rachel

          </p>

        </div>

      </div>

      {

        isRest

        ? (

          <div className="todayMessage">

            💚 Aujourd'hui est une journée de récupération.

            <br />

            Repose-toi, hydrate-toi et profite de ta journée.

          </div>

        )

        : (

          <>

            <div className="todayInfos">

              <div className="todayInfo">

                <span>⏱</span>

                <strong>

                  45 min

                </strong>

              </div>

              <div className="todayInfo">

                <span>💪</span>

                <strong>

                  {total} exercices

                </strong>

              </div>

            </div>

            <div className="todayBar">

              <div

                className="todayBarFill"

                style={{

                  width:`${progress}%`,

                }}

              />

            </div>

            <div className="todayMessage">

              {motivation}

            </div>

            <button

              className="todayButton"

              onClick={() =>

                navigate(

                  "/workout",

                  {

                    state:{

                      date:today,

                    },

                  }

                )

              }

            >

              {

                finished

                  ? "✅ Séance terminée"

                  : "▶ Commencer la séance"

              }

            </button>

          </>

        )

      }

    </section>

  );

}
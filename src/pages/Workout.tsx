import {
  useContext,
} from "react";

import {
  useLocation,
} from "react-router-dom";

import {
  AppContext,
} from "../context/AppContext";

import {
  getTodayDate,
} from "../utils/date";

import {
  getWorkout,
} from "../utils/getWorkout";

import "../styles/Workout.css";

export default function Workout() {

  const {
    days,
    updateDay,
  } = useContext(AppContext);

  const location =
    useLocation();

  const selectedDate =

    location.state?.date ??

    getTodayDate();

  const workout =
    getWorkout(selectedDate);

  const current =

    days.find(

      day =>

        day.date === selectedDate

    ) ??

    {

      workoutDone:false,

    };

  function toggleWorkout(){

    updateDay(

      selectedDate,

      {

        workoutDone:

          !current.workoutDone,

      }

    );

  }  if(workout.id==="rest"){

    return(

      <div className="workout">

        <div className="workoutCard">

          <div className="workoutHeader">

            <div className="workoutIcon">

              😴

            </div>

            <div>

              <h2>

                Jour de repos

              </h2>

              <p>

                Aujourd'hui est consacré à la récupération.

              </p>

            </div>

          </div>

          <div className="workoutRest">

            <div>

              💚 Le repos fait partie de la progression.

            </div>

            <div>

              💧 Pense à bien t'hydrater.

            </div>

            <div>

              🧘 Quelques étirements si tu en ressens le besoin.

            </div>

            <div>

              ❤️ Profite simplement de ta journée.

            </div>

          </div>

        </div>

      </div>

    );

  }

  return(

    <div className="workout">

      <div className="workoutCard">        <div className="workoutHeader">

          <div className="workoutIcon">

            {workout.icon}

          </div>

          <div>

            <h2>

              {workout.title}

            </h2>

            <p>

              {selectedDate}

            </p>

          </div>

        </div>

        <div className="workoutResume">

          <span>

            ⏱ 45 min

          </span>

          <span>

            💪 {workout.exercises.length} exercices

          </span>

        </div>

        <div className="exerciseList">

          {

            workout.exercises.map(

              (exercise,index)=>(

                <div

                  key={index}

                  className="exerciseCard"

                >

                  <div className="exerciseNumber">

                    {index+1}

                  </div>

                  <div className="exerciseInfos">

                    <strong>

                      {exercise.name}

                    </strong>                    {

                      exercise.sets &&

                      exercise.reps && (

                        <span>

                          {exercise.sets} × {exercise.reps}

                        </span>

                      )

                    }

                  </div>

                </div>

              )

            )

          }

        </div>

        <button

          className={`workout-button ${

            current.workoutDone

              ? "done"

              : "todo"

          }`}

          onClick={toggleWorkout}

        >

          {

            current.workoutDone

              ? "✅ Séance terminée"

              : "💪 J'ai terminé ma séance"

          }

        </button>      </div>

    </div>

  );

}
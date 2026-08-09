import "../styles/Planning.css";

import {
  useNavigate,
} from "react-router-dom";

import {
  getTodayDate,
} from "../utils/date";

import {
  getWorkout,
} from "../utils/getWorkout";

export default function Planning() {

  const navigate =
    useNavigate();

  const today =
    new Date(getTodayDate());

  const upcoming = [];

  for (
    let i = 0;
    i < 7;
    i++
  ) {

    const nextDate =
      new Date(today);

    nextDate.setDate(
      today.getDate() + i
    );

    const dateString =
      `${nextDate.getFullYear()}-${String(
        nextDate.getMonth() + 1
      ).padStart(2,"0")}-${String(
        nextDate.getDate()
      ).padStart(2,"0")}`;

    const workout =
      getWorkout(dateString);

    let label =
      nextDate.toLocaleDateString(
        "fr-FR",
        {
          weekday:"long",
        }
      );

    if(i===0)
      label = "Aujourd'hui";

    if(i===1)
      label = "Demain";

    upcoming.push({

      id:i,

      day:label,

      title:
        workout.title,

      icon:
        workout.icon,

      duration:

        workout.id==="rest"

        ? "Repos"

        : "45 min",

      hour:

        workout.id==="rest"

        ? ""

        : "18h30",

      type:
        workout.id,

    });

  }

  function getColor(type:string){

    switch(type){

      case "cardio":

        return "cardio";

      case "rest":

        return "rest";

      default:

        return "strength";

    }

  }

  return(

    <section className="planning">      {

        upcoming.map((session)=>(

          <article

            key={session.id}

            className={`planningRow ${getColor(session.type)}`}

          >

            <div className="planningLeft">

              <div className="planningIcon">

                {session.icon}

              </div>

              <div className="planningContent">

                <span className="planningDay">

                  {session.day}

                </span>

                <h4>

                  {session.title}

                </h4>

                <div className="planningMeta">

                  <span>

                    ⏱ {session.duration}

                  </span>

                  {

                    session.hour && (

                      <span>

                        🕡 {session.hour}

                      </span>

                    )

                  }

                </div>

              </div>

            </div>

            <button

              className="planningButton"

              onClick={() => navigate("/workout")}

            >

              ▶ Voir

            </button>

          </article>

        ))

      }

    </section>

  );

}
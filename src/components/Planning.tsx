import "../styles/Planning.css";

import { getTodayDate } from "../utils/date";
import { getWorkout } from "../utils/getWorkout";

export default function Planning() {

  const today = new Date(getTodayDate());

  const upcoming = [];

  for (let i = 1; i <= 3; i++) {

    const nextDate = new Date(today);

    nextDate.setDate(today.getDate() + i);

    const dateString =
      `${nextDate.getFullYear()}-${String(
        nextDate.getMonth() + 1
      ).padStart(2, "0")}-${String(
        nextDate.getDate()
      ).padStart(2, "0")}`;

    const workout = getWorkout(dateString);

    upcoming.push({

      id: i,

      day:
        nextDate.toLocaleDateString("fr-FR", {
          weekday: "long",
        }),

      title: workout.title,

      icon: workout.icon,

      hour:
        workout.id === "rest"
          ? "Repos"
          : "18h30",

      duration:
        workout.id === "rest"
          ? "Récupération"
          : "45 min",

      type: workout.id,

    });

  }

  function getColor(type: string) {

    switch (type) {

      case "cardio":
        return "cardio";

      case "rest":
        return "rest";

      default:
        return "strength";

    }

  }

  return (

    <section className="planning">

      {upcoming.map((session) => (

        <article
          key={session.id}
          className={`planningCard ${getColor(session.type)}`}
        >

          <div className="planningTop">

            <div className="planningEmoji">
              {session.icon}
            </div>

            <div className="planningInfos">

              <span className="planningDay">

                {session.day.charAt(0).toUpperCase() +
                  session.day.slice(1)}

              </span>

              <h3>

                {session.title}

              </h3>

            </div>

            <span className="planningBadge">

              {session.hour}

            </span>

          </div>

          <div className="planningBottom">

            <span>

              ⏱ {session.duration}

            </span>

            <button>

              Voir

            </button>

          </div>

        </article>

      ))}

    </section>

  );

}
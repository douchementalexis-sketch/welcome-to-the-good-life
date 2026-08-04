import { planning } from "../data/planning";

import "../styles/Planning.css";

export default function Planning() {

  const upcoming = planning.slice(1);

  function getColor(title: string) {

    if (title.includes("Cardio")) {
      return "cardio";
    }

    if (title.includes("Repos")) {
      return "rest";
    }

    return "strength";

  }

  function getIcon(title: string) {

    if (title.includes("Cardio")) {
      return "🚴";
    }

    if (title.includes("Repos")) {
      return "😴";
    }

    return "🏋️";

  }

  return (

    <div className="planning">

      {upcoming.map((session) => (

        <div
          key={session.id}
          className={`planning-card ${getColor(session.title)}`}
        >

          <div className="planning-left">

            <div className="planning-icon">
              {getIcon(session.title)}
            </div>

            <div>

              <div className="planning-day">
                {session.day}
              </div>

              <div className="planning-title">
                {session.title}
              </div>

            </div>

          </div>

          <div className="planning-right">

            <span>{session.hour}</span>

            <small>{session.duration}</small>

          </div>

        </div>

      ))}

    </div>

  );

}
import { planning } from "../data/planning";

import "../styles/Planning.css";

export default function Planning() {
  const upcoming = planning.slice(1);

  return (
    <div className="planning">

      {upcoming.map((session) => (

        <div
          key={session.id}
          className="planning-card"
        >
          <div className="planning-day">
            📅 {session.day}
          </div>

          <div className="planning-title">
            {session.title}
          </div>

          <div className="planning-footer">
            <span>🕒 {session.hour}</span>

            <span>⏱ {session.duration}</span>
          </div>
        </div>

      ))}

    </div>
  );
}
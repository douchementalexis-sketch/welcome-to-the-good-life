import { useContext } from "react";

import { AppContext } from "../context/AppContext";

import "../styles/WorkoutStat.css";

export default function WorkoutStat() {

  const { days } = useContext(AppContext);

  const completed =
    days.filter(
      day => day.workoutDone
    ).length;

  const percentage =
    Math.min(
      100,
      completed * 10
    );

  return (

    <div className="workoutStat">

      <div className="workoutIcon">

        💪

      </div>

      <div className="workoutValue">

        {completed}

      </div>

      <div className="workoutLabel">

        Séances

      </div>

      <div className="workoutBar">

        <div

          className="workoutProgress"

          style={{
            width:`${percentage}%`,
          }}

        />

      </div>

    </div>

  );

}
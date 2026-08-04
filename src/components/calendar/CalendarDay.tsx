import { useContext } from "react";

import { AppContext } from "../../context/AppContext";
import { workouts } from "../../data/programs";

type Props = {
  day: number;
  today: boolean;
  onClick: () => void;
};

export default function CalendarDay({
  day,
  today,
  onClick,
}: Props) {

  const { days } = useContext(AppContext);

  const data = days.find(
    (d) => Number(d.date.split("-")[2]) === day
  );

  const date = new Date();
  date.setDate(day);

  const weekDay = date.getDay();

  const schedule: Record<number, string> = {
    1: "fullBodyA",
    2: "cardio",
    3: "fullBodyB",
    4: "rest",
    5: "fullBodyC",
    6: "cardio",
    0: "rest",
  };

  const workout = workouts[schedule[weekDay]];

  const completed = data?.workoutDone ?? false;

  return (

    <button
      className={`
        calendar-day
        ${today ? "today" : ""}
        ${completed ? "completed-day" : ""}
      `}
      onClick={onClick}
    >

      <div className="premium-top">

        <span className="day-number">
          {day}
        </span>

        <span className="status-icon">
          {completed ? "✅" : workout.icon}
        </span>

      </div>


      <div className="premium-center">

        <span className="main-icon">
          {workout.icon}
        </span>

      </div>


      <div className="premium-bottom">

        {data?.water ? <span>💧</span> : <span className="empty">•</span>}

        {data && data.mood >= 0
          ? <span>😊</span>
          : <span className="empty">•</span>}

        {data?.notes?.trim()
          ? <span>📝</span>
          : <span className="empty">•</span>}

      </div>

    </button>

  );

}
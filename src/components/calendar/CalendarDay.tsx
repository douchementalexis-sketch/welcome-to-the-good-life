import { useContext } from "react";

import { AppContext } from "../../context/AppContext";

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

  const current = days.find(
    (item) =>
      Number(item.date.split("-")[2]) === day
  );

  return (
    <button
      type="button"
      className={`calendar-day ${today ? "today" : ""}`}
      onClick={onClick}
    >
      <div className="day-number">
        {day}
      </div>

      {current ? (
        <div className="day-content">

          <div className="badge water">
            💧 {current.water}
          </div>

          <div className="badge mood">
            {["😞","😐","🙂","😁","🤩"][current.mood]}
          </div>

          {current.workoutDone && (
            <div className="badge workout">
              ✅
            </div>
          )}

        </div>
      ) : (
        <div className="day-content">

          <div className="badge empty">
            —
          </div>

        </div>
      )}
    </button>
  );
}
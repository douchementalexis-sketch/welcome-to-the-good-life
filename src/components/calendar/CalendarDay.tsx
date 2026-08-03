import { useContext } from "react";

import { AppContext } from "../../context/AppContext";
import { MOODS } from "../../constants/moods";

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

  const current = days.find((item) => {
    const dayNumber = Number(item.date.split("-")[2]);
    return dayNumber === day;
  });

  return (
    <button
      type="button"
      className={`calendar-day ${today ? "today" : ""}`}
      onClick={onClick}
    >
      <div className="day-number">
        {day}
      </div>

      <div className="day-content">
        {current ? (
          <>
            <div className="badge water">
              💧 {current.water}/8
            </div>

            <div className="badge mood">
              {MOODS[current.mood].emoji}
            </div>

            {current.workoutDone && (
              <div className="badge workout">
                ✅
              </div>
            )}
          </>
        ) : (
          <div className="badge empty">
            —
          </div>
        )}
      </div>
    </button>
  );
}
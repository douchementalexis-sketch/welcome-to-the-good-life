import { useContext } from "react";

import {
  Dumbbell,
  Bike,
  Moon,
  Droplets,
  NotebookPen,
  Check,
  Smile,
} from "lucide-react";

import { AppContext } from "../../context/AppContext";
import { workouts } from "../../data/programs";

type Props = {
  day: number;
  month: number;
  year: number;
  today: boolean;
  onClick: () => void;
};

export default function CalendarDayPremium({
  day,
  month,
  year,
  today,
  onClick,
}: Props) {

  const { days } = useContext(AppContext);

  const dateKey =
    `${year}-${String(month + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}`;

  const data =
    days.find(
      (d) => d.date === dateKey
    );

  const completed =
    data?.workoutDone ?? false;

  const weekDay =
    new Date(year, month, day).getDay();

  const schedule: Record<number, string> = {

    1: "fullBodyA",

    2: "cardio",

    3: "fullBodyB",

    4: "rest",

    5: "fullBodyC",

    6: "cardio",

    0: "rest",

  };

  const workout =
    workouts[schedule[weekDay]];

  const mood =
    data?.mood ?? 0;

  const progress = completed
    ? 100
    : (
        Number((data?.water ?? 0) > 0) +
        Number(Boolean(data?.notes?.trim())) +
        Number(Boolean(data))
      ) / 3 * 100;

  function WorkoutIcon() {

    switch (workout.id) {

      case "A":
      case "B":
      case "C":

        return (
          <Dumbbell
            size={24}
            strokeWidth={2.3}
          />
        );

      case "cardio":

        return (
          <Bike
            size={24}
            strokeWidth={2.3}
          />
        );

      default:

        return (
          <Moon
            size={24}
            strokeWidth={2.3}
          />
        );

    }

  }

  function badgeLabel() {

    switch (workout.id) {

      case "A":
        return "A";

      case "B":
        return "B";

      case "C":
        return "C";

      case "cardio":
        return "CARDIO";

      default:
        return "REST";

    }

  }

  function moodColor() {

    if (mood >= 4) return "#16a34a";

    if (mood >= 3) return "#eab308";

    return "#ef4444";

  }

  return (

    <button

      className={[
        "premium-day",
        today ? "today" : "",
        completed ? "completed" : "",
        workout.id,
      ]
        .filter(Boolean)
        .join(" ")}

      onClick={onClick}

      type="button"

    >      <div className="premium-day-top">

        <span className="premium-number">
          {day}
        </span>

        {completed && (
          <div className="premium-check">
            <Check
              size={14}
              strokeWidth={3}
            />
          </div>
        )}

      </div>

      <div className="premium-icon-wrapper">

        <div className="premium-icon">

          <WorkoutIcon />

        </div>

      </div>

      <div className="premium-badge">

        {badgeLabel()}

      </div>

      <div className="premium-indicators">

        <div className="premium-indicator">

          {(data?.water ?? 0) > 0 ? (

            <Droplets size={14} />

          ) : (

            <span className="indicator-empty">•</span>

          )}

        </div>

        <div className="premium-indicator">

          {data ? (

            <Smile
              size={14}
              color={moodColor()}
            />

          ) : (

            <span className="indicator-empty">•</span>

          )}

        </div>

        <div className="premium-indicator">

          {data?.notes?.trim() ? (

            <NotebookPen size={14} />

          ) : (

            <span className="indicator-empty">•</span>

          )}

        </div>

      </div>

      <div className="premium-progress">

        <div
          className="premium-progress-bar"
          style={{
            width: `${progress}%`,
          }}
        />

      </div>

    </button>

  );

}
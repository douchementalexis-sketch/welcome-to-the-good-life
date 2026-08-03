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
  return (
    <div
      className={`calendar-day ${today ? "today" : ""}`}
      onClick={onClick}
    >
      <div className="day-number">
        {day}
      </div>

      <div className="day-icons">
        💧 😊 🏋️
      </div>
    </div>
  );
}
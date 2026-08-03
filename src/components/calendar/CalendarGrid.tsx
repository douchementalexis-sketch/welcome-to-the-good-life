import CalendarDay from "./CalendarDay";

type Props = {
  days: number;
  firstDay: number;
  today: Date;
  month: number;
  year: number;
  onSelectDay: (day: number) => void;
};

export default function CalendarGrid({
  days,
  firstDay,
  today,
  month,
  year,
  onSelectDay,
}: Props) {
  return (
    <div className="calendar-grid">

      {Array.from({ length: firstDay }).map((_, index) => (
        <div
          key={`empty-${index}`}
          className="empty-day"
        />
      ))}

      {Array.from({ length: days }).map((_, index) => {

        const currentDay = index + 1;

        const isToday =
          currentDay === today.getDate() &&
          month === today.getMonth() &&
          year === today.getFullYear();

        return (
          <CalendarDay
            key={currentDay}
            day={currentDay}
            today={isToday}
            onClick={() => onSelectDay(currentDay)}
          />
        );

      })}

    </div>
  );
}
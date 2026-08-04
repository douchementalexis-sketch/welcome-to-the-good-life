import CalendarDayPremium from "./CalendarDayPremium";

type Props = {
  days: number;
  firstDay: number;
  today: Date;
  month: number;
  year: number;
  onSelectDay: (day: number) => void;
};

export default function CalendarGridPremium({
  days,
  firstDay,
  today,
  month,
  year,
  onSelectDay,
}: Props) {
  return (
    <div className="premium-grid">

      {Array.from({ length: firstDay }).map((_, index) => (
        <div
          key={index}
          className="premium-empty"
        />
      ))}

      {Array.from({ length: days }).map((_, index) => {

        const currentDay = index + 1;

        const isToday =
          currentDay === today.getDate() &&
          month === today.getMonth() &&
          year === today.getFullYear();

        return (
          <CalendarDayPremium
            key={currentDay}
            day={currentDay}
            month={month}
            year={year}
            today={isToday}
            onClick={() =>
              onSelectDay(currentDay)
            }
          />
        );

      })}

    </div>
  );
}
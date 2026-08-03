type Props = {
  monthName: string;
  previousMonth: () => void;
  nextMonth: () => void;
};

export default function CalendarHeader({
  monthName,
  previousMonth,
  nextMonth,
}: Props) {
  return (
    <div className="calendar-header">

      <button onClick={previousMonth}>
        ◀
      </button>

      <h1>{monthName}</h1>

      <button onClick={nextMonth}>
        ▶
      </button>

    </div>
  );
}
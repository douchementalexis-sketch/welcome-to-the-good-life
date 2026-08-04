import { ChevronLeft, ChevronRight } from "lucide-react";

type Props = {
  monthName: string;
  previousMonth: () => void;
  nextMonth: () => void;
};

export default function CalendarHeaderPremium({
  monthName,
  previousMonth,
  nextMonth,
}: Props) {
  return (
    <header className="premium-header">

      <button
        className="premium-nav-button"
        onClick={previousMonth}
        aria-label="Mois précédent"
        type="button"
      >
        <ChevronLeft size={22} strokeWidth={2.5} />
      </button>

      <div className="premium-header-content">

        <span className="premium-label">
          Welcome to the Good Life
        </span>

        <h1 className="premium-title">
          {monthName}
        </h1>

      </div>

      <button
        className="premium-nav-button"
        onClick={nextMonth}
        aria-label="Mois suivant"
        type="button"
      >
        <ChevronRight size={22} strokeWidth={2.5} />
      </button>

    </header>
  );
}
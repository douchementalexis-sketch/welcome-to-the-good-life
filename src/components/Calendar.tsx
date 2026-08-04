import { useState } from "react";

import BottomNavigation from "../components/BottomNavigation";
import CalendarHeader from "../components/calendar/CalendarHeader";
import CalendarGrid from "../components/calendar/CalendarGrid";
import DayModal from "../components/calendar/DayModal";

import {
  getDaysInMonth,
  getFirstDayOfMonth,
} from "../utils/calendar";

import "./Home.css";
import "../styles/Calendar.css";

export default function Calendar() {
  const [currentDate, setCurrentDate] = useState(new Date());

  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();

  const days = getDaysInMonth(year, month);
  const firstDay = getFirstDayOfMonth(year, month);

  const monthName = currentDate.toLocaleDateString("fr-FR", {
    month: "long",
    year: "numeric",
  });

  const today = new Date();

  function previousMonth() {
    setCurrentDate(new Date(year, month - 1, 1));
  }

  function nextMonth() {
    setCurrentDate(new Date(year, month + 1, 1));
  }

  function handleSelectDay(day: number) {
    setSelectedDate(new Date(year, month, day));
  }

  return (
    <div className="home">
      <div className="hero">
        <div className="calendar">

          <CalendarHeader
            monthName={monthName}
            previousMonth={previousMonth}
            nextMonth={nextMonth}
          />

          <div className="calendar-weekdays">
            <span>L</span>
            <span>M</span>
            <span>M</span>
            <span>J</span>
            <span>V</span>
            <span>S</span>
            <span>D</span>
          </div>

          <CalendarGrid
            days={days}
            firstDay={firstDay}
            today={today}
            month={month}
            year={year}
            onSelectDay={handleSelectDay}
          />

        </div>
      </div>

      <DayModal
        date={selectedDate}
        onClose={() => setSelectedDate(null)}
      />

      <BottomNavigation />
    </div>
  );
}
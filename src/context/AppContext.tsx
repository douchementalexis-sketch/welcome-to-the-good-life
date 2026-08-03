import { createContext, useEffect, useState } from "react";
import { dayData } from "../data/dailyData";
import type { DayData } from "../types/DayData";

type AppContextType = {
  days: DayData[];

  updateDay: (
    date: string,
    updates: Partial<DayData>
  ) => void;
};

export const AppContext = createContext<AppContextType>({
  days: [],
  updateDay: () => {},
});

const STORAGE_KEY = "welcome-to-the-good-life-days";

export function AppProvider({
  children,
}: {
  children: React.ReactNode;
}) {

  const [days, setDays] = useState<DayData[]>(() => {

    const saved = localStorage.getItem(STORAGE_KEY);

    if (saved) {
      return JSON.parse(saved);
    }

    return dayData;

  });

  useEffect(() => {

    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify(days)
    );

  }, [days]);

  function updateDay(
    date: string,
    updates: Partial<DayData>
  ) {

    setDays((previous) => {

      const exists = previous.some(
        (day) => day.date === date
      );

      if (exists) {

        return previous.map((day) =>
          day.date === date
            ? {
                ...day,
                ...updates,
              }
            : day
        );

      }

      const newDay: DayData = {
        id: date,
        date,
        water: 0,
        mood: 2,
        workoutDone: false,
        notes: "",
        ...updates,
      };

      return [...previous, newDay];

    });

  }

  return (
    <AppContext.Provider
      value={{
        days,
        updateDay,
      }}
    >
      {children}
    </AppContext.Provider>
  );

}
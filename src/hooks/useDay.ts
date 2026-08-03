import { useContext } from "react";

import { AppContext } from "../context/AppContext";

export function useDay(date: string) {
  const { days } = useContext(AppContext);

  return (
    days.find((day) => day.date === date) ?? null
  );
}
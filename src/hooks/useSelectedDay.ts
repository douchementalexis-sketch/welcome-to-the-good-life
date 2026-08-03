import { useContext } from "react";
import { AppContext } from "../context/AppContext";

export function useSelectedDay() {
  const {
    selectedDate,
    setSelectedDate,
  } = useContext(AppContext);

  return {
    selectedDate,
    setSelectedDate,
  };
}
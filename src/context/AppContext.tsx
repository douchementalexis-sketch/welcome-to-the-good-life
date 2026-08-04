import {
  createContext,
} from "react";

import type {
  DayData,
} from "../types/DayData";



type AppContextType = {


  days: DayData[];


  updateDay: (
    date: string,
    updates: Partial<DayData>
  ) => void;



  ensureMonthDays: (
    year: number,
    month: number
  ) => Promise<void>;


};




export const AppContext =
  createContext<AppContextType>({


    days: [],


    updateDay: () => {},


    ensureMonthDays:
      async () => {},


  });
import {
  createContext,
} from "react";

import type {
  DayData,
} from "../types/DayData";

import type {
  Weight,
} from "../types/Weight";

type AppContextType = {

  // DAYS

  days: DayData[];

  updateDay: (
    date: string,
    updates: Partial<DayData>
  ) => void;

  ensureMonthDays: (
    year: number,
    month: number
  ) => Promise<void>;

  // WEIGHTS

  weights: Weight[];

  loadWeights: () => Promise<void>;

  addWeight: (
    weight: number
  ) => Promise<void>;

  updateWeight: (
    id: string,
    weight: number
  ) => Promise<void>;

  deleteWeight: (
    id: string
  ) => Promise<void>;

};

export const AppContext =
  createContext<AppContextType>({

    // DAYS

    days: [],

    updateDay: () => {},

    ensureMonthDays:
      async () => {},

    // WEIGHTS

    weights: [],

    loadWeights:
      async () => {},

    addWeight:
      async () => {},

    updateWeight:
      async () => {},

    deleteWeight:
      async () => {},

  });
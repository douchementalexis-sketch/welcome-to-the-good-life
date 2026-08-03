import { createContext, useEffect, useState } from "react";

type AppContextType = {
  water: number;
  setWater: React.Dispatch<React.SetStateAction<number>>;

  workoutDone: boolean;
  setWorkoutDone: React.Dispatch<React.SetStateAction<boolean>>;

  mood: number;
  setMood: React.Dispatch<React.SetStateAction<number>>;

  resetDay: () => void;
};

export const AppContext = createContext<AppContextType>({
  water: 0,
  setWater: () => {},

  workoutDone: false,
  setWorkoutDone: () => {},

  mood: 2,
  setMood: () => {},

  resetDay: () => {},
});

export function AppProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [water, setWater] = useState(() => {
    const saved = localStorage.getItem("water");
    return saved ? Number(saved) : 0;
  });

  const [workoutDone, setWorkoutDone] = useState(() => {
    const saved = localStorage.getItem("workoutDone");
    return saved === "true";
  });

  const [mood, setMood] = useState(() => {
    const saved = localStorage.getItem("mood");
    return saved ? Number(saved) : 2;
  });

  useEffect(() => {
    localStorage.setItem("water", water.toString());
  }, [water]);

  useEffect(() => {
    localStorage.setItem("workoutDone", workoutDone.toString());
  }, [workoutDone]);

  useEffect(() => {
    localStorage.setItem("mood", mood.toString());
  }, [mood]);

  const resetDay = () => {
    setWater(0);
    setWorkoutDone(false);
    setMood(2);
  };

  return (
    <AppContext.Provider
      value={{
        water,
        setWater,
        workoutDone,
        setWorkoutDone,
        mood,
        setMood,
        resetDay,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}
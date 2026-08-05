export type DayData = {
  id: string;

  date: string;

  water: number;

  mood: number;

  workoutDone: boolean;

  dayValidated: boolean;

  notes: string;

  completedExercises?: string[];
};
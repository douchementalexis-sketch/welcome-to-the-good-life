export type Exercise = {

  name: string;

  sets?: number;

  reps?: string;

};

export type Workout = {

  id: "A" | "B" | "C" | "cardio" | "rest";

  title: string;

  icon: string;

  exercises: Exercise[];

};
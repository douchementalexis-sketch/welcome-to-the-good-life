import { workouts } from "../data/programs";

export function getWorkout(date: string) {

  const day =
    new Date(date).getDay();

  switch (day) {

    case 1:
      return workouts.fullBodyA;

    case 2:
      return workouts.cardio;

    case 3:
      return workouts.fullBodyB;

    case 4:
      return workouts.rest;

    case 5:
      return workouts.fullBodyC;

    case 6:
      return workouts.cardio;

    default:
      return workouts.rest;

  }

}
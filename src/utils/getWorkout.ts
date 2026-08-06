import { workouts } from "../data/programs";

export function getWorkout(_date: string) {

  // ===========================
  // MODE TEST
  // ===========================

  return workouts.fullBodyA;

  // ===========================
  // MODE NORMAL
  // ===========================

  /*
  const day =
    new Date(_date).getDay();

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
  */

}
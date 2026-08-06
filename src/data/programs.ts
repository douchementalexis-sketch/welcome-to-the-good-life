import type {
  Workout,
} from "../types/Workout";

export const workouts: Record<string, Workout> = {

  fullBodyA: {

    id: "A",

    title: "Full Body A",

    icon: "🏋️",

    exercises: [

      {
        name: "Goblet Squat",
        sets: 4,
        reps: "12",
      },

      {
        name: "Développé incliné haltères",
        sets: 4,
        reps: "10",
      },

      {
        name: "Rowing haltères",
        sets: 4,
        reps: "12",
      },

      {
        name: "Hip Thrust",
        sets: 4,
        reps: "15",
      },

      {
        name: "Élévations latérales",
        sets: 3,
        reps: "15",
      },

      {
        name: "Gainage",
        sets: 3,
        reps: "45 sec",
      },

    ],

  },

  fullBodyB: {

    id: "B",

    title: "Full Body B",

    icon: "🏋️",

    exercises: [

      {
        name: "Soulevé de terre roumain",
        sets: 4,
        reps: "10",
      },

      {
        name: "Développé militaire haltères",
        sets: 4,
        reps: "10",
      },

      {
        name: "Rowing un bras",
        sets: 4,
        reps: "12",
      },

      {
        name: "Fentes marchées",
        sets: 3,
        reps: "12",
      },

      {
        name: "Curl biceps",
        sets: 3,
        reps: "15",
      },

      {
        name: "Gainage latéral",
        sets: 3,
        reps: "30 sec",
      },

    ],

  },  fullBodyC: {

    id: "C",

    title: "Full Body C",

    icon: "🏋️",

    exercises: [

      {
        name: "Hip Thrust",
        sets: 4,
        reps: "12",
      },

      {
        name: "Développé couché haltères",
        sets: 4,
        reps: "10",
      },

      {
        name: "Rowing haltères",
        sets: 4,
        reps: "12",
      },

      {
        name: "Leg Curl",
        sets: 3,
        reps: "15",
      },

      {
        name: "Élévations latérales",
        sets: 3,
        reps: "20",
      },

      {
        name: "Crunch",
        sets: 3,
        reps: "20",
      },

    ],

  },

  cardio: {

    id: "cardio",

    title: "Cardio",

    icon: "🚴",

    exercises: [

      {
        name: "45 minutes",
      },

      {
        name: "Vélo ou marche rapide",
      },

      {
        name: "Zone 2",
      },

      {
        name: "Hydratation",
      },

    ],

  },

  rest: {

    id: "rest",

    title: "Repos",

    icon: "😴",

    exercises: [

      {
        name: "Repos",
      },

      {
        name: "Hydratation",
      },

      {
        name: "Étirements",
      },

      {
        name: "Profiter de la journée ❤️",
      },

    ],

  },

};
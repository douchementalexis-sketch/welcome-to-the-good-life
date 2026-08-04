export type Workout = {
  id: "A" | "B" | "C" | "cardio" | "rest";
  title: string;
  icon: string;
  exercises: string[];
};

export const workouts: Record<string, Workout> = {

  fullBodyA: {
    id: "A",
    title: "Full Body A",
    icon: "🏋️",
    exercises: [
      "Goblet Squat • 4 x 12",
      "Développé incliné haltères • 4 x 10",
      "Rowing haltères • 4 x 12",
      "Hip Thrust • 4 x 15",
      "Élévations latérales • 3 x 15",
      "Gainage • 3 x 45 sec",
    ],
  },

  fullBodyB: {
    id: "B",
    title: "Full Body B",
    icon: "🏋️",
    exercises: [
      "Soulevé de terre roumain • 4 x 10",
      "Développé militaire haltères • 4 x 10",
      "Rowing un bras • 4 x 12",
      "Fentes marchées • 3 x 12",
      "Curl biceps • 3 x 15",
      "Gainage latéral • 3 x 30 sec",
    ],
  },

  fullBodyC: {
    id: "C",
    title: "Full Body C",
    icon: "🏋️",
    exercises: [
      "Hip Thrust • 4 x 12",
      "Développé couché haltères • 4 x 10",
      "Rowing haltères • 4 x 12",
      "Leg Curl • 3 x 15",
      "Élévations latérales • 3 x 20",
      "Crunch • 3 x 20",
    ],
  },

  cardio: {
    id: "cardio",
    title: "Cardio",
    icon: "🚴",
    exercises: [
      "45 minutes",
      "Vélo ou marche rapide",
      "Zone 2",
      "Hydratation",
    ],
  },

  rest: {
    id: "rest",
    title: "Repos",
    icon: "😴",
    exercises: [
      "Repos",
      "Hydratation",
      "Étirements",
      "Profiter de la journée ❤️",
    ],
  },

};
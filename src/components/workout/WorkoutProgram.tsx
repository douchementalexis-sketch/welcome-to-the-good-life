import { useContext } from "react";

import "../../styles/WorkoutProgram.css";

import { AppContext } from "../../context/AppContext";
import { getWorkout } from "../../utils/getWorkout";

import ExerciseItem from "./ExerciseItem";

type Props = {
  date: string;
};

export default function WorkoutProgram({
  date,
}: Props) {

  const workout =
    getWorkout(date);

  const {
    days,
    updateDay,
  } = useContext(AppContext);

  const current =
    days.find(
      (d) => d.date === date
    );

  /*
   * Sécurisation des exercices terminés.
   *
   * Si Supabase renvoie une mauvaise valeur
   * (objet, texte, null...), on repart sur
   * un tableau vide afin d'éviter :
   *
   * completed.includes is not a function
   */
  const completed =
    Array.isArray(
      current?.completedExercises
    )
      ? current.completedExercises
      : [];

  function toggleExercise(
    exerciseName: string
  ) {

    const exists =
      completed.includes(
        exerciseName
      );

    const newCompleted =
      exists

        ? completed.filter(
            (item) =>
              item !== exerciseName
          )

        : [
            ...completed,
            exerciseName,
          ];

    updateDay(
      date,
      {
        completedExercises:
          newCompleted,
      }
    );

  }

  /*
   * Sécurité supplémentaire :
   * évite une division par zéro
   * si un programme ne contient
   * aucun exercice.
   */
  const percent =
    workout.exercises.length === 0

      ? 0

      : Math.round(

          (
            completed.length /
            workout.exercises.length
          ) * 100

        );

  return (

    <div className="program-card">

      <h3>

        {workout.icon} {workout.title}

      </h3>

      <div className="progress">

        <div className="progress-header">

          <span>

            Progression

          </span>

          <span>

            {completed.length} /{" "}

            {workout.exercises.length}

          </span>

        </div>

        <div className="progress-bar">

          <div

            className="progress-fill"

            style={{
              width: `${percent}%`,
            }}

          />

        </div>

      </div>

      <div className="program-list">

        {workout.exercises.map(

          (exercise) => (

            <ExerciseItem

              key={exercise.name}

              exercise={exercise}

              checked={
                completed.includes(
                  exercise.name
                )
              }

              onToggle={() =>
                toggleExercise(
                  exercise.name
                )
              }

            />

          )

        )}

      </div>

    </div>

  );

}
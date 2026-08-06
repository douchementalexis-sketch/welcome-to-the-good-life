import { useState } from "react";

import type { Exercise } from "../../types/Workout";

import ExerciseModal from "./ExerciseModal";
import { exercises } from "../../data/exercises";

type Props = {
  exercise: Exercise;
  checked: boolean;
  onToggle: () => void;
};

export default function ExerciseItem({
  exercise,
  checked,
  onToggle,
}: Props) {

  const [open, setOpen] = useState(false);

  const exerciseData =
    exercises[exercise.name];

  const hasExerciseSheet =
    !!exerciseData;

  return (

    <>

      <div
        className={`exercise-item ${
          checked ? "done" : ""
        }`}
      >

        <button
          className="exercise-main"
          onClick={onToggle}
        >

          <span className="exercise-check">

            {checked ? "✅" : "⬜"}

          </span>

          <div
            className="exercise-content"
          >

            <div className="exercise-name">

              {exercise.name}

            </div>

            {exercise.sets &&
              exercise.reps && (

              <div
                className="exercise-details"
              >

                🏋️ {exercise.sets} × {exercise.reps}

              </div>

            )}

          </div>

        </button>

        {hasExerciseSheet && (

          <button
            className="exercise-view"
            onClick={() =>
              setOpen(true)
            }
          >

            👁️ Voir l'exercice

          </button>

        )}

      </div>

      {hasExerciseSheet && (

        <ExerciseModal

          open={open}

          title={exercise.name}

          image={exerciseData.image}

          onClose={() =>
            setOpen(false)
          }

        />

      )}

    </>

  );

}
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
    exercises[
      exercise.name as keyof typeof exercises
    ];

  const canShowExercise =
    exerciseData !== undefined;

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

          <span className="exercise-name">

            <strong>
              {exercise.name}
            </strong>

            {exercise.sets && exercise.reps && (

              <div
                style={{
                  fontSize: 14,
                  color: "#666",
                  marginTop: 4,
                }}
              >

                {exercise.sets} × {exercise.reps}

              </div>

            )}

          </span>

        </button>

        {canShowExercise && (

          <button
            className="exercise-view"
            onClick={() => setOpen(true)}
          >

            👁️ Voir l'exercice

          </button>

        )}

      </div>

      {canShowExercise && (

        <ExerciseModal

          open={open}

          title={exercise.name}

          image={exerciseData.image}

          onClose={() => setOpen(false)}

        />

      )}

    </>

  );

}
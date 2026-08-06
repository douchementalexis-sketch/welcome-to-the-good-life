import { useState } from "react";

import ExerciseModal from "./ExerciseModal";
import { exercises } from "../../data/exercises";

type Props = {
  exercise: string;
  checked: boolean;
  onToggle: () => void;
};

export default function ExerciseItem({
  exercise,
  checked,
  onToggle,
}: Props) {

  const [open, setOpen] = useState(false);

  const exerciseData = exercises[exercise];

  function handleViewExercise(
    e: React.MouseEvent
  ) {

    e.stopPropagation();

    setOpen(true);

  }

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
            {exercise}
          </span>

        </button>

        <button
          className="exercise-view"
          onClick={handleViewExercise}
        >

          👁️ Voir l'exercice

        </button>

      </div>

      <ExerciseModal

        open={open}

        title={exercise}

        image={
          exerciseData?.image ??
          "/exercises/not-found.webp"
        }

        onClose={() => setOpen(false)}

      />

    </>

  );

}
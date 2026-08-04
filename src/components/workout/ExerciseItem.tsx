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
  return (
    <button
      className={`exercise-item ${
        checked ? "done" : ""
      }`}
      onClick={onToggle}
    >
      <span className="exercise-check">
        {checked ? "✅" : "⬜"}
      </span>

      <span className="exercise-name">
        {exercise}
      </span>
    </button>
  );
}
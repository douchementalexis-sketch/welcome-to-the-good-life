import "../../styles/WorkoutBadge.css";

type Props = {
  type: "A" | "B" | "C" | "cardio" | "rest";
};

export default function WorkoutBadge({ type }: Props) {
  const color =
    type === "cardio"
      ? "#3B82F6"
      : type === "rest"
      ? "#EF4444"
      : "#22C55E";

  const icon =
    type === "cardio"
      ? "🚴"
      : type === "rest"
      ? "😴"
      : "🏋️";

  const title =
    type === "A"
      ? "Full Body A"
      : type === "B"
      ? "Full Body B"
      : type === "C"
      ? "Full Body C"
      : type === "cardio"
      ? "Cardio"
      : "Repos";

  return (
    <div
      className="workout-pill"
      style={{
        background: color,
      }}
    >
      <span>{icon}</span>
      <span>{title}</span>
    </div>
  );
}
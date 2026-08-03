import "../styles/SaveDayButton.css";

type Props = {
  onClick: () => void;
};

export default function SaveDayButton({
  onClick,
}: Props) {
  return (
    <button
      className="save-day-button"
      onClick={onClick}
    >
      💾 Enregistrer ma journée
    </button>
  );
}
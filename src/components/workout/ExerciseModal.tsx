import "./ExerciseModal.css";

type Props = {
  open: boolean;
  title: string;
  image: string;
  onClose: () => void;
};

export default function ExerciseModal({
  open,
  title,
  image,
  onClose,
}: Props) {

  if (!open) return null;

  return (

    <div
      className="exercise-modal-overlay"
      onClick={onClose}
    >

      <div
        className="exercise-modal"
        onClick={(e) => e.stopPropagation()}
      >

        <h2>
          💪 {title}
        </h2>

        <img
          src={image}
          alt={title}
          className="exercise-image"
        />

        <button
          className="exercise-close"
          onClick={onClose}
        >
          Fermer
        </button>

      </div>

    </div>

  );

}
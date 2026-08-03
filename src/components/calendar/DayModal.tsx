import "../styles/DayModal.css";

import { dayData } from "../../data/dailyData";

type Props = {
  day: number | null;
  onClose: () => void;
};

const moods = [
  "😞 Journée difficile",
  "😐 Ça va",
  "🙂 Je me sens bien",
  "😁 Très bonne journée",
  "🤩 Je suis au top !",
];

export default function DayModal({
  day,
  onClose,
}: Props) {
  if (day === null) {
    return null;
  }

  const selected = dayData.find(
    (item) => Number(item.date.split("-")[2]) === day
  );

  return (
    <div
      className="modal-overlay"
      onClick={onClose}
    >
      <div
        className="modal"
        onClick={(e) => e.stopPropagation()}
      >
        <h2>📅 Jour {day}</h2>

        {selected ? (
          <>
            <div className="modal-section">
              <h3>💧 Hydratation</h3>
              <p>{selected.water} / 8 verres</p>
            </div>

            <div className="modal-section">
              <h3>😊 Humeur</h3>
              <p>{moods[selected.mood]}</p>
            </div>

            <div className="modal-section">
              <h3>🏋️ Séance</h3>
              <p>
                {selected.workoutDone
                  ? "✅ Effectuée"
                  : "❌ Non effectuée"}
              </p>
            </div>

            <div className="modal-section">
              <h3>📝 Notes</h3>
              <p>{selected.notes}</p>
            </div>
          </>
        ) : (
          <>
            <p>Aucune donnée enregistrée pour cette journée.</p>
          </>
        )}

        <button
          className="modal-button"
          onClick={onClose}
        >
          Fermer
        </button>
      </div>
    </div>
  );
}
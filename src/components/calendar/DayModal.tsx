import { useContext } from "react";

import "../../styles/DayModal.css";

import { AppContext } from "../../context/AppContext";

import HydrationEditor from "../day/HydrationEditor";
import MoodEditor from "../day/MoodEditor";

type Props = {
  day: number | null;
  onClose: () => void;
};

export default function DayModal({
  day,
  onClose,
}: Props) {
  const { days } = useContext(AppContext);

  if (day === null) {
    return null;
  }

  const selected = days.find(
    (item) =>
      Number(item.date.split("-")[2]) === day
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

              <HydrationEditor
                date={selected.date}
                water={selected.water}
              />
            </div>

            <div className="modal-section">
              <h3>😊 Humeur</h3>

              <MoodEditor
                date={selected.date}
                mood={selected.mood}
              />
            </div>

            <div className="modal-section">
              <h3>🏋️ Séance</h3>

              <label className="workout-label">
                <input
                  type="checkbox"
                  checked={selected.workoutDone}
                  readOnly
                />

                Séance effectuée
              </label>
            </div>

            <div className="modal-section">
              <h3>📝 Notes</h3>

              <textarea
                rows={5}
                defaultValue={selected.notes}
                placeholder="Écris une note..."
              />
            </div>
          </>
        ) : (
          <>
            <p>Aucune donnée pour cette journée.</p>

            <div className="modal-section">
              <h3>💧 Hydratation</h3>

              <HydrationEditor
                date=""
                water={0}
              />
            </div>

            <div className="modal-section">
              <h3>😊 Humeur</h3>

              <MoodEditor
                date=""
                mood={2}
              />
            </div>

            <div className="modal-section">
              <h3>📝 Notes</h3>

              <textarea
                rows={5}
                placeholder="Écris une note..."
              />
            </div>
          </>
        )}

        <button
          className="modal-button"
          onClick={onClose}
        >
          💾 Enregistrer
        </button>
      </div>
    </div>
  );
}
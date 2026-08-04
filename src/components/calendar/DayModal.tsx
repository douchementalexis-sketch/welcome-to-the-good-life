import { useContext } from "react";

import { AppContext } from "../../context/AppContext";

import "../../styles/DayModal.css";


type Props = {
  date: Date | null;
  onClose: () => void;
};


export default function DayModal({
  date,
  onClose,
}: Props) {


  const { days } = useContext(AppContext);


  if (!date) return null;



  // Date locale (évite le décalage UTC de toISOString)
  const dateKey =
    `${date.getFullYear()}-${String(
      date.getMonth() + 1
    ).padStart(2, "0")}-${String(
      date.getDate()
    ).padStart(2, "0")}`;



  const dayData = days.find(
    (d) => d.date === dateKey
  );



  return (

    <div

      className="modal-overlay"

      onClick={onClose}

    >


      <div

        className="modal"

        onClick={(e) =>
          e.stopPropagation()
        }

      >


        <button

          className="modal-close"

          onClick={onClose}

        >

          ✕

        </button>



        <h2>

          {date.toLocaleDateString(
            "fr-FR",
            {
              weekday: "long",
              day: "numeric",
              month: "long",
              year: "numeric",
            }
          )}

        </h2>




        {!dayData ? (

          <div className="empty-day">

            <p>
              Aucune donnée enregistrée.
            </p>

          </div>


        ) : (


          <div className="modal-content">



            <div className="modal-item">

              <strong>
                💧 Eau
              </strong>

              <span>
                {dayData.water} verres
              </span>

            </div>




            <div className="modal-item">

              <strong>
                😀 Humeur
              </strong>

              <span>
                {dayData.mood}/5
              </span>

            </div>




            <div className="modal-item">

              <strong>
                🏋️ Séance
              </strong>

              <span>

                {dayData.workoutDone

                  ? "Terminée ✅"

                  : "Non réalisée ❌"

                }

              </span>

            </div>




            <div className="modal-item">

              <strong>
                💪 Exercices réalisés
              </strong>

              <span>
                {
                  dayData.completedExercises?.length ?? 0
                }
              </span>

            </div>




            <div className="modal-item">

              <strong>
                📝 Notes
              </strong>


              <p>

                {
                  dayData.notes?.trim()

                  ? dayData.notes

                  : "Aucune note"

                }

              </p>


            </div>



          </div>

        )}


      </div>


    </div>

  );

}
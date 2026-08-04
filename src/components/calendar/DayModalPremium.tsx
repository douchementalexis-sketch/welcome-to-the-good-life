import { useContext } from "react";

import {
  Droplets,
  Smile,
  Dumbbell,
  NotebookPen,
  CheckCircle2,
  Circle,
  X,
} from "lucide-react";

import {
  AppContext,
} from "../../context/AppContext";

import {
  workouts,
} from "../../data/programs";

import "../../styles/DayModalPremium.css";


type Props = {

  date: Date | null;

  onClose: () => void;

};



export default function DayModalPremium({

  date,

  onClose,

}: Props) {



  const {
    days,
  } = useContext(AppContext);




  console.log(
    "DAYS CONTEXT MODAL :",
    days
  );




  if (!date) return null;





  const dateKey =

    `${date.getFullYear()}-${String(

      date.getMonth() + 1

    ).padStart(2,"0")}-${String(

      date.getDate()

    ).padStart(2,"0")}`;





  const dayData =

    days.find(

      (d) => d.date === dateKey

    );





  const weekDay =

    date.getDay();





  const schedule: Record<number,string> = {


    1:"fullBodyA",

    2:"cardio",

    3:"fullBodyB",

    4:"rest",

    5:"fullBodyC",

    6:"cardio",

    0:"rest",


  };





  const workout =

    workouts[schedule[weekDay]];






  function moodText(){


    if(!dayData) return "";



    switch(dayData.mood){


      case 5:
        return "Excellent";


      case 4:
        return "Très bien";


      case 3:
        return "Correct";


      case 2:
        return "Fatigué";


      default:
        return "Difficile";


    }

  }







  return (


    <div

      className="premium-modal-overlay"

      onClick={onClose}

    >



      <div

        className="premium-modal"

        onClick={(e)=>

          e.stopPropagation()

        }

      >



        <button

          className="premium-close"

          onClick={onClose}

          type="button"

        >

          <X size={18}/>

        </button>





        <h2>


          {date.toLocaleDateString(

            "fr-FR",

            {

              weekday:"long",

              day:"numeric",

              month:"long",

              year:"numeric",

            }

          )}


        </h2>







        {!dayData ? (


          <div className="premium-empty">


            <p>

              Cette journée n'existe pas encore.

            </p>


            <small>

              Elle sera créée automatiquement.

            </small>


          </div>



        ) : (


          <>


            <div className="premium-card">


              <span>

                <Droplets size={22}/>

              </span>


              <div>

                <strong>
                  Hydratation
                </strong>


                <p>

                  {dayData.water} / 8 verres

                </p>


              </div>


            </div>






            <div className="premium-card">


              <span>

                <Smile size={22}/>

              </span>


              <div>


                <strong>
                  Humeur
                </strong>


                <p>

                  {moodText()}

                </p>


              </div>


            </div>






            <div className="premium-card">


              <span>

                <Dumbbell size={22}/>

              </span>


              <div>


                <strong>
                  Séance du jour
                </strong>


                <p>

                  {workout.title}

                </p>


              </div>


            </div>







            <div className="premium-card">


              <span>


                {dayData.workoutDone ? (


                  <CheckCircle2 size={22}/>


                ) : (


                  <Circle size={22}/>


                )}


              </span>



              <div>


                <strong>
                  Statut
                </strong>


                <p>


                  {dayData.workoutDone

                    ? "Séance terminée"

                    : "À réaliser"

                  }


                </p>


              </div>


            </div>







            <div className="premium-card">


              <span>

                <NotebookPen size={22}/>

              </span>



              <div>


                <strong>
                  Notes
                </strong>


                <p>


                  {dayData.notes?.trim()

                    ? dayData.notes

                    : "Aucune note"

                  }


                </p>


              </div>


            </div>








            <div className="premium-card">


              <span>

                <Dumbbell size={22}/>

              </span>



              <div className="program-container">


                <strong>

                  Programme du jour

                </strong>




                <div className="exercise-list">


                  {workout.exercises.map(

                    (exercise)=>(


                    <div

                      key={exercise}

                      className="exercise-item"

                    >



                      <div className="exercise-icon">


                        <CheckCircle2 size={14}/>


                      </div>




                      <span className="exercise-text">

                        {exercise}

                      </span>



                    </div>


                  ))}


                </div>



              </div>



            </div>



          </>


        )}



      </div>



    </div>


  );

}
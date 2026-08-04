import {
  useContext,
} from "react";

import {
  useNavigate,
} from "react-router-dom";


import {
  AppContext,
} from "../../context/AppContext";


import {
  getTodayDate,
} from "../../utils/date";


import {
  getWorkout,
} from "../../utils/getWorkout";


import "../../styles/TodayWorkout.css";



export default function TodayWorkout() {


  const navigate = useNavigate();



  const {
    days,
    updateDay,
  } = useContext(AppContext);



  const today =
    getTodayDate();



  const workout =
    getWorkout(today);




  const current =
    days.find(
      (day) =>
        day.date === today
    );





  const completed =
    current?.completedExercises?.length ?? 0;




  const total =
    workout.exercises.length;




  const progress =
    total === 0
      ? 0
      : Math.round(
          (completed / total) * 100
        );





  const finished =
    current?.workoutDone ?? false;







  function handleSaveWorkout(){


    updateDay(

      today,

      {

        workoutDone:true,

      }

    );


  }









  return (



    <div className="today-workout">



      <div className="today-top">



        <div>



          <div className="today-badge">

            SÉANCE DU JOUR

          </div>




          <h1>

            {workout.icon} {workout.title}

          </h1>




          <p>

            Programme personnalisé Rachel 💚

          </p>



        </div>



      </div>







      <div className="today-infos">



        <div className="info-card">



          <span>⏱</span>



          <div>


            <strong>

              45 min

            </strong>


            <small>

              Durée

            </small>


          </div>



        </div>





        <div className="info-card">



          <span>💪</span>



          <div>


            <strong>

              {total}

            </strong>


            <small>

              Exercices

            </small>


          </div>



        </div>



      </div>







      <div className="today-progress">



        <div className="progress-header">


          <span>

            Progression

          </span>



          <span>

            {completed}/{total}

          </span>



        </div>




        <div className="progress-bar">


          <div

            className="progress-fill"

            style={{

              width:`${progress}%`,

            }}

          />

        </div>



      </div>







      <button

        className="today-button"

        onClick={()=>navigate("/workout")}

      >

        ▶ Commencer la séance

      </button>







      <button

        onClick={handleSaveWorkout}

        style={{

          marginTop:12,

          width:"100%",

          padding:"12px",

          borderRadius:12,

          border:"none",

          background:"#355F4B",

          color:"#fff",

          cursor:"pointer",

          fontSize:16,

        }}

      >

        {finished

          ? "✅ Séance enregistrée"

          : "💾 Enregistrer la séance"

        }


      </button>





    </div>



  );


}
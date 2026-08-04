import {
  useContext,
} from "react";


import {
  AppContext,
} from "../context/AppContext";


import {
  ArrowLeft,
  Droplets,
  Smile,
  Dumbbell,
  NotebookPen,
} from "lucide-react";




export default function ClientFollowUp(){


  const {
    days,
  } = useContext(AppContext);





  return (

    <div

      style={{

        minHeight:"100vh",

        padding:30,

        background:"#f7f7f2",

      }}

    >



      <button

        onClick={() =>
          window.history.back()
        }

        style={{

          border:"none",

          background:"transparent",

          cursor:"pointer",

          fontSize:16,

        }}

      >

        <ArrowLeft size={18}/>

        Retour

      </button>





      <h1

        style={{

          color:"#355F4B",

        }}

      >

        🌸 Suivi de Rachel

      </h1>




      <p>

        Consultation coach - lecture seule 👀

      </p>







      {
        days.length === 0 ? (


          <div

            style={{

              background:"#fff",

              padding:20,

              borderRadius:20,

              marginTop:30,

            }}

          >

            Aucune donnée disponible.

          </div>



        ) : (


          days.map((day)=>(


            <div

              key={day.date}

              style={{

                background:"#fff",

                padding:20,

                borderRadius:20,

                marginTop:20,

              }}

            >



              <h2>

                📅 {day.date}

              </h2>




              <p>

                <Droplets size={18}/>

                💧 Eau : {day.water}/8

              </p>




              <p>

                <Smile size={18}/>

                😊 Humeur : {day.mood}

              </p>




              <p>

                <Dumbbell size={18}/>

                🏋️ Séance :

                {
                  day.workoutDone

                  ? " Terminée ✅"

                  : " À faire"

                }

              </p>




              <p>

                <NotebookPen size={18}/>

                📝

                {
                  day.notes

                  ? day.notes

                  : " Aucune note"

                }

              </p>



            </div>


          ))

        )

      }




    </div>

  );

}
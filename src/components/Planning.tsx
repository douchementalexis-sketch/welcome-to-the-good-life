import "../styles/Planning.css";

import { getTodayDate } from "../utils/date";
import { getWorkout } from "../utils/getWorkout";


export default function Planning() {


  const today =
    new Date(getTodayDate());



  const upcoming = [];



  for (let i = 1; i <= 5; i++) {


    const nextDate =
      new Date(today);


    nextDate.setDate(
      today.getDate() + i
    );



    const dateString =
      nextDate.toISOString().split("T")[0];



    const workout =
      getWorkout(dateString);



    upcoming.push({

      id:i,

      day:
        nextDate.toLocaleDateString(
          "fr-FR",
          {
            weekday:"long"
          }
        ),


      title:
        workout.title,


      icon:
        workout.icon,


      hour:
        workout.id === "rest"
          ? "-"
          : "18h30",


      duration:
        workout.id === "rest"
          ? "-"
          : "45 min",


      type:
        workout.id,

    });


  }





  function getColor(type:string) {


    if(type === "cardio") {

      return "cardio";

    }


    if(type === "rest") {

      return "rest";

    }


    return "strength";


  }







  return (


    <div className="planning">



      {upcoming.map((session)=>(


        <div

          key={session.id}

          className={`planning-card ${getColor(session.type)}`}

        >



          <div className="planning-left">



            <div className="planning-icon">

              {session.icon}

            </div>



            <div>



              <div className="planning-day">

                {session.day.charAt(0).toUpperCase() +
                 session.day.slice(1)}

              </div>



              <div className="planning-title">

                {session.title}

              </div>



            </div>



          </div>





          <div className="planning-right">


            <span>

              {session.hour}

            </span>



            <small>

              {session.duration}

            </small>



          </div>



        </div>



      ))}



    </div>


  );


}
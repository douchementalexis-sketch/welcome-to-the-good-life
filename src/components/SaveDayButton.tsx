import {
  useContext,
  useState,
} from "react";


import {
  AppContext,
} from "../context/AppContext";


import {
  getTodayDate,
} from "../utils/date";



export default function SaveDayButton(){



  const {
    days,
    updateDay,
  } = useContext(AppContext);




  const today =
    getTodayDate();




  const current =
    days.find(
      (day)=>day.date===today
    );




  const [
    saved,
    setSaved,
  ] = useState(false);






  function handleSave(){


    updateDay(

      today,

      {

        water:
          current?.water ?? 0,


        mood:
          current?.mood ?? 0,


        notes:
          current?.notes ?? "",


        workoutDone:
          current?.workoutDone ?? false,


      }

    );




    setSaved(true);




    setTimeout(()=>{

      setSaved(false);

    },2000);


  }







  return (


    <button

      onClick={handleSave}

      style={{

        width:"100%",

        marginTop:25,

        marginBottom:25,

        padding:"16px",

        borderRadius:15,

        border:"none",

        background:

          saved

          ? "#4CAF50"

          : "#355F4B",


        color:"#fff",

        fontSize:17,

        fontWeight:"bold",

        cursor:"pointer",

      }}

    >


      {

        saved

        ? "✅ Journée enregistrée"

        : "💾 Enregistrer ma journée"

      }


    </button>


  );

}
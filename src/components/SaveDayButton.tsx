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
      (day) => day.date === today
    );



  const [
    saved,
    setSaved,
  ] = useState(false);




  async function handleSave(){


    await updateDay(

      today,

      {

        water:
          current?.water ?? 0,


        mood:
          current?.mood ?? 2,


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


    <div

      style={{

        marginTop:25,

        marginBottom:30,

      }}

    >



      <button

        onClick={handleSave}

        style={{

          width:"100%",

          padding:"16px",

          borderRadius:"15px",

          border:"none",

          background:"#355F4B",

          color:"white",

          fontSize:"17px",

          fontWeight:"bold",

          cursor:"pointer",

        }}

      >

        💾 Enregistrer ma journée

      </button>





      {
        saved &&

        <p

          style={{

            textAlign:"center",

            color:"#355F4B",

            marginTop:12,

            fontWeight:"bold",

          }}

        >

          ✅ Journée enregistrée

        </p>

      }



    </div>


  );

}
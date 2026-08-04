import { useContext } from "react";
import { useNavigate } from "react-router-dom";

import BottomNavigation from "../components/BottomNavigation";
import WorkoutProgram from "../components/workout/WorkoutProgram";

import { AppContext } from "../context/AppContext";
import { getTodayDate } from "../utils/date";

import "./Home.css";


export default function WorkoutSession() {


  const navigate = useNavigate();


  const { days } = useContext(AppContext);


  const today = getTodayDate();


  const current = days.find(
    (day) => day.date === today
  );


  const finished =
    current?.workoutDone ?? false;



  return (

    <div className="home">


      <div className="hero">


        <button

          onClick={() => navigate("/")}

          style={{
            marginBottom: 20,
            border: "none",
            background: "transparent",
            color: "#355F4B",
            fontSize: 16,
            fontWeight: 700,
            cursor: "pointer",
          }}

        >

          ← Retour à l'accueil

        </button>




        <h1

          style={{
            color:"#355F4B",
            marginBottom:8,
          }}

        >

          🏋️ Séance du jour

        </h1>




        <p

          style={{
            color:"#666",
            marginBottom:20,
          }}

        >

          Coche chaque exercice au fur et à mesure 💪

        </p>




        <WorkoutProgram

          date={today}

        />





        {finished && (


          <div

            style={{
              marginTop:30,
              background:"#E8F5E9",
              borderRadius:18,
              padding:20,
              textAlign:"center",
            }}

          >


            <h2

              style={{
                marginTop:0,
                color:"#2E7D32",
              }}

            >

              🎉 Bravo Rachel !

            </h2>




            <p

              style={{
                marginBottom:20,
              }}

            >

              Tu as terminé ta séance du jour 💪

            </p>




            <button

              onClick={() => navigate("/")}

              style={{
                background:"#355F4B",
                color:"white",
                border:"none",
                borderRadius:14,
                padding:"14px 22px",
                cursor:"pointer",
                fontWeight:700,
              }}

            >

              🏠 Retour à l'accueil

            </button>



          </div>


        )}



      </div>




      <BottomNavigation />


    </div>

  );

}
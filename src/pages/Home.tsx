import "./Home.css";

import { useContext } from "react";

import HomeHero from "../components/home/HomeHero";
import TodayWorkout from "../components/home/TodayWorkout";

import Card from "../components/Card";
import Planning from "../components/Planning";
import Hydration from "../components/Hydration";
import Mood from "../components/Mood";
import Sleep from "../components/Sleep";
import WorkoutStat from "../components/WorkoutStat";
import Notes from "../components/Notes";
import BottomNavigation from "../components/BottomNavigation";

import {
  AppContext,
} from "../context/AppContext";

import {
  getTodayDate,
} from "../utils/date";

export default function Home() {

  const {
    days,
    updateDay,
  } = useContext(AppContext);

  const today =
    getTodayDate();

  const current =
    days.find(
      day => day.date === today
    );

  const validated =
    current?.dayValidated ?? false;

  function handleValidate(){

    if(validated) return;

    updateDay(
      today,
      {
        dayValidated:true,
      }
    );

  }

  return(

    <div className="home">

      <div className="hero">

        <HomeHero />

        <TodayWorkout />

        <Card title="📅 Planning de la semaine">

          <Planning />

        </Card>

        <div className="homeGrid">

          <Card title="💧 Hydratation">

            <Hydration />

          </Card>

          <Card title="😊 Humeur">

            <Mood />

          </Card>

          <Card title="💪 Séances">

            <WorkoutStat />

          </Card>

          <Card title="🌙 Sommeil">

            <Sleep />

          </Card>

        </div>

        <Card title="📝 Notes du jour">

          <Notes />

        </Card>

        <button

          onClick={handleValidate}

          disabled={validated}

          style={{

            width:"100%",

            marginTop:24,

            marginBottom:40,

            padding:"18px",

            border:"none",

            borderRadius:"18px",

            background:
              validated
                ? "#4CAF50"
                : "#355F4B",

            color:"#fff",

            fontSize:18,

            fontWeight:700,

            cursor:
              validated
                ? "default"
                : "pointer",

            transition:".25s",

          }}

        >

          {

            validated

              ? "✅ Journée validée"

              : "💾 Enregistrer ma journée"

          }

        </button>

      </div>

      <BottomNavigation />

    </div>

  );

}
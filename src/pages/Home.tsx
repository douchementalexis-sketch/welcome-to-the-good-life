import "./Home.css";

import {
  useContext,
} from "react";

import Header from "../components/Header";
import Card from "../components/Card";
import Stats from "../components/Stats";
import Planning from "../components/Planning";
import Hydration from "../components/Hydration";
import Mood from "../components/Mood";
import Notes from "../components/Notes";
import BottomNavigation from "../components/BottomNavigation";

import TodayWorkout from "../components/home/TodayWorkout";

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
      (day) =>
        day.date === today
    );

  const validated =
    current?.dayValidated ?? false;

  function handleValidate() {

    if (validated) return;

    updateDay(
      today,
      {
        dayValidated: true,
      }
    );

  }

  return (

    <div className="home">

      <div className="hero">

        <Header />

        <Stats />

        <Card title="🌸 Bonjour Rachel">

          <div

            style={{

              textAlign:"center",

              marginBottom:24,

            }}

          >

            <h2

              style={{

                margin:0,

                color:"#355F4B",

                fontSize:30,

              }}

            >

              Aujourd'hui

            </h2>

            <p

              style={{

                marginTop:8,

                color:"#666",

                fontSize:16,

              }}

            >

              Chaque petite victoire compte 💚

            </p>

          </div>

          <TodayWorkout />

        </Card>

        <Card title="📅 Planning de la semaine">

          <Planning />

        </Card>

        <div

          style={{

            display:"grid",

            gridTemplateColumns:"1fr 1fr",

            gap:24,

            marginBottom:24,

          }}

        >

          <Card title="💧 Hydratation">

            <Hydration />

          </Card>

          <Card title="😊 Humeur">

            <Mood />

          </Card>

        </div>

        <Card title="📝 Notes du jour">

          <Notes />

        </Card>        <button

          onClick={handleValidate}

          disabled={validated}

          style={{

            width:"100%",

            marginTop:24,

            marginBottom:40,

            padding:"18px",

            border:"none",

            borderRadius:"16px",

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

            transition:"0.2s",

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
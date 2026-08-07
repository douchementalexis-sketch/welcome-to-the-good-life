import "./Home.css";

import { useContext } from "react";

import Header from "../components/Header";
import Card from "../components/Card";
import Stats from "../components/Stats";
import Planning from "../components/Planning";
import Hydration from "../components/Hydration";
import Mood from "../components/Mood";
import Notes from "../components/Notes";
import BottomNavigation from "../components/BottomNavigation";

import HeroBanner from "../components/home/HeroBanner";

import { AppContext } from "../context/AppContext";
import { getTodayDate } from "../utils/date";

export default function Home() {

  const {
    days,
    updateDay,
  } = useContext(AppContext);

  const today = getTodayDate();

  const current = days.find(
    (day) => day.date === today
  );

  const validated =
    current?.dayValidated ?? false;

  function handleValidate() {

    if (validated) return;

    updateDay(today, {
      dayValidated: true,
    });

  }

  return (

    <div className="home">

      <div className="hero">

        <Header />

        <Stats />

        <HeroBanner firstName="Rachel" />

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

        </div>

        <Card title="📝 Notes du jour">
          <Notes />
        </Card>

        <button
          onClick={handleValidate}
          disabled={validated}
          style={{
            width: "100%",
            marginTop: 24,
            marginBottom: 40,
            padding: "18px",
            border: "none",
            borderRadius: "16px",
            background: validated ? "#4CAF50" : "#355F4B",
            color: "#fff",
            fontSize: 18,
            fontWeight: 700,
            cursor: validated ? "default" : "pointer",
            transition: "0.2s",
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
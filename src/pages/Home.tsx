import "./Home.css";

import { useState } from "react";

import Header from "../components/Header";
import Card from "../components/Card";
import Stats from "../components/Stats";
import Planning from "../components/Planning";
import Hydration from "../components/Hydration";
import Mood from "../components/Mood";
import Notes from "../components/Notes";
import SaveDayButton from "../components/SaveDayButton";
import BottomNavigation from "../components/BottomNavigation";

import Workout from "./Workout";

export default function Home() {

  const [saved, setSaved] = useState(false);

  function handleSave() {

    setSaved(true);

    setTimeout(() => {
      setSaved(false);
    }, 2000);

  }

  return (
    <div className="home">

      <div className="hero">

        <Header />

        <Stats />

        <Card title="☀️ Bonjour Rachel">
          <p
            className="message"
            style={{
              fontSize: 18,
              lineHeight: 1.6,
              textAlign: "center",
              margin: 0,
            }}
          >
            Passe une excellente journée ❤️
          </p>
        </Card>

        <Card title="🏋️ Séance du jour">
          <Workout />
        </Card>

        <Card title="📅 À venir">
          <Planning />
        </Card>

        <Card title="💧 Hydratation">
          <Hydration />
        </Card>

        <Card title="😊 Humeur du jour">
          <Mood />
        </Card>

        <Card title="📝 Notes du jour">
          <Notes />
        </Card>

        <SaveDayButton
          onClick={handleSave}
        />

        {saved && (
          <p
            style={{
              textAlign: "center",
              marginTop: 12,
              color: "green",
              fontWeight: 700,
            }}
          >
            ✅ Journée enregistrée !
          </p>
        )}

        <BottomNavigation />

      </div>

    </div>
  );
}
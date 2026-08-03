import "./Home.css";

import Header from "../components/Header";
import Card from "../components/Card";
import Stats from "../components/Stats";
import Planning from "../components/Planning";
import Hydration from "../components/Hydration";
import Mood from "../components/Mood";
import Notes from "../components/Notes";
import BottomNavigation from "../components/BottomNavigation";

import Workout from "./Workout";

export default function Home() {
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

        <BottomNavigation />

      </div>
    </div>
  );
}
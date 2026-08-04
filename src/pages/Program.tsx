import BottomNavigation from "../components/BottomNavigation";
import WorkoutProgram from "../components/workout/WorkoutProgram";

import "../styles/Home.css";

export default function Program() {

  const today = new Date();

  const date = today.toISOString().split("T")[0];

  return (
    <div className="home">

      <div className="hero">

        <h1
          style={{
            marginBottom: "30px",
            color: "#355F4B",
          }}
        >
          💪 Programme de Rachel
        </h1>

        <WorkoutProgram date={date} />

      </div>

      <BottomNavigation />

    </div>
  );
}
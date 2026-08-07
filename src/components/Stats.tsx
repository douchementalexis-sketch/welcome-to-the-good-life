import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import { getTodayDate } from "../utils/date";

import "../styles/Stats.css";

const moods = [
  { emoji: "😞", text: "Difficile" },
  { emoji: "😐", text: "Moyenne" },
  { emoji: "🙂", text: "Bien" },
  { emoji: "😁", text: "Très bien" },
  { emoji: "🤩", text: "Au top" },
];

export default function Stats() {

  const { days } = useContext(AppContext);

  const today = getTodayDate();

  const current =
    days.find((day) => day.date === today) ?? {
      water: 0,
      mood: 2,
      workoutDone: false,
    };

  const completedWorkouts =
    days.filter((day) => day.workoutDone).length;

  const waterPercent =
    Math.round((current.water / 8) * 100);

  return (

    <section className="stats">

      <div className="statsHeader">

        <div>

          <span className="statsOverline">

            TABLEAU DE BORD

          </span>

          <h2>

            Aujourd'hui en un coup d'œil

          </h2>

        </div>

      </div>

      <div className="statsGrid">

        <article className="statsCard hydration">

          <div className="statsIcon">
            💧
          </div>

          <div className="statsContent">

            <span className="statsLabel">
              Hydratation
            </span>

            <strong>
              {current.water}/8 verres
            </strong>

            <small>
              {waterPercent}% de l'objectif
            </small>

          </div>

        </article>

        <article className="statsCard workout">

          <div className="statsIcon">
            🏋️
          </div>

          <div className="statsContent">

            <span className="statsLabel">
              Séances
            </span>

            <strong>
              {completedWorkouts}
            </strong>

            <small>
              réalisées
            </small>

          </div>

        </article>

        <article className="statsCard mood">

          <div className="statsIcon">
            {moods[current.mood].emoji}
          </div>

          <div className="statsContent">

            <span className="statsLabel">
              Humeur
            </span>

            <strong>
              {moods[current.mood].text}
            </strong>

            <small>
              aujourd'hui
            </small>

          </div>

        </article>

        <article className="statsCard streak">

          <div className="statsIcon">
            🔥
          </div>

          <div className="statsContent">

            <span className="statsLabel">
              Série
            </span>

            <strong>
              0 jour
            </strong>

            <small>
              bientôt disponible
            </small>

          </div>

        </article>

      </div>

    </section>

  );

}
import "./HeroBanner.css";

import TodayWorkout from "./TodayWorkout";

interface HeroBannerProps {
  firstName: string;
}

export default function HeroBanner({
  firstName,
}: HeroBannerProps) {
  const today = new Date();

  const date = today.toLocaleDateString("fr-FR", {
    weekday: "long",
    day: "numeric",
    month: "long",
  });

  const hour = today.getHours();

  const greeting =
    hour < 12
      ? "Bonjour"
      : hour < 18
      ? "Bon après-midi"
      : "Bonsoir";

  return (
    <section className="heroBanner">
      <div className="heroBanner__background" />

      <div className="heroBanner__content">

        <span className="heroBanner__date">
          {date}
        </span>

        <h1 className="heroBanner__title">
          {greeting}
          <br />
          <span>{firstName} 💚</span>
        </h1>

        <p className="heroBanner__subtitle">
          Chaque petite victoire te rapproche de la meilleure version de toi.
        </p>

        <div className="heroBanner__actions">
          <button className="heroBanner__primary">
            Continuer ma journée
          </button>

          <button className="heroBanner__secondary">
            Objectifs
          </button>
        </div>

      </div>

      <div className="heroBanner__workout">
        <TodayWorkout />
      </div>
    </section>
  );
}
import "./Statistics.css";

import BottomNavigation from "../components/BottomNavigation";

export default function Statistics() {

  const height = 1.62;

  const currentWeight = 67;

  const goalWeight = 60;

  const remaining =
    currentWeight - goalWeight;

  const progress = Math.round(

    ((67 - currentWeight) /

    (67 - goalWeight || 1))

    * 100

  );

  return (

    <div className="statistics">

      <h1>

        📊 Statistiques

      </h1>

      <div className="weight-card">

        <div className="weight-icon">

          ⚖️

        </div>

        <div className="weight-value">

          {currentWeight.toFixed(1)} kg

        </div>

        <div className="weight-target">

          Objectif :

          {goalWeight.toFixed(1)} kg

        </div>

        <div className="progress-bar">

          <div

            className="progress-fill"

            style={{

              width:`${progress}%`

            }}

          />

        </div>

        <div className="progress-text">

          {progress}% de l'objectif

        </div>

      </div>      <div className="stats-card">

        <h2>

          👤 Mon évolution

        </h2>

        <div className="stats-row">

          <span>

            📏 Taille

          </span>

          <strong>

            {height.toFixed(2)} m

          </strong>

        </div>

        <div className="stats-row">

          <span>

            ⚖️ Poids actuel

          </span>

          <strong>

            {currentWeight.toFixed(1)} kg

          </strong>

        </div>

        <div className="stats-row">

          <span>

            🎯 Objectif

          </span>

          <strong>

            {goalWeight.toFixed(1)} kg

          </strong>

        </div>

        <div className="stats-row">

          <span>

            ⬇️ Reste à perdre

          </span>

          <strong>

            {remaining.toFixed(1)} kg

          </strong>

        </div>

      </div>

      <div className="stats-card">

        <h2>

          🏆 Activité

        </h2>

        <div className="stats-row">

          <span>

            🌸 Journées validées

          </span>

          <strong>

            0

          </strong>

        </div>

        <div className="stats-row">

          <span>

            🏋️ Séances réalisées

          </span>

          <strong>

            0

          </strong>

        </div>

        <div className="stats-row">

          <span>

            💧 Verres bus

          </span>

          <strong>

            0

          </strong>

        </div>

      </div>      <div className="stats-card">

        <h2>

          😊 Bien-être

        </h2>

        <div className="stats-row">

          <span>

            😊 Humeur moyenne

          </span>

          <strong>

            😁

          </strong>

        </div>

        <div className="stats-row">

          <span>

            💧 Hydratation moyenne

          </span>

          <strong>

            0 / 8

          </strong>

        </div>

        <div className="stats-row">

          <span>

            📝 Notes enregistrées

          </span>

          <strong>

            0

          </strong>

        </div>

      </div>





      <div className="stats-card">

        <h2>

          📈 Évolution du poids

        </h2>

        <p className="coming-soon">

          🚧 Le graphique arrivera bientôt.

        </p>

      </div>





      <div className="stats-card">

        <h2>

          🔥 Série actuelle

        </h2>

        <p className="coming-soon">

          🚧 Les séries de journées validées arrivent bientôt.

        </p>

      </div>      <div className="stats-card">

        <h2>

          🏅 Badges

        </h2>

        <p className="coming-soon">

          🚧 Les badges seront bientôt disponibles.

        </p>

      </div>

      <BottomNavigation />

    </div>

  );

}
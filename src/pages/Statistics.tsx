import {
  useContext,
} from "react";

import "./Statistics.css";

import BottomNavigation
from "../components/BottomNavigation";

import {
  AuthContext,
} from "../context/AuthContext";

import {
  AppContext,
} from "../context/AppContext";

export default function Statistics() {

  const {

    height,

    currentWeight,

    goalWeight,

  } = useContext(AuthContext);

  const {

    days,

  } = useContext(AppContext);

  const current =
    currentWeight ?? 0;

  const goal =
    goalWeight ?? 0;

  const userHeight =
    height ?? 0;

  const remaining =
    Math.max(
      current - goal,
      0
    );

  const progress =
    current <= goal
      ? 100
      : 0;

  const validatedDays =
    days.filter(
      day =>
        day.dayValidated
    ).length;

  const workouts =
    days.filter(
      day =>
        day.workoutDone
    ).length;

  const totalWater =
    days.reduce(

      (
        total,
        day
      ) =>

        total + day.water,

      0

    );

  const moodAverage =

    days.length

      ?

      (

        days.reduce(

          (
            total,
            day
          ) =>

            total + day.mood,

          0

        ) /

        days.length

      ).toFixed(1)

      :

      "0";

  const notesCount =

    days.filter(

      day =>

        day.notes.trim() !== ""

    ).length;

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

          {current.toFixed(1)} kg

        </div>

        <div className="weight-target">

          Objectif :

          {goal.toFixed(1)} kg

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

            {userHeight.toFixed(2)} m

          </strong>

        </div>

        <div className="stats-row">

          <span>

            ⚖️ Poids actuel

          </span>

          <strong>

            {current.toFixed(1)} kg

          </strong>

        </div>

        <div className="stats-row">

          <span>

            🎯 Objectif

          </span>

          <strong>

            {goal.toFixed(1)} kg

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

            {validatedDays}

          </strong>

        </div>

        <div className="stats-row">

          <span>

            🏋️ Séances réalisées

          </span>

          <strong>

            {workouts}

          </strong>

        </div>

        <div className="stats-row">

          <span>

            💧 Verres bus

          </span>

          <strong>

            {totalWater}

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

            {moodAverage} / 4

          </strong>

        </div>

        <div className="stats-row">

          <span>

            💧 Total des verres

          </span>

          <strong>

            {totalWater}

          </strong>

        </div>

        <div className="stats-row">

          <span>

            📝 Notes enregistrées

          </span>

          <strong>

            {notesCount}

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

          🚧 Les séries de journées validées arriveront bientôt.

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
import {
  useContext,
} from "react";

import {
  AppContext,
} from "../context/AppContext";

import {
  getTodayDate,
} from "../utils/date";

import "../styles/Hydration.css";

export default function Hydration() {

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

  const water =
    current?.water ?? 0;

  const max = 8;

  const percentage =
    Math.round((water / max) * 100);

  function handleWater() {

    const next =
      water >= max
        ? 0
        : water + 1;

    updateDay(
      today,
      {
        water: next,
      }
    );

  }

  return (

    <div className="hydration">

      <div className="hydrationIcon">

        💧

      </div>

      <div className="hydrationValue">

        {water}/{max}

      </div>

      <div className="hydrationLabel">

        Hydratation

      </div>

      <div className="hydrationBar">

        <div

          className="hydrationProgress"

          style={{
            width:`${percentage}%`,
          }}

        />

      </div>

      <button

        className="hydrationButton"

        onClick={handleWater}

      >

        +1 verre

      </button>

    </div>

  );

}
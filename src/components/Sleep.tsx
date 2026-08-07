import {
  useContext,
} from "react";

import "../styles/Sleep.css";

import {
  AppContext,
} from "../context/AppContext";

import {
  getTodayDate,
} from "../utils/date";

export default function Sleep() {

  const {

    days,

    updateDay,

  } = useContext(AppContext);

  const today =
    getTodayDate();

  const current =
    days.find(
      day => day.date === today
    );

  const sleep =
    current?.sleep ?? 8;

  function selectSleep(hours:number){

    updateDay(

      today,

      {

        sleep:hours,

      }

    );

  }

  return (

    <div className="sleep">

      <div className="sleepIcon">

        🌙

      </div>

      <div className="sleepValue">

        {sleep} h

      </div>

      <div className="sleepLabel">

        Sommeil

      </div>

      <div className="sleepButtons">

        {[5,6,7,8,9].map(

          hour => (

            <button

              key={hour}

              className={

                sleep === hour

                ? "sleepButton active"

                : "sleepButton"

              }

              onClick={()=>

                selectSleep(hour)

              }

            >

              {hour} h

            </button>

          )

        )}

      </div>

    </div>

  );

}
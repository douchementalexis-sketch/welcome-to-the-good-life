import {
  useContext,
} from "react";

import {
  AppContext,
} from "../context/AppContext";

import {
  getTodayDate,
} from "../utils/date";

import "../styles/Mood.css";

const moods = [

  {
    emoji:"😞",
    text:"Difficile",
    value:20,
  },

  {
    emoji:"😐",
    text:"Moyenne",
    value:40,
  },

  {
    emoji:"🙂",
    text:"Bien",
    value:60,
  },

  {
    emoji:"😁",
    text:"Très bien",
    value:80,
  },

  {
    emoji:"🤩",
    text:"Au top",
    value:100,
  },

];

export default function Mood(){

  const{
    days,
    updateDay,
  }=useContext(AppContext);

  const today=
    getTodayDate();

  const current=
    days.find(
      day=>day.date===today
    );

  const moodIndex=
    current?.mood ?? 2;

  const currentMood=
    moods[moodIndex];

  function handleMood(index:number){

    updateDay(
      today,
      {
        mood:index,
      }
    );

  }

  return(

    <div className="mood">

      <div className="mood-emojis">

        {moods.map((item,index)=>(

          <span

            key={index}

            onClick={()=>
              handleMood(index)
            }

            className={
              `mood-emoji ${
                moodIndex===index
                  ? "active"
                  : ""
              }`
            }

          >

            {item.emoji}

          </span>

        ))}

      </div>

      <div className="mood-bar">

        <div

          className="mood-progress"

          style={{
            width:`${currentMood.value}%`,
          }}

        />

      </div>

      <div className="mood-percent">

        {currentMood.value}%

      </div>

      <div className="mood-text">

        {currentMood.emoji}

        <br/>

        {currentMood.text}

      </div>

    </div>

  );

}
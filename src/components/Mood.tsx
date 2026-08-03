import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import { getTodayDate } from "../utils/date";

import "../styles/Mood.css";

const moods = [
  { emoji: "😞", text: "Journée difficile", value: 20 },
  { emoji: "😐", text: "Ça va", value: 40 },
  { emoji: "🙂", text: "Je me sens bien", value: 60 },
  { emoji: "😁", text: "Très bonne journée", value: 80 },
  { emoji: "🤩", text: "Je suis au top !", value: 100 },
];

export default function Mood() {
  const { days, updateDay } = useContext(AppContext);

  const today = getTodayDate();

  const current =
    days.find((day) => day.date === today) ?? {
      mood: 2,
    };

  const currentMood = moods[current.mood];

  return (
    <div className="mood">

      <div className="mood-emojis">
        {moods.map((item, index) => (
          <span
            key={index}
            onClick={() =>
              updateDay(today, {
                mood: index,
              })
            }
            className={`mood-emoji ${
              current.mood === index ? "active" : ""
            }`}
          >
            {item.emoji}
          </span>
        ))}
      </div>

      <div className="mood-bar">
        <div
          className="mood-progress"
          style={{
            width: `${currentMood.value}%`,
          }}
        />
      </div>

      <div className="mood-percent">
        {currentMood.value} %
      </div>

      <div className="mood-text">
        {currentMood.emoji} {currentMood.text}
      </div>

    </div>
  );
}
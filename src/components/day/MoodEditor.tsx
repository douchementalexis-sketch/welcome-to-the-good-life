import { AppContext } from "../../context/AppContext";
import { useContext } from "react";

type Props = {
  date: string;
  mood: number;
};

const emojis = ["😞", "😐", "🙂", "😁", "🤩"];

export default function MoodEditor({
  date,
  mood,
}: Props) {

  const { updateDay } = useContext(AppContext);

  return (
    <div className="mood-editor">

      {emojis.map((emoji, index) => (

        <button
          key={index}
          className={`mood-button ${
            mood === index ? "selected" : ""
          }`}
          onClick={() =>
            updateDay(date, {
              mood: index,
            })
          }
        >
          {emoji}
        </button>

      ))}

    </div>
  );
}
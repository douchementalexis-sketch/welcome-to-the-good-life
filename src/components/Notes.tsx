import { useContext } from "react";

import { AppContext } from "../context/AppContext";
import { getTodayDate } from "../utils/date";

import "../styles/Notes.css";

export default function Notes() {

  const { days, updateDay } =
    useContext(AppContext);

  const today = getTodayDate();

  const current =
    days.find(
      (day) => day.date === today
    ) ?? {
      notes: "",
    };

  function handleChange(
    value: string
  ) {

    updateDay(today, {
      notes: value,
    });

  }

  return (
    <div className="notes">

      <textarea
        placeholder="Comment s'est passée ta journée ?"
        value={current.notes}
        onChange={(e) =>
          handleChange(e.target.value)
        }
      />

    </div>
  );

}
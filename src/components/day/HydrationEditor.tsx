import { useContext } from "react";
import { AppContext } from "../../context/AppContext";

type Props = {
  date: string;
  water: number;
};

export default function HydrationEditor({
  date,
  water,
}: Props) {
  const { updateDay } = useContext(AppContext);

  function increase() {
    if (water >= 8) return;

    updateDay(date, {
      water: water + 1,
    });
  }

  function decrease() {
    if (water <= 0) return;

    updateDay(date, {
      water: water - 1,
    });
  }

  return (
    <div className="editor-row">

      <button
        className="editor-button"
        onClick={decrease}
      >
        −
      </button>

      <div className="editor-value">
        💧 {water} / 8
      </div>

      <button
        className="editor-button"
        onClick={increase}
      >
        +
      </button>

    </div>
  );
}
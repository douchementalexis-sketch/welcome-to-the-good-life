import { useContext } from "react";
import { AppContext } from "../context/AppContext";

import "../styles/Hydration.css";

export default function Hydration() {
  const { water, setWater } = useContext(AppContext);

  const max = 8;
  const percentage = (water / max) * 100;

  const handleWater = () => {
    if (water >= max) {
      setWater(0);
    } else {
      setWater(water + 1);
    }
  };

  return (
    <div className="hydration">

      <div className="hydration-count">
        {water} / {max} verres
      </div>

      <div className="hydration-bar">
        <div
          className="hydration-progress"
          style={{ width: `${percentage}%` }}
        />
      </div>

      <button
        className="hydration-button"
        onClick={handleWater}
      >
        💧 Ajouter un verre
      </button>

    </div>
  );
}
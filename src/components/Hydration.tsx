import { useContext } from "react";
import { AppContext } from "../context/AppContext";

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
    <div>
      <p
        style={{
          textAlign: "center",
          fontSize: 18,
          fontWeight: "bold",
          color: "#355f4b",
          marginBottom: 18,
        }}
      >
        {water} / {max} verres
      </p>

      <div
        style={{
          width: "100%",
          height: 18,
          background: "#dfe9e2",
          borderRadius: 20,
          overflow: "hidden",
          marginBottom: 22,
        }}
      >
        <div
          style={{
            width: `${percentage}%`,
            height: "100%",
            background: "#4d7b62",
            transition: ".3s",
          }}
        />
      </div>

      <button
        style={{
          width: "100%",
          padding: "14px",
          border: "none",
          borderRadius: 12,
          background: "#4d7b62",
          color: "white",
          fontSize: 16,
          fontWeight: "bold",
          cursor: "pointer",
        }}
        onClick={handleWater}
      >
        💧 Ajouter un verre
      </button>
    </div>
  );
}
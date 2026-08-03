import { useContext } from "react";
import { AppContext } from "../context/AppContext";

export default function ResetDay() {
  const { resetDay } = useContext(AppContext);

  return (
    <button
      onClick={resetDay}
      style={{
        width: "100%",
        background: "#d35400",
        marginTop: "10px",
      }}
    >
      🌅 Nouvelle journée
    </button>
  );
}
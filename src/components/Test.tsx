import { useContext } from "react";
import { AppContext } from "../context/AppContext";

export default function Test() {
  const { days } = useContext(AppContext);

  return <div>{days.length}</div>;
}
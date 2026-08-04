import {
  useContext,
} from "react";


import {
  AuthContext,
} from "../context/AuthContext";


import Home from "./Home";

import CoachDashboard from "./CoachDashboard";



export default function HomeRedirect(){


  const {
    role,
  } = useContext(AuthContext);




  if(role === "COACH"){

    return <CoachDashboard />;

  }




  return <Home />;


}
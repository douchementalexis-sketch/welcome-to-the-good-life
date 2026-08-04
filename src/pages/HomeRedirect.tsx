import {
  useContext,
} from "react";


import {
  Navigate,
} from "react-router-dom";


import {
  AuthContext,
} from "../context/AuthContext";


import Home from "./Home";

import CoachDashboard from "./CoachDashboard";





export default function HomeRedirect(){



  const {
    user,
    role,
  } = useContext(AuthContext);







  if(!user){


    return (

      <Navigate

        to="/login"

        replace

      />

    );


  }







  if(role === "COACH"){


    return (

      <CoachDashboard />

    );


  }







  return (

    <Home />

  );


}
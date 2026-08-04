import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";


import {
  AuthProvider,
  AuthContext,
} from "./context/AuthContext";


import AppProvider from "./context/AppProvider";


import {
  useContext,
} from "react";



import Login from "./pages/Login";

import Home from "./pages/Home";

import Calendar from "./pages/Calendar";

import Statistics from "./pages/Statistics";

import Profile from "./pages/Profile";

import WorkoutSession from "./pages/WorkoutSession";

import CoachDashboard from "./pages/CoachDashboard";







function HomeRedirect(){


  const {
    user,
    role,
  } = useContext(AuthContext);





  // Pas connecté
  if(!user){


    return (

      <Navigate

        to="/login"

        replace

      />

    );


  }





  // Coach

  if(role === "COACH"){


    return (

      <CoachDashboard />

    );


  }





  // Client

  return (

    <Home />

  );


}









export default function App(){



  return (



    <AuthProvider>



      <AppProvider>



        <BrowserRouter>



          <Routes>




            <Route

              path="/login"

              element={

                <Login />

              }

            />





            <Route

              path="/"

              element={

                <HomeRedirect />

              }

            />





            <Route

              path="/calendar"

              element={

                <Calendar />

              }

            />





            <Route

              path="/statistics"

              element={

                <Statistics />

              }

            />





            <Route

              path="/profile"

              element={

                <Profile />

              }

            />





            <Route

              path="/workout"

              element={

                <WorkoutSession />

              }

            />





          </Routes>



        </BrowserRouter>



      </AppProvider>



    </AuthProvider>



  );



}
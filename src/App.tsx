import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";


import {
  AuthProvider,
} from "./context/AuthContext";


import AppProvider from "./context/AppProvider";


import ProtectedRoute from "./components/ProtectedRoute";


import Login from "./pages/Login";

import Home from "./pages/Home";
import Calendar from "./pages/Calendar";
import Statistics from "./pages/Statistics";
import Profile from "./pages/Profile";
import WorkoutSession from "./pages/WorkoutSession";



export default function App() {


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

                <ProtectedRoute>

                  <Home />

                </ProtectedRoute>

              }

            />








            <Route

              path="/calendar"

              element={

                <ProtectedRoute>

                  <Calendar />

                </ProtectedRoute>

              }

            />







            <Route

              path="/statistics"

              element={

                <ProtectedRoute>

                  <Statistics />

                </ProtectedRoute>

              }

            />







            <Route

              path="/profile"

              element={

                <ProtectedRoute>

                  <Profile />

                </ProtectedRoute>

              }

            />







            <Route

              path="/workout"

              element={

                <ProtectedRoute>

                  <WorkoutSession />

                </ProtectedRoute>

              }

            />





          </Routes>


        </BrowserRouter>


      </AppProvider>


    </AuthProvider>

  );

}
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

import ProtectedRoute from "./components/ProtectedRoute";
import SplashScreen from "./components/SplashScreen";

import Login from "./pages/Login";
import Home from "./pages/Home";
import Calendar from "./pages/Calendar";
import Statistics from "./pages/Statistics";
import Profile from "./pages/Profile";
import WorkoutSession from "./pages/WorkoutSession";
import CoachDashboard from "./pages/CoachDashboard";
import ClientFollowUp from "./pages/ClientFollowUp";

function HomeRedirect() {

  const {

    user,

    role,

    loading,

  } = useContext(AuthContext);

  if (loading) {

    return null;

  }

  if (!user) {

    return (

      <Navigate

        to="/login"

        replace

      />

    );

  }

  if (role === "COACH") {

    return <CoachDashboard />;

  }

  return <Home />;

}

export default function App() {

  return (

    <AuthProvider>

      <AppProvider>

        <SplashScreen>

          <BrowserRouter>

            <Routes>

              <Route
                path="/login"
                element={<Login />}
              />

              <Route
                path="/"
                element={<HomeRedirect />}
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

              <Route
                path="/client-followup"
                element={
                  <ProtectedRoute>
                    <ClientFollowUp />
                  </ProtectedRoute>
                }
              />

            </Routes>

          </BrowserRouter>

        </SplashScreen>

      </AppProvider>

    </AuthProvider>

  );

}
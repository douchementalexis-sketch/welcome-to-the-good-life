import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AppProvider } from "./context/AppContext";

import Home from "./pages/Home";
import Calendar from "./pages/Calendar";
import Statistics from "./pages/Statistics";
import Profile from "./pages/Profile";
import WorkoutSession from "./pages/WorkoutSession";

export default function App() {
  return (
    <AppProvider>
      <BrowserRouter>
        <Routes>

          <Route
            path="/"
            element={<Home />}
          />

          <Route
            path="/calendar"
            element={<Calendar />}
          />

          <Route
            path="/statistics"
            element={<Statistics />}
          />

          <Route
            path="/profile"
            element={<Profile />}
          />

          <Route
            path="/workout"
            element={<WorkoutSession />}
          />

        </Routes>
      </BrowserRouter>
    </AppProvider>
  );
}
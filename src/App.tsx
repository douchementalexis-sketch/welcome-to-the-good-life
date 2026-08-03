import Home from "./pages/Home";
import { AppProvider } from "./context/AppContext";

export default function App() {
  return (
    <AppProvider>
      <Home />
    </AppProvider>
  );
}
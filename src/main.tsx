import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";

import "./styles/variables.css";
import "./styles/theme.css";
import "./styles/buttons.css";
import "./styles/Card.css";
import "./styles/animations.css";

ReactDOM.createRoot(
  document.getElementById("root")!
).render(

  <React.StrictMode>

    <App />

  </React.StrictMode>

);
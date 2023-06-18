import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import { BrowserRouter as Router } from "react-router-dom";
import { HabitContext, HabitProvider } from "./context/HabitContext.jsx";

export { HabitContext };

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HabitProvider>
      <Router>
        <App />
      </Router>
    </HabitProvider>
  </React.StrictMode>
);

import { Routes, Route } from "react-router";

import "./App.css";
import { HabitListing } from "./pages";
import { NavLink } from "react-router-dom";
import { Archived } from "./pages/Archived/Acrhived";

function App() {
  return (
    <>
      <h1>Habit Tracker App</h1>
      <NavLink to="/">Habit Listing</NavLink>
      <NavLink to="/archived">Archived</NavLink>
      <Routes>
        <Route path="/" element={<HabitListing />} />
        <Route path="/archived" element={<Archived />} />
      </Routes>
    </>
  );
}

export default App;

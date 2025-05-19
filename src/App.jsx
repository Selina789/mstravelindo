import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/Navbar";
import Landing from "./Landing";
import AboutPage from "./pages/AboutPage";
import ToursPage from "./pages/ToursPage";
import TicketsPage from "./pages/TicketsPage";
import OthersPage from "./pages/OthersPage";

const App = () => {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/about" element={<AboutPage />} />   
        <Route path="/tours" element={<ToursPage />} />
        <Route path="/tickets" element={<TicketsPage />} />
        <Route path="/others" element={<OthersPage />} />
      </Routes>
    </Router>
  );
};

export default App;

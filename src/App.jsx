import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import NavBar from "./components/Navbar";
import PageWrapper from "./PageWrapper";

// Pages
import Landing from "./Landing";
import AboutPage from "./pages/AboutPage";
import ToursPage from "./pages/ToursPage";
import TicketsPage from "./pages/TicketsPage";
import OthersPage from "./pages/OthersPage";

// Tours
import AsiaTours from "./pages/tours/AsiaTours";
import EuropeTours from "./pages/tours/EuropeTours";
import AmericaTours from "./pages/tours/AmericaTours";
import IndonesiaTours from "./pages/tours/IndonesiaTours";

// Tickets
import FerryTickets from "./pages/tickets/FerryTickets";
import PlaneTickets from "./pages/tickets/PlaneTickets";

// Others
import VisaOthers from "./pages/others/VisaOthers";
import RentalOthers from "./pages/others/RentalOthers";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);

    const handleClick = (e) => {
      const link = e.target.closest("a");
      if (link && link.href === window.location.href) {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    };

    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, [pathname]);

  return null;
};

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<PageWrapper><Landing /></PageWrapper>} />
        <Route path="/about" element={<PageWrapper><AboutPage /></PageWrapper>} />

        {/* Tours */}
        <Route path="/tours" element={<PageWrapper><ToursPage /></PageWrapper>} />
        <Route path="/tours/asia" element={<PageWrapper><AsiaTours /></PageWrapper>} />
        <Route path="/tours/europe" element={<PageWrapper><EuropeTours /></PageWrapper>} />
        <Route path="/tours/america" element={<PageWrapper><AmericaTours /></PageWrapper>} />
        <Route path="/tours/indonesia" element={<PageWrapper><IndonesiaTours /></PageWrapper>} />

        {/* Tickets */}
        <Route path="/tickets" element={<PageWrapper><TicketsPage /></PageWrapper>} />
        <Route path="/tickets/ferry" element={<PageWrapper><FerryTickets /></PageWrapper>} />
        <Route path="/tickets/plane" element={<PageWrapper><PlaneTickets /></PageWrapper>} />

        {/* Others */}
        <Route path="/others" element={<PageWrapper><OthersPage /></PageWrapper>} />
        <Route path="/others/visa" element={<PageWrapper><VisaOthers /></PageWrapper>} />
        <Route path="/others/rental" element={<PageWrapper><RentalOthers /></PageWrapper>} />
      </Routes>
    </AnimatePresence>
  );
};

const App = () => (
  <Router>
    <ScrollToTop />
    <NavBar />
    <AnimatedRoutes />
  </Router>
);

export default App;

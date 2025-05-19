import React from "react";
import NavBar from "./components/Navbar";
import Landing from "./components/Landing";
import Tours from "./components/Tours";
import SpecialOffers from "./components/Packages";
import Services from "./components/Services";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div>
      <Landing />
      <Tours /> 
      <SpecialOffers />
      <Services />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default App;

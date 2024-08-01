import React, { useEffect } from "react";
import AOS from "aos";
import "../node_modules/aos/dist/aos.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Services from "./components/Services";
import Detail from "./components/Detail";
import Review from "./components/Review";
import Footer from "./components/Footer";

const App = () => {
  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 700,
      easing: "ease-in",
      delay: 100,
    });
  });

  return (
    <>
      <div className="overflow-x-hidden">
        <Navbar />
        <Home />
        <Services />
        <Detail />
        <Review />
        <Footer />
      </div>
    </>
  );
};

export default App;

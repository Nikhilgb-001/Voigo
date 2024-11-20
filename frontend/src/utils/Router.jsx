import React, { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import DeliveryCards from "../components/DeliveryCards";
import QRBanner from "../components/QRBanner";
import FAQ from "../components/FAQ";
import Footer from "../components/Footer";
import TermsAndConditions from "../components/TermsAndConditions";
import ComingSoon from "../components/ComingSoon";
import PrivacyAndPolicy from "../components/PrivacyAndPolicy";
import TimeCard from "../components/TimeCard";
import AboutUs from "../components/AboutUs";

const Router = () => {
  const location = useLocation();

  // Scroll to top whenever the route changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            <Navbar />
            <HeroSection />
            <DeliveryCards />
            <TimeCard />
            <AboutUs />
            <FAQ />
            <Footer />
          </>
        }
      />
      <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
      <Route path="/coming-soon" element={<ComingSoon />} />
      <Route path="/privacy-policy" element={<PrivacyAndPolicy />} />
    </Routes>
  );
};

export default Router;

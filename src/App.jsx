import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { ToastContainer } from "react-toastify";
import React from "react";
import AnnouncementBar from "./components/AnnouncementBar";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import PopularProducts from "./components/PopularProducts";
// import Footer from "./components/Footer";
import KidsPromoSection from "./components/KidsPromoSection";
import AutoScrollBar from "./components/AutoScrollBar";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";
import FeatureCarousel from "./components/Chooseus";
import FeatureSlider from "./components/Chooseus";
import DiscountBanner from "./components/DiscountBanner";

const App = () => {
  return (
    <>
      <AnnouncementBar />
      <Navbar />
      <HeroSection />
      <PopularProducts title={"New Arrivals"} />
      <DiscountBanner />
      {/* <KidsPromoSection /> */}
      {/* <AutoScrollBar /> */}
      <PopularProducts title={"Best Sellers"} />
      <Testimonials />
      <FeatureSlider />
      <Footer />
      {/* <Header />  */}
      <ToastContainer
        toastClassName={() =>
          "relative flex p-4 rounded-md justify-between overflow-hidden cursor-pointer bg-white text-black shadow-lg"
        }
        bodyClassName={() => "text-sm font-medium flex items-center"}
        progressClassName="bg-white"
      />
    </>
  );
};

export default App;

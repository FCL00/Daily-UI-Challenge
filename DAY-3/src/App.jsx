import { useState } from "react";
import "./App.css";
import "./index.css";
import Header from "@/components/Header/Header";
import Hero from "@/components/Hero/Hero";
import Footer from "@/components/Footer/Footer";
import Contact from "@/components/Contact/Contact";
import Review from "@/components/Review/Review";
import Menu from "@/components/Menu/Menu";
function App() {
  return (
    <>
      <Header />
      <Hero />
      <Menu />
      <Review />
      <Contact />
      <Footer />
    </>
  );
}

export default App;

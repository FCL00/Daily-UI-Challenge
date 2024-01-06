import { useState } from "react";
import Lottie from "lottie-react";
import Animation404 from "./assets/Animation404.json";
import "./App.css";

function App() {
  return (
    <>
      <div className="h-screen flex flex-items justify-center bg-gray-900">
        <Lottie animationData={Animation404} loop={true} />
      </div>
    </>
  );
}

export default App;

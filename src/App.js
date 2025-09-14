import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Level1 from "./pages/Level1";
import Level2 from "./pages/Level2";
import Level3 from "./pages/Level3";
import Level4 from "./pages/Level4";
import Level5 from "./pages/Level5";
import End from "./pages/End";
import "./global.css";


function App() {
  const appStyle = {
    backgroundImage: "url('/assets/background-escaperoom.png')", // arquivo em /public/assets/
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    minHeight: "100vh",
  };

  return (
    <div style={appStyle}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/level1" element={<Level1 />} />
        <Route path="/level2" element={<Level2 />} />
        <Route path="/level3" element={<Level3 />} />
        <Route path="/level4" element={<Level4 />} />
        <Route path="/level5" element={<Level5 />} />
        <Route path="/end" element={<End />} />
      </Routes>
    </div>
  );
}

export default App;

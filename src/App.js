import React, { useState, useEffect } from "react";
import ReactPageScroller from "react-page-scroller";

import FirstPage from "./pages/FirstPage";
import SecondPage from "./pages/SecondPage";
import ThirdPage from "./pages/ThirdPage";
import FourthPage from "./pages/FourthPage";
import "./App.css";

function App() {
  return (
    <div className="main-container">
      <h1>ALUR</h1>
      <ReactPageScroller
        containerWidth={window.innerWidth}
        containerHeight={window.innerHeight * 0.955}
        renderAllPagesOnFirstRender={false}
      >
        <FirstPage />
        <SecondPage />
        <ThirdPage />
        <FourthPage />
      </ReactPageScroller>
    </div>
  );
}

export default App;

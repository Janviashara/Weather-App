import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Component/Home";
import Weather from "./Component/Weather";
import Demo from "./Component/Demo";
import Local from "./Component/Local";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />   
          <Route path="/weather" element={<Weather />} />
        </Routes>
      </BrowserRouter>

      <Demo />
      <Local />
    </div>
  );
}

export default App;

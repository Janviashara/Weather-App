import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Component/Home";
import Weather from "./Component/Weather";

import LocalStorage from "./Component/LocalStorage";
//  import Local from "./Component/Local";import Person from "./Component/Person";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/weather" element={<Weather />} />
          <Route path="/localstorage" element={<LocalStorage />} />
        </Routes>
      </BrowserRouter>     
      {/* <Local /> */}
    </div>
  );
}

export default App;

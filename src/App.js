import React from "react";
import "./App.css";
import Home from "./pages/components/Home/Home";

import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <div className="app-area ">
      <Routes>
        {/* home route  */}
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
};

export default App;

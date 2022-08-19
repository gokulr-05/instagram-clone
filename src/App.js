import React from "react";
import "./App.css";
import Home from "./pages/components/Home/Home";
import Profile from "./pages/components/profile/Profile";

import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <div className="app-area ">
      <Routes>
        {/* home route  */}
        <Route path="/" element={<Home />} />

        {/* profile route  */}
        <Route path="profile" element={<Profile />} />
      </Routes>
    </div>
  );
};

export default App;

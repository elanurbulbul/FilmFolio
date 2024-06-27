import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Homepage from "../../pages/Homepage";
import Films from "../../pages/Films/index.jsx";
import People from "../../pages/People";


const RoutePage = () => {
  return (
    <Routes>
      <Route path="/" exact element={<Homepage/>} />
      <Route path="/homepage"  element={<Homepage />} />
      <Route path="/films" element={<Films />} />
      {/* <Route path="/tvshows" element={<IsitHealthy />} />
      <Route path="/watchlist" element={<HealthyRecipes />} /> */}
      <Route path='/people' element={<People />} /> 
    </Routes>
  );
};
export default RoutePage;
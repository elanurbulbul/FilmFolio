import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Homepage from "../../pages/Homepage";
import Films from "../../pages/Films";
import People from "../../pages/People";
import TvShows from "../../pages/TvShows";
import WatchList from "../../pages/WatchLists";


const RoutePage = () => {
  return (
    <Routes>
      <Route path="/" exact element={<Homepage/>} />
      <Route path="/homepage"  element={<Homepage />} />
      <Route path="/films" element={<Films />} />
    <Route path="/tvshows" element={<TvShows />} />
      <Route path="/watchlist" element={<WatchList />} />
      <Route path='/people' element={<People />} /> 
    </Routes>
  );
};
export default RoutePage;
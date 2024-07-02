import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Homepage from "../../Pages/Homepage";
import Movies from "../../Pages/Movies";
import People from "../../Pages/People";
import TvShows from "../../Pages/TvShows";
import WatchList from "../../Pages/WatchList";

const RoutePage = () => {
    return (
      <Routes>
        <Route path="/" exact element={<Homepage/>} />
        <Route path="/homepage"  element={<Homepage />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/tvshows" element={<TvShows />} />
        <Route path="/watchlist" element={<WatchList />} />
        <Route path='/people' element={<People />} /> 
      </Routes>
    );
  };
  export default RoutePage;
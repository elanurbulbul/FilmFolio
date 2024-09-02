import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Homepage from "../../Pages/Homepage";
import Movies from "../../Pages/Movies";
import People from "../../Pages/People";
import TvShows from "../../Pages/TvShows";
import WatchList from "../../Pages/WatchList";
import MoviesDetail from "../../Pages/MoviesDetail";
import TvShowDetail from "../../Pages/TvShowsDetail";
import PersonDetail from "../../Pages/PersonDetail"
import SearchPage from "../../Pages/SearchPage";
import SignInPage from "../../Pages/AuthPages/SignIn";
import SignUpPage from "../../Pages/AuthPages/SignUp";
import Welcome from "../Auth/WelcomePage";

const RoutePage = () => {
    return (
      <Routes>
        <Route path="/" exact element={<Homepage/>} />
        <Route path="/homepage"  element={<Homepage />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/tvshows" element={<TvShows />} />
        <Route path="/watchlist" element={<WatchList />} />
        <Route path='/people' element={<People />} /> 
        <Route path="/movies/:movieId" element={<MoviesDetail/>} />
        <Route path="/tvshows/:tvId" element={<TvShowDetail/>} />
        <Route path="/people/:personId" element={<PersonDetail/>} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/sign-in" element={<SignInPage/>}/>
        <Route path="/sign-up" element={<SignUpPage/>}/>
        <Route path="/welcome" element={<Welcome/>}/>
      </Routes>
    );
  };
  export default RoutePage;
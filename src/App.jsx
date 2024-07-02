import React from 'react';
import './App.css';
import { BrowserRouter as Router } from "react-router-dom";
import RoutesPage from './Components/RoutesPages';
import Navbar from './Components/Navbar/Navbar'
import Footer from './Components/Footer';

function App() {

  return (
    <div className='App'>
       <Router>
       <Navbar/>
       <RoutesPage />
       <Footer/>
    
      </Router>
     
    </div>
  );
}

export default App

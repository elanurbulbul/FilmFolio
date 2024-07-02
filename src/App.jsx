import React from 'react';
import './App.css';
import { BrowserRouter as Router } from "react-router-dom";
import RoutePage from './Components/Routes';
import Navbar from './Components/Navbar/Navbar'
import Footer from './Components/Footer';

function App() {

  return (
    <div className='App'>
       <Router>
       <Navbar/>
       <RoutePage />
       <Footer/>
    
      </Router>
     
    </div>
  );
}

export default App

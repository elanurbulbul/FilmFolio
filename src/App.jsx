import React from 'react';
import './App.css';
import { BrowserRouter as Router } from "react-router-dom";
import Route from './Components/Routes/Route';
import Navbar from './Components/Navbar/Navbar'
import Footer from './Components/Footer';

function App() {

  return (
    <div className='App'>
       <Router>
       <Navbar/>
       <Route />
       <Footer/>
    
      </Router>
     
    </div>
  );
}

export default App

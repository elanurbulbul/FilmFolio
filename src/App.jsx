import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar.jsx';
import Footer from './components/Footer'
import { BrowserRouter as Router } from "react-router-dom";
import RoutePage from './components/Routes/index.jsx';
function App() {
  
  return (
    <div className='App'>
       <Router>
       <Navbar/>
       <main>
          <RoutePage />
        </main>
      <Footer/>

       
    
      </Router>
     
    </div>
  );
}

export default App;

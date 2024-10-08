import React from 'react';
import './App.css';
import { BrowserRouter as Router } from "react-router-dom";
import Route from './Components/Routes/Route';
import Navbar from './Components/Navbar/Navbar'
import Footer from './Components/Footer';
import { Stack } from '@chakra-ui/react';

function App() {

  return (
    <div className='App'>
      <Router>
        <Navbar />
        <div className="content">
          <Route />
        </div>
        <Stack bg="gray.700" >
        <Footer />
        </Stack>
        
      </Router>
    </div>
  );
}

export default App;

import React from 'react';
import './App.css';
import Homapage from './Pages/Homepage';
import Movie from './components/Movie';
import Navbar from './components/Navbar';

function App() {
  
  return (
    <div className='App'>
      <Navbar/>
      <h1>sheelo</h1>
      
      <Movie/>
    </div>
  );
}

export default App;

import React from 'react';
import logo from './logo.svg';
import Navbar from './components/Navbar';
import Landing from './pages/Landing';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Landing/>
    </div>
  );
}

export default App;

import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Landing from './pages/Landing';
import Story from './pages/Story';
import './App.css';

function App() {
  return (
    <Router>
    <div className="App">
      <Navbar/>
      <Switch>
      <Route path="/" exact component={Landing}/>
      <Route path="/story" component={Story}/>
      </Switch>
    </div>
    </Router>
  );
}

export default App;

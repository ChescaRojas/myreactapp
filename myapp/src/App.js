import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import { BrowserRouter as Router} from 'react-router-dom';

function App() {
  return (
    <Router>
      <Navbar />
    </Router>
    //     <img src={logo} className="App-logo" alt="logo" />
  );
}


export default App;

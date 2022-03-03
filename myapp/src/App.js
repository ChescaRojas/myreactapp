import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import { BrowserRouter as Router} from 'react-router-dom';
import CarWidget from './Components/Navbar/CarWidget';
import ItemList from './Components/ItemList';

function App() {
  return (
    <Router>
      <Navbar />
      <CarWidget />
      <ItemList/>
    </Router>
    
  );
}
//     <img src={logo} className="App-logo" alt="logo" />

export default App;

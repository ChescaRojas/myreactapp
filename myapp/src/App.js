import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import { BrowserRouter as Router} from 'react-router-dom';
import ItemList from './Components/ItemList';
import ItemCount from './Components/ItemCount';

function App() {
  let names = [
    'Naranjas',
    'Manzanas',
    'Peras',
    'Anana'
  ];
  return (
    <Router>
      <Navbar />
      <br></br>
      <ItemCount stock={8} inicial={0} />
      {/* <ItemList names={names}/> */}
    </Router>
    
  );
}
//     <img src={logo} className="App-logo" alt="logo" />

export default App;

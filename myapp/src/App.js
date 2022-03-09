import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import { BrowserRouter as Router} from 'react-router-dom';
import ItemList from './Components/ItemList';

function App() {
  let names = [
    'Naranjas',
    'Manzanas',
    'Peras',
    'Anana'
  ];

  let itemsInTheCart = 0;

  function AddToTheCart () {
    itemsInTheCart += 1;
    console.log('entre')
  };


  return (
    <Router>
      <Navbar />
      <ItemList names={names} AddToTheCart={AddToTheCart}/>
      <div>{itemsInTheCart}</div>
    </Router>
    
  );
}
//     <img src={logo} className="App-logo" alt="logo" />

export default App;

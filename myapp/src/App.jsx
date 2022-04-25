import './App.scss';
import './styles/variables.scss'
import { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css'
import NavBarComponent from './components/navBarComponent/navBarComponent'
import ItemListContainer from './components/itemListContainer/itemListContainer'
import ItemDetailsContainer from './components/itemDetailsContainer/itemDetailsContainer'
import CartContext from './components/cartContext/CartContext';
import CartListContainer from './components/cartListContainer/cartListContainer'


export default function App() {
  const [itemDetail, setItemDetail] = useState();

  return (<div className='App'>
    <CartContext>
      <Router>
        <div>
          <NavBarComponent />
          <Routes>
            <Route path="/item/:id" element={<ItemDetailsContainer item={itemDetail} />} />
            <Route exact path="/">
              <Route exact path='/' element={<ItemListContainer setItemDetail={setItemDetail} />} />
            </Route>
            <Route exact path="/bag">
              <Route exact path='/bag' element={<CartListContainer />} />
            </Route>
          </Routes>
        </div>
      </Router>
    </CartContext>
  </div>
  )
}



import Topbar from "./components/Topbar/Topbar";
import Cart from "./components/Cart/Cart";
import Content from "./components/Content/Content";
import {BrowserRouter as Router} from 'react-router-dom'

import {states} from './utils/context'
import { useEffect, useContext } from "react";
import { queryAllByAltText } from "@testing-library/react";


function App() {

  const {cart,setCart} = useContext(states);

  useEffect(()=>{
    const storedCart = JSON.parse(localStorage.getItem('cart'));
    
    if(storedCart){
      setCart(storedCart)
    }else{
      localStorage.setItem('cart',JSON.stringify([]));
    } 
  },[]);

  useEffect(()=>{
    localStorage.setItem('cart',JSON.stringify(cart))
  },[cart]);


  return (
    <Router>
      <div className="App">
        <Topbar/>
        <Cart/>
        <Content/>
      </div>
    </Router>
    
  );
}

export default App;

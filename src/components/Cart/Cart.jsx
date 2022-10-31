import './cart.css'
import {useState, useContext } from 'react'
import { states } from '../../utils/context'

import {BiArrowBack} from 'react-icons/bi'
import CartItem from '../CartItem/CartItem'
import { useEffect } from 'react'

const Cart = () => {
  const{cartOpen, setCartOpen, cart} = useContext(states);

  const [localCart, setLocalCart] = useState( cart || []);

  console.log("LOCAL CART:",localCart);


  


  return (
    <div className='cart' style={{left: cartOpen ? "" : "100%"}} >
      <div className="cartTopbar">
        <div className="backWrapper" onClick={()=>setCartOpen(false)}>
          <BiArrowBack className='backArrow'/>
          <span className="backTxt">Back</span>
        </div>
      </div>

      <div className="cartList">
          {
                cart.map((item,index)=>(
                  <CartItem key={index} {...item}/>
                ))
          }
      </div>
      

    </div>
  )
}

export default Cart
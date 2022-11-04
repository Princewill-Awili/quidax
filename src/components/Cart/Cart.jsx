import './cart.css'
import {useState, useContext } from 'react'
import { states } from '../../utils/context'

import {MdOutlineShoppingCart as CartIcon} from 'react-icons/md'
import {BiArrowBack} from 'react-icons/bi'
import CartItem from '../CartItem/CartItem'
import { useEffect } from 'react'

const Cart = () => {
  const{cartOpen, setCartOpen, cart, subTotal} = useContext(states);

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

      <div className="subTotalArea">
        <div className="subTop">
          <span className="subTxt">Subtotal</span>
          <span className="subPrice">${subTotal.toFixed(2)}</span>
        </div>
        <div className="subBottom">
          <CartIcon className='cCartIcon'/>
          <span>Proceed to Check Out</span>
        </div>
      </div>
      

    </div>
  )
}

export default Cart
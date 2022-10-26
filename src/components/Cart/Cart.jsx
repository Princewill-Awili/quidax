import './cart.css'
import { useContext } from 'react'
import { states } from '../../utils/context'

import {BiArrowBack} from 'react-icons/bi'

const Cart = () => {
  const{cartOpen, setCartOpen} = useContext(states);

  return (
    <div className='cart' style={{left: cartOpen ? "" : "100%"}} >
      <div className="cartTopbar">
        <div className="backWrapper" onClick={()=>setCartOpen(false)}>
          <BiArrowBack className='backArrow'/>
          <span className="backTxt">Back</span>
        </div>
      </div>
      

    </div>
  )
}

export default Cart
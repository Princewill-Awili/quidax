import { useState, useContext, useEffect } from 'react'
import { states } from '../../utils/context'
import './cartItem.css'

const CartItem = ({img,title,author,price}) => {

  const {subTotal, setSubTotal} = useContext(states)
  const [qty,setQty] = useState(1);

  const add = () =>{
    setQty(qty +1);
    setSubTotal(subTotal + price)
  }

  const minus = () =>{
    if(qty === 1){
      setQty(1);
    }else{
      setQty(qty - 1);
      if(subTotal === 0){
        setSubTotal(0.00)
      }else{
        setSubTotal(subTotal - price)
      }
      
    }
    
  }

  useEffect(()=>{
    setSubTotal(subTotal + price);
  },[])

  return (
    <div className='cartItem'>
        <div className="cImgBox">
            <img src={img} alt="cImg" className='cImage'/>
        </div>
        <div className="cInfo">
            <span className="cTitle">{title}</span>
            <span className="cAuthor">{author}</span>
            <spam className="removeBtn">Remove</spam>
        </div>

        <div className="cPriceSect">
          <span className='cPrice'>${price}</span>

          <div className="qty">
            <div className="minus" onClick = {()=> minus()}>-</div>
            <div className="qtyCount">{qty}</div>
            <div className="add" onClick = {()=> add()} >+</div>
          </div>

          <span className="addedPrice">${(price * qty).toFixed(2)}</span>
        </div>
    </div>
  )
}

export default CartItem
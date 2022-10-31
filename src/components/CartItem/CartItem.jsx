import { useState } from 'react'
import './cartItem.css'

const CartItem = ({img,title,author,price}) => {


  const [qty,setQty] = useState(1);


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
          <span className='cPrice'>{price}</span>

          <div className="qty">
            <div className="minus">-</div>
            <div className="qtyCount">{qty}</div>
            <div className="add">+</div>
          </div>

          <span className="addedPrice">{(price * qty).toFixed(2)}</span>
        </div>
    </div>
  )
}

export default CartItem
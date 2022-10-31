import './booktile.css'

import {MdPeopleOutline as People} from 'react-icons/md'
import {AiOutlineHeart as Likes ,AiFillStar as Rating} from 'react-icons/ai'
import {MdOutlineShoppingCart as CartIcon} from 'react-icons/md'
import { states } from '../../utils/context'
import { useContext } from 'react'
import {useNavigate} from 'react-router-dom'
import { useEffect } from 'react'



const BookTile = ({id,img,title,author,releasedYear,genre, followers,likes,ratings,price,stock}) => {

  const ratingFunc = (ratingsNum) => {
    const numUnfilled = Math.floor(5 - ratingsNum);
    const numFilled = Math.floor(ratingsNum);
    return [numFilled,numUnfilled];
  }

  const [filled,unfilled] = ratingFunc(ratings);

  const navigate = useNavigate();
  const { cart,setCart, books } = useContext(states);

  const addToCart = (e) => {
    const sBook = books.find(book => book.id === e.currentTarget.id)
    setCart(prev => [...prev,sBook]); 
  }

  const openBook = (e) => {
    console.log(e.currentTarget.id)
    const selectedBook = books.find(book => book.id === e.currentTarget.id)
    console.log(selectedBook);
    localStorage.setItem('selectedBook', JSON.stringify(selectedBook));
    navigate(`/book/${e.currentTarget.id}`);
  }

  useEffect(()=>{
    localStorage.setItem('cart',JSON.stringify(cart));
  },[cart]);


  return (
    <div className='booktile' >
        <div className="left">
            <img src={img} alt="bookImg" className='bookImg' onClick={(e)=> openBook(e)} id={id}/>
        </div>
        <div className="right">
            <h5 className='title'>{title}</h5>
            <p className='auth'>{author} - {releasedYear}</p>
            <p className="genre">{genre}</p>

            <div className="midSection">
                <div className="icons">
                  <div className="followers">
                    <People/>
                    <span>{followers}</span>
                  </div>
                  <div className="likes">
                    <Likes/>
                    <span>{likes}</span>
                  </div>
                </div>
                <div className="ratings">
                  <span>Rating: {ratings}</span>
                  <div className="rContainer">
                    {[...Array(filled)].map((x,index) => (
                      <Rating key={`${index}filled`} className="filled"/>
                    ))}
                    {[...Array(unfilled)].map((y,index)=>(
                      <Rating key={`${index}unfilled`} className="unfilled"/>
                    ))}
                  </div>
                </div>
            </div>

            <p className="priceAndStock">
              <span className='price'>${price}</span>
              <span className="stock" style={{color: stock>0 ? "#78C920" : "#ED3F40"}}>
                {stock > 0 ? `${stock} copies available` : `Out of Stock`}
              </span>
            </p>

            <div className="addToCart" id={id} onClick={(e)=> addToCart(e)}>
              <CartIcon id={id} />
              <span className="add" id={id} >Add to Cart</span>
            </div>
        </div>
    </div>
  )
}

export default BookTile
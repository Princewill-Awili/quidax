import './bookpage.css'
import { useState } from 'react'
import {BiArrowBack} from 'react-icons/bi'

import {MdPeopleOutline as People} from 'react-icons/md'
import {AiOutlineHeart as Likes ,AiFillStar as Rating} from 'react-icons/ai'
import {MdOutlineShoppingCart as CartIcon} from 'react-icons/md'

import {Link} from 'react-router-dom'
import { useContext } from 'react'
import { states } from '../../utils/context'

const BookPage = () => {
    const [book] = useState(JSON.parse(localStorage.getItem('selectedBook')));

    const {setCart} = useContext(states)

    const addBookToCart = () => {
        setCart(prev => [...prev,book])
    }

    const ratingFunc = (ratingsNum) => {
        const numUnfilled = Math.floor(5 - ratingsNum);
        const numFilled = Math.floor(ratingsNum);
        return [numFilled,numUnfilled];
      }
    
    const [filled,unfilled] = ratingFunc(book.ratings);

    const SmallTabs = ({title,text}) => {

        const genStyles = {
              display:"flex",
              gap:"5px",
              flexDirection:"column",
              justifyContent:"flex-start",
              paddingRight:"20px", 
              paddingLeft:"20px",
              height:"60%",
              
        }

        const titleStyle = {
            fontSize:"12px", fontWeight:"bold", textAlign:"left"
        }

        const textStyle = {
            fontSize:"12px", fontWeight:"normal", textAlign:"left"
        }

        return (
            <div style={{...genStyles}}>
                <span style={{...titleStyle}}>{title}</span>
                <span style={{...textStyle}}>{text}</span>
            </div>

        )
    } 

    const lister =(arr) =>{
        let newStr = '';

        for(let x=0; x < arr.length; x++){
            newStr = newStr.concat(`${arr[x]}, `);
        }

        return newStr;
    }


    
  return (
    <div className='bookpage'>
        <div className="pageWrapper">
            <div className="pageLeft">
                <Link to="/">
                    <div className="backToMain" style={{cursor:"pointer"}}>
                        <BiArrowBack/>
                        <span>Back</span>
                    </div>
                </Link>

                <img src={book.img} alt="bookImg" className='bookImage' />

                <p className='bookStock' style={{color: book.stock>0 ? "#78C920" : "#ED3F40"}}>{book.stock > 0 ? `${book.stock} copies available` : 'Out of Stock'}
                </p>

                <p className="bookPrice">${book.price}</p>

                <div className="addToCartBtn">
                    <CartIcon/>
                    <span>Add to Cart</span>
                </div>

            </div>

            <div className="pageRight">
                <p className="bookTitle">{book.title}</p>
                <p className="bookAuthor">{book.author}</p>
                <span className="bookYear">{book.releasedYear}</span>

                <div className="infoRack">
                    <div className="infoRackLeft">
                        <div className="bookIcons">
                            <div className="bookFollowers">
                                <People/>
                                <span>{book.followers}</span>
                            </div>
                            <div className="bookLikes">
                                <Likes/>
                                <span>{book.likes}</span>
                            </div>
                        </div>

                        <div className="bookRatingsContainer">
                            <span className="ratingLabel">Ratings:<span className='rateNum'> {book.ratings}</span></span>
                            <div className="starHolder">
                                {[...Array(filled)].map((x,index) => (
                                    <Rating key={`${index}filled`} className="filled"/>
                                ))}
                                {[...Array(unfilled)].map((y,index)=>(
                                    <Rating key={`${index}unfilled`} className="unfilled"/>
                                ))}
                            </div>
                        </div>
                    </div>
                    

                    <div className="smallTabsContainer">
                        <SmallTabs className="smallTabs" title="Genre" text={book.genre}/>
                        <SmallTabs className="smallTabs" title="Tags" text={lister(book.tags)}/>
                        <SmallTabs className="smallTabs" title="Publisher" text={book.publisher}/>
                        <SmallTabs className="smallTabs" title="Released" text={book.releasedDate}/>
                    </div>

                </div>

                <p className="review">{book.reviews[0]}</p>

                <p className="aboutAuthor">
                    {book.aboutAuthor}
                </p>

                <p className="desc">{book.description}</p>
                <p className="desc">{book.description}</p>
                <p className="desc">{book.description}</p>


                <div className="addToCartMobile" onClick={addBookToCart}>
                    <CartIcon/>

                    <div className="atcmMid">
                        <span>Add to Cart</span>
                        <span className="atcmMidStock" style={{color: book.stock>0 ? "#78C920" : "#ED3F40"}}>{book.stock > 0 ? `${book.stock} copies available` : 'Out of Stock'}</span>
                    </div>

                    <span className='atcmPrice'>${book.price}</span>
                </div>

            </div>
                
        </div>
            
            
    </div>
  )
}

export default BookPage
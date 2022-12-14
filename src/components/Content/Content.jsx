import  './content.css'
import {Routes, Route, Navigate, useNavigate} from 'react-router-dom'
import { useContext } from 'react'
import {states} from '../../utils/context'
import BookTile from '../BookTile/BookTile'
import BookPage from '../BookPage/BookPage'
import BookThumbnail from '../BookThumbnail/BookThumbnail'

import {BiArrowBack as BackArrow} from 'react-icons/bi'
import {IoMdArrowDropleft as LeftSlideArrow, IoMdArrowDropright as RightSlideArrow} from 'react-icons/io'
import { useState } from 'react'
import { useRef } from 'react'








const Content = () => {

  const navigate = useNavigate();

  const { cartOpen , books, searchMode, setSearchMode,setMobileSearch, foundBooks} = useContext(states);

  const [count,setCount] = useState(0);

  const slideRef = useRef()

  const slideLeft=()=>{
      slideRef.current.style.left = `${(count+1) * 250}px`;
      setCount(count - 1);
      console.log("RIGHT:",slideRef.current.style.right);
  }

  const slideRight=()=>{
    slideRef.current.style.right = `${(count+1) * 250}px`;
    setCount(count + 1);
    console.log("LEFT:",slideRef.current.style.left);
}


  return (
    <div className='content'>
      { cartOpen && (<div className="filter"></div>)}
      <Routes>
        <Route 
                path='/' exact 
                element={
                  <div className='contentWrapper'>
                    {
                     searchMode === false && (
                      <div className="featured">
                      <h3 className="sectionTitle"> Featured</h3>
                      
                      <div className="slider">
                        {
                          count >= 1 && (
                            <div className=" dir leftDir" >
                              <LeftSlideArrow className='dirArrow' onClick={slideLeft}/>
                            </div>
                          )
                        }
                        
                        <div className="sliderRack" ref={slideRef}>
                          {
                            books.map((book,index)=>(
                              <BookThumbnail key={index} {...book}/>
                            ))
                          }
                          {
                            books.map((book,index)=>(
                              <BookThumbnail key={index} {...book}/>
                            ))
                          }
                        </div>
                        {
                          count < 10 && (
                            <div className="dir rightDir">
                              <RightSlideArrow className='dirArrow' onClick={slideRight}/>
                            </div>
                          )
                        }

                        <div className="dots">
                          {
                            [...Array(10)].map((x,index)=>(
                              <div className="dot" id={index+1} style={{backgroundColor: count === index ? "var(--green-bubble)": ""}}></div>
                            ))
                          }
                        </div>
                        
                      </div>
                      
                    </div>
                     ) 
                    }
                   
                    <div className="allBooks">
                      <h3 className="sectionTitle">{searchMode === false  ? "All Books":`Found Books(${foundBooks.length})`}</h3>
                      {
                        searchMode=== false ? (
                          <>
                             {
                                books.map((book)=>(
                                <BookTile key={book.id} {...book}/>
                        ))
                      }
                      {
                        books.map((book)=>(
                          <BookTile key={book.id} {...book}/>
                        ))
                      }
                      {
                        books.map((book)=>(
                          <BookTile key={book.id} {...book}/>
                        ))
                      }
                      {
                        books.map((book)=>(
                          <BookTile key={book.id} {...book}/>
                        ))
                      }
                          </>
                        ):
                        (
                          <>
                          {
                            foundBooks.map((book)=>(
                              <BookTile key={book.id} {...book}/>
                            ))
                          }
                          </> 
                        )
                      }
                      
                    </div>
                      {searchMode && (
                      <div 
                        className='return' 
                        onClick={()=>{
                          navigate('/');
                          setSearchMode(false);
                          setMobileSearch(false);
                        }}
                    >
                      <span>
                        <BackArrow />
                      </span>Home
                    </div>)}
                  </div>
                }
        />
        <Route path='/book/:id' element={searchMode ? (<Navigate to={"/"}/>) : (<BookPage/>)}/>





      </Routes>
      
    </div>
  )
}

export default Content
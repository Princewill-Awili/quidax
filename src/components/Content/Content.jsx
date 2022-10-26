import  './content.css'
import {Routes, Route} from 'react-router-dom'

import { useContext } from 'react'
import {states} from '../../utils/context'

import BookTile from '../BookTile/BookTile'

const Content = () => {

  const { cartOpen , books} = useContext(states);

  return (
    <div className='content'>
      { cartOpen && (<div className="filter">filter</div>)}
      <Routes>
        <Route 
                path='/' exact 
                element={
                  <div className='contentWrapper'>
                    <div className="featured">
                      <h3 className="sectionTitle"> Featured</h3>
                      
                    </div>
                    <div className="allBooks">
                      <h3 className="sectionTitle"> All Books</h3>
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
                      
                    </div>
                  </div>
                }
        />





      </Routes>
      
    </div>
  )
}

export default Content
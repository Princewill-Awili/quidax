import './topbar.css'

import { useContext } from 'react'
import { states } from '../../utils/context'
import { useNavigate } from 'react-router-dom'

import {TbBooks} from 'react-icons/tb'
import {FiSearch as SearchIcon } from 'react-icons/fi'
import {MdOutlineShoppingCart as CartIcon} from 'react-icons/md'
import {BiArrowBack} from 'react-icons/bi'

const Topbar = () => {

  const {
    books,
    setFoundBooks,
    cartOpen, setCartOpen,
    cart,
    mobileSearch, setMobileSearch, 
    setSearchMode,
    query, setQuery} = useContext(states);

  const handleQuery = () => {
    const foundItems = books.filter(book => book.title[0].toLowerCase() === query[0].toLowerCase());
    setFoundBooks(foundItems);
  }

  const navigate = useNavigate();


  return (
    <div className='topbar'>

      <div className="tLeft">

        <div className="logoWrapper" onClick={() => navigate('/')}>
          <div className="logoBg" style={{cursor:"pointer"}}>
            <TbBooks className='logoIcon'/>
          </div>
          <div className="logoTxtWrapper">
            <span className="logoTxt" style={{cursor:"pointer"}}>Quidax Books</span>
            <span className="logoCaption">A flimsy book company</span>
          </div> 
        </div>

      </div>

      <div className="tCenter">
        <div className="searchWrapper">
          <input type="text" className="searchBar" placeholder='Search books, genres, authors, etc' value={query} onChange={(e)=>setQuery(e.target.value)} onSubmit={handleQuery}/>
          <div className="searchIconWrapper" onClick={()=>{
            handleQuery();
            setSearchMode(true);
          }}>
            <SearchIcon className='searchIcon'/>
          </div>
        </div>
      </div>

      <div className="tRight">

        <SearchIcon className='mobileSearchIcon' onClick={()=> {
          setMobileSearch(true);
          setSearchMode(true);
        }}/>
        
        <div className="logoBg logoRight">
          <TbBooks className='logoIcon'/>
        </div>

        <div className="cartWrapper" onClick={()=> setCartOpen(!cartOpen)}>
          <span className="bubble">{cart.length}</span>
          <CartIcon className='cartIcon'/>
        </div>

      </div>

      <div className="mobileSearch" style={{bottom: mobileSearch ? "0px":"100px"}} >
        <BiArrowBack  onClick={()=>{
            setMobileSearch(false);
            setSearchMode(false);
        }}/>
        <div className="mobileSearchBarWrapper">
          <input 
            type="text" 
            className="mobileSearchBar" 
            placeholder='Books, genres, author, etc.' 
            value={query}  
            onChange={(e) => setQuery(e.target.value)}
          />
          <div className="msiWrapper" onClick={handleQuery}>
            <SearchIcon/>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Topbar
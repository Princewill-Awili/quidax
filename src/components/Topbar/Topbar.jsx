import './topbar.css'

import { useState } from 'react'

import {TbBooks} from 'react-icons/tb'
import {FiSearch as SearchIcon } from 'react-icons/fi'
import {MdOutlineShoppingCart as CartIcon} from 'react-icons/md'
import {BiArrowBack} from 'react-icons/bi'
import {IoClose as Close} from 'react-icons/io5'


const Topbar = () => {

  const [mobileSearch, setMobileSearch] = useState(false);
 


  return (
    <div className='topbar'>

      <div className="tLeft">

        <div className="logoWrapper">
          <div className="logoBg">
            <TbBooks className='logoIcon'/>
          </div>
          <div className="logoTxtWrapper">
            <span className="logoTxt">Quidax Books</span>
            <span className="logoCaption">A flimsy book company</span>
          </div> 
        </div>

      </div>

      <div className="tCenter">
        <div className="searchWrapper">
          <input type="text" className="searchBar" placeholder='Search books, genres, authors, etc'/>
          <div className="searchIconWrapper">
            <SearchIcon className='searchIcon'/>
          </div>
        </div>
      </div>

      <div className="tRight">

        <SearchIcon className='mobileSearchIcon' onClick={()=> setMobileSearch(true)}/>
        
        <div className="logoBg logoRight">
          <TbBooks className='logoIcon'/>
        </div>

        <div className="cartWrapper">
          <span className="bubble">3</span>
          <CartIcon className='cartIcon'/>
        </div>

      </div>

      <div className="mobileSearch" style={{bottom: mobileSearch ? "0px":"100px"}} >
        <BiArrowBack  onClick={()=> setMobileSearch(false)}/>
      </div>
    </div>
  )
}

export default Topbar
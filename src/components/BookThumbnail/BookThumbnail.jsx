import './bookthumbnail.css'
import {MdPeopleOutline as People} from 'react-icons/md'
import {AiOutlineHeart as Likes ,AiFillStar as Rating} from 'react-icons/ai'
import { states } from '../../utils/context'
import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'


const BookThumbnail = ({title,author,img,ratings,releasedYear,tags,stock,followers,likes,genre, id}) => {

  const {books} = useContext(states);
  const navigate = useNavigate();
  
  const ratingFunc = (ratingsNum) => {
    const numUnfilled = Math.floor(5 - ratingsNum);
    const numFilled = Math.floor(ratingsNum);
    return [numFilled,numUnfilled];
  }

  const [filled,unfilled] = ratingFunc(ratings);

  const openBook = (e) => {
    console.log(e.currentTarget.id)
    const selectedBook = books.find(book => book.id === e.currentTarget.id)
    console.log(selectedBook);
    localStorage.setItem('selectedBook', JSON.stringify(selectedBook));
    navigate(`/book/${e.currentTarget.id}`);
  }
  
  return (
    <div className='bookthumbnail' onClick={e => openBook(e)} id={id}>
      <img src={img} alt="bgImg" className="backImg" />
        <div className="bookInfo">
          <span 
            className='stock' 
            style={{color:stock > 1 ? "#60A515" : "#EBA430"}}
          >
            {stock > 1 ? "Available" : "Out of Stock"}
          </span>

          <p className='bookTitle'>{title}</p>
          <span className="author">{author}</span>
          <span className="year">{releasedYear}</span>

          <p className="properties">Genre</p>
          <span className='answer'>{genre}</span>

          <p className="properties">Tags</p>
          <span className="answer">
            {
              /*tags.map((word,index)=>(
                <span key={index} id={index}>{word}</span>
              ))*/
            }
          </span>

          <div className="iconsBar">
            <div className="iconsBarLeft">
              <div className="iconsContainer">
                <People className='bookIcons'/>
                <span className="number">{followers}</span>
              </div>
              <div className="iconsContainer">
                <Likes className='bookIcons'/>
                <span className="number">{likes}</span>
              </div>
            </div>

            <div className="iconsBarCenter"></div>

            <div className="iconsBarRight">
            <span className="rating">Ratings: {ratings}</span>
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

          
        </div>
    </div>
  )
}

export default BookThumbnail
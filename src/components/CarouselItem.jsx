import React                              from 'react';
import {  connect }                       from 'react-redux';
import PropTypes                          from 'prop-types';
import { setFavorite,deleteFavorite }     from '../actions'
import PlayIcon                           from '../asset/static/play-icon.png';
import PlusIcon                           from '../asset/static/plus-icon.png';
import removeIcon                         from '../asset/static/remove-icon.png'
import { Link }                           from 'react-router-dom';
import '../asset/styles/components/CarouselItem.scss';


const CarouselItem = (props) =>{
  const {id,cover,title,year,contentRating,duration,isList }=props;
  const handleSetFavorite = ()=>{
    props.setFavorite(
      {
        id,cover,title,year,contentRating,duration
      }
    )
  }
  const handleDeleteFavorite = (itemId) =>{
    props.deleteFavorite(itemId)
  }

  return(
      <div className="carousel-item">
      <img className="carousel-item__img" src={cover} alt={title}  />
        <div className="carousel-item__details">
            <div>
              <Link to={`/player/${id}`}>
                <img 
                className="carousel-item__details--img" 
                src={PlayIcon}
                alt="Play Icon" /> 
              </Link>
              

              {isList ? 
                  <img
                  className="carousel-item__details--img" 
                  src={removeIcon} 
                  alt="Plus Icon"
                  onClick={()=>handleDeleteFavorite(id)}
                 /> 
                 :
                 <img 
                 className="carousel-item__details--img" 
                 src={PlusIcon} alt="Plus Icon"
                 onClick={handleSetFavorite}/> 
              }

             
            
            </div>
            <p className="carousel-item__details--title">{title}</p>
            <p className="carousel-item__details--subtitle">
              {`${year} ${contentRating} ${duration}`}
            </p>
        </div>
    </div>
  );
};
CarouselItem.propTypes={
  cover:PropTypes.string,
  title:PropTypes.string,
  year:PropTypes.number,
  contentRating:PropTypes.string,
  duration:PropTypes.number,
}

const mapDispathchToProps={
  setFavorite,
  deleteFavorite
}
export default connect(null,mapDispathchToProps)(CarouselItem);
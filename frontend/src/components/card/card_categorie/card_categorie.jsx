import React from 'react';
// import '../../card/card.css';
import './card_categorie.css';

const CardRecipe = ({ image, title, background_color, to }) => {

    const handleClick = () => {
        window.location.href = to;
    };
  
    return (
      <div className='card card_categorie' style={{ backgroundColor: background_color}}>
        <div className='border'>
          <h3>{title}</h3>
          <div className='image_container'>
            <img src={image} alt="categorie" />
          </div>
          <button onClick={handleClick} className='link-button'>
              Explorez
          </button>
        </div>

      </div>
    );
  };
  
  export default CardRecipe;
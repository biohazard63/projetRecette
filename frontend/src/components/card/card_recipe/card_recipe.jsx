import React from 'react';
// import '../../card/card.css';
import './card_recipe.css';

const CardRecipe = ({ image, title, icon_diet, icon_favorite, background_color }) => {

    const handleClick = () => {
        window.location.href = link;
    };
  
    return (
      <a className='card card_recipe' style={{ backgroundColor: background_color}}>
        <div className='card_image' style={{ backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.50) 0%, rgba(0, 0, 0, 0.50) 100%), url(${image})`, backgroundColor: 'lightgray', backgroundPosition: '50%', backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}>
            <h3>{title}</h3>
        </div>
        <div className='card_icons'>
            {/* <a>
                <img src={icon_diet} alt="diet" />                
            </a>
            <a>
                <img src={icon_favorite} alt="favorite" />
            </a> */}
            <button onClick={handleClick} className='link-button'>
                <img src={icon_diet} alt="diet" />  
            </button>
            <button onClick={handleClick} className='link-button'>
                <img src={icon_favorite} alt="favorite" />
            </button>
        </div>
      </a>
    );
  };
  
  export default CardRecipe;
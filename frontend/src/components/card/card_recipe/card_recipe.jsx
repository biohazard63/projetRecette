import React from 'react';
import { Link } from 'react-router-dom';
import './card_recipe.css';
import image_default from '../../../../public/images/recipes/pexels-klaus-nielsen-6287525.jpg';

const CardRecipe = ({ image, title, icon_favorite, id }) => {

    const maxTitleLength = 20;
    const truncatedTitle = title.length > maxTitleLength ? title.substring(0, maxTitleLength) + '...' : title;

    const handleClick = () => {
        window.location.href = link;
    };
  
    return (
        <div className='card card_recipe'>
            <Link to={`/recipes/${id}`} className='card_image' 
                style={image ? { 
                    backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.50) 0%, rgba(0, 0, 0, 0.50) 100%), url(${image})`, 
                    backgroundColor: 'lightgray', 
                    backgroundPosition: '50%', 
                    backgroundSize: 'cover', 
                    backgroundRepeat: 'no-repeat' 
                } : {
                    backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.50) 0%, rgba(0, 0, 0, 0.50) 100%), url(${image_default})`, 
                    backgroundColor: 'lightgray', 
                    backgroundPosition: '50%', 
                    backgroundSize: 'cover', 
                    backgroundRepeat: 'no-repeat' 
                }}
            >
                <h3>{truncatedTitle}</h3>
            </Link>
            <div className='card_icons'>
                {/* <button onClick={handleClick} className='link-button'>
                    <img src={icon_favorite} alt="favorite" />
                </button> */}
            </div>
        </div>
    );
  };
  
  export default CardRecipe;
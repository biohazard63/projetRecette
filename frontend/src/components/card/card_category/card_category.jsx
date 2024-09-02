import React from 'react';
import { Link } from 'react-router-dom';
import './card_category.css';

const CardCategory = ({ 
  // image, 
  title, id,
}) => {

    const handleClick = () => {
        window.location.href = to;
    };
  
    return (
      <div className='card card_categorie' >
        <div className='border'>
          <h3>{title}</h3>
          {/* <div className='image_container'>
            <img src={image} alt="categorie" />
          </div> */}
          <Link to={`/categories/${id}`} className='link-button'>
              Explorez
          </Link>
        </div>

      </div>
    );
  };
  
  export default CardCategory;
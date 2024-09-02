import React from 'react';
import './banner.css';
import icon_title from '../../../public/icons/element_title.svg';

import logo from '../../../public/images/Frigo_Magique1.svg';

const Banner = ({ image, title, subtitle, first_letter, text, bannerVariants, description, instructions, ingredients, appliance, servings }) => {
  return (
    <>
      <div className='container_banner'>
        <div className='container_logo'>
          <img src={logo} alt='logo' />
        </div>
        <div className='banner_text'>
          <h1>{title}</h1>
          <h2>{subtitle}</h2>
          <img className='icon_title' src={icon_title} alt="logo" />
          <p><span className='first_letter'>{first_letter}</span>{text}</p>
          {ingredients ? (
            <div className='ingredients'>
              {ingredients.map((ingredient, index) => (
                ingredient && ingredient.name ? (
                  <li key={index}>{ingredient.quantity} {ingredient.name}</li>                  
                ) : null
              ))}
            </div>
          ) : null}  
          {bannerVariants ? (
            <div className='buttons_banner'>
              {bannerVariants.map((link, index) => (
                <div key={index} href={link.to} className='button_banner' style={{ background: link.background }}>
                  <h3>{link.title}</h3>
                  <img src={link.icon} alt={link.title} />
                </div>
              ))}
            </div> 
          ) : (null
          )}
          {appliance ? (
            <div className='appliance'>
              <h3>Ustensile</h3>
              <img src={icon_title} alt="logo" />
              {appliance}
            </div>
          ) : (null
          )}     
          {servings ? (
            <div className='servings'>
              <h3>Portions</h3>
              <img src={icon_title} alt="logo" />
              pour {servings} personnes
            </div>
          ) : (null
          )}     
          {description ? (
            <div className='description'>
              <h3>Description</h3>
              <img src={icon_title} alt="logo" />
              {description}
            </div>
          ) : (null
          )}     
          {instructions ? (
            <div className='instructions'>
              <h3>Instructions</h3>
              <img src={icon_title} alt="logo" />
              {instructions}
            </div>
          ) : (null
          )}     
        </div>

            <div className='container_ImageBackgroundBanner'>
          {image ? (              
              <img src={image} alt="logo" />
          ) : (null
          )}                 
            </div>
  
      </div>    
    </>


  );
};

export default Banner;
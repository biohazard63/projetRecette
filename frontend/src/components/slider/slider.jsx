import React from 'react';
import './slider.css';
import { Link } from 'react-router-dom';
import CardRecipe from '../card/card_recipe/card_recipe';
import CardLink from '../card/card_link/card_link';
import CardCategory from '../card/card_category/card_category';

const Slider = ({ cardVariants, cardLink, title_main, type }) => {

  return (
    <>
      <div className='slider_container'>
        <h2>{title_main}</h2>
        <div className='slider'>
            {type === 'recipe' && cardVariants.map((card, index) => (
            <CardRecipe 
                key={index}
                image={card.image}
                title={card.title}
                to={card.to}
                id={card.id}
            />
            ))}
            {type === 'categorie' && cardVariants.map((card, index) => (
            <CardCategory 
                key={index}
                title={card.name}
            />
            ))}
            {cardLink.map((link, index) => (
            <CardLink 
                key={index}
                title_link={link.title_link}
                text_btn={link.text_btn}
                background_color={link.background_color}
                to={link.to}
            />
            ))}
        </div>
        

      </div>
    </>
  )
}

export default Slider

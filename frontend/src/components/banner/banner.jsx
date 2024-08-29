import React from 'react';
import './banner.css';
import logo from '/images/Frigo_Magique1.svg';
import icon_create from '/icons/icon_create.png';
import icon_wastage from '/icons/icon_wastage.png';
import icon_diet from '/icons/icon_diet.png';
import icon_publish from '/icons/icon_publish.png';
import ImageBackgroundBanner from '/images/ImageBackgroundBanner.png';

import { Link } from 'react-router-dom';

function Footer() {

  return (
    <>
      <div className='container_banner'>
        <div className='container_logo'>
          <img src={logo} alt="logo" />
        </div>
        <div className='banner_text'>
          <h1>Le Frigo Magique</h1>
          <h2>Bienvenue</h2>
          <p><span className='first_letter'>D</span>écouvrez le plaisir de créer et de partager vos recettes avec notre communauté gourmande et créative dans le thème de l’Anti-gaspi. Voici comment commencer :</p>
          <div className='buttons_banner'>
            <div className='button_banner'>
                <h3>Création</h3>
                <img src={icon_create} alt="logo" />
            </div>
            <div className='button_banner'>
                <h3>Anti-gaspi</h3>
                <img src={icon_wastage} alt="logo" />
            </div>
            <div className='button_banner'>
                <h3>Régime</h3>
                <img src={icon_diet} alt="logo" />
            </div>
            <div className='button_banner'>
                <h3>Publiez</h3>
                <img src={icon_publish} alt="logo" />
            </div>
          </div>
        </div>
        <div className='container_ImageBackgroundBanner'>
            <img src={ImageBackgroundBanner} alt="logo" />
        </div>
      </div>


    </>
  )
}

export default Footer

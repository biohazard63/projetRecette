import React from 'react';
import './banner.css';

import logo from '../../../public/images/Frigo_Magique1.svg';

const Banner = ({ image, title, subtitle, first_letter, text, bannerVariants }) => {
  return (
    <div className='container_banner'>
      <div className='container_logo'>
        <img src={logo} alt='logo' />
      </div>
      <div className='banner_text'>
        <h1>{title}</h1>
        <h2>{subtitle}</h2>
        <p><span className='first_letter'>{first_letter}</span>{text}</p>
        <div className='buttons_banner'>
          {bannerVariants.map((link, index) => (
            <a key={index} href={link.to} className='button_banner' style={{ background: link.background }}>
              <h3>{link.title}</h3>
              <img src={link.icon} alt={link.title} />
            </a>
          ))}
      </div> 
      </div>
        {image ? (
          <div className='container_ImageBackgroundBanner'>
            <img src={image} alt="logo" />
          </div>
        ) : (null
        )}     
    </div>

  );
};

export default Banner;
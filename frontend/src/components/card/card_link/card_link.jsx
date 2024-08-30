import React from 'react';
import '../../card/card.css';
import './card_link.css';

const CardLink = ({ title_link, background_color, text_btn, to }) => {

    const handleClick = () => {
      window.location.href = to;
    };


    return (
      <div className='card card_link' style={{ backgroundColor: background_color}}>
        <div className='card_border'>
            <h3>{title_link}</h3>
            {/* <a href={to}>
              <h4>{text_btn}</h4> 
            </a>           */}
            <button onClick={handleClick} className='link-button'>
              <h4>{text_btn}</h4> 
            </button>   
        </div>

      </div>
    );
  };
  
  export default CardLink;
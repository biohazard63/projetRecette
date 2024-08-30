import React from 'react';
import './slider.css';
import { Link } from 'react-router-dom';
import CardRecipe from '../card/card_recipe/card_recipe';
import CardLink from '../card/card_link/card_link';
import CardCategorie from '../card/card_categorie/card_categorie';

// import icon_vegetarian from '../../../public/icons/card/vegetarian.png';
// import icon_meat from '../../../public/icons/card/meat.png';
// import icon_favorite_empty from '../../../public/icons/card/favorite_empty.png';
// import icon_favorite_full from '../../../public/icons/card/favorite_full.png';
// import image_recette_1 from '../../../public/images/recipes/pexels-klaus-nielsen-6287525.jpg';

const Slider = ({ cardVariants, cardLink, title_main, type }) => {
    // const cardVariants = [
    //     { title: "Pâtes à la Bolognaise", image: image_recette_1, icon_diet: icon_meat, icon_favorite: icon_favorite_full, background_color: "#E27D60", to: "/create" },
    //     { title: "Pâtes à la Moutarde",image: image_recette_1, icon_diet: icon_vegetarian, icon_favorite: icon_favorite_empty, background_color: "#C56183", to: "/categories" },
    //     { title: "Pâtes à la Bolognaise", image: image_recette_1, icon_diet: icon_meat, icon_favorite: icon_favorite_full, background_color: "#E27D60", to: "/create" },
    //     { title: "Pâtes à la Moutarde",image: image_recette_1, icon_diet: icon_vegetarian, icon_favorite: icon_favorite_empty, background_color: "#C56183", to: "/categories" },
    //     { title: "Pâtes à la Bolognaise", image: image_recette_1, icon_diet: icon_meat, icon_favorite: icon_favorite_full, background_color: "#E27D60", to: "/create" },
    //     { title: "Pâtes à la Moutarde",image: image_recette_1, icon_diet: icon_vegetarian, icon_favorite: icon_favorite_empty, background_color: "#C56183", to: "/categories" },
    // ];

    // let title_main = 'Les dernières recettes';

    // const cardLink = [
    //     { title_link: "Les Recettes", background_color: "#F6C90E", text_btn: "Voir plus", to: "/recipes" },
    // ];


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
                icon_diet={card.icon_diet}
                icon_favorite={card.icon_favorite}
                background_color={card.background_color}
                to={card.to}
            />
            ))}
            {type === 'categorie' && cardVariants.map((card, index) => (
            <CardCategorie 
                key={index}
                image={card.image}
                title={card.title}
                background_color={card.background_color}
                to={card.to}
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

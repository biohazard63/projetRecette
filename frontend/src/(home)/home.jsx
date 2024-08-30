import React from 'react';
import Banner from '../components/banner/banner';
import icon_create from '/icons/icon_create.png';
import icon_wastage from '/icons/icon_wastage.png';
import icon_diet from '/icons/icon_diet.png';
import icon_publish from '/icons/icon_publish.png';
import ImageBackgroundBanner from '/images/ImageBackgroundBanner.png';
import Slider from '../components/slider/slider';


import icon_vegetarian from '../../public/icons/card/vegetarian.png';
import icon_meat from '../../public/icons/card/meat.png';
import icon_favorite_empty from '../../public/icons/card/favorite_empty.png';
import icon_favorite_full from '../../public/icons/card/favorite_full.png';
import image_recette_1 from '../../public/images/recipes/pexels-klaus-nielsen-6287525.jpg';

const Home = () => {
  let title = "Le Frigo Magique";
  let subtitle = "Bienvenue";
  let first_letter = "D";
  let text = "écouvrez le plaisir de créer et de partager vos recettes avec notre communauté gourmande et créative dans le thème de l’Anti-gaspi. Voici comment commencer :";
  
  const bannerVariants = [
    { title: "Création", icon: icon_create, background: "#E27D60", to: "/create" },
    { title: "Anti-gaspi", icon: icon_wastage, background: "#C56183", to: "/categories" },
    { title: "Régime", icon: icon_diet, background: "#77BA99", to: "/categories" },
    { title: "Publiez", icon: icon_publish, background: "#F6C90E", to: "/recipes" },
  ];

  let image = ImageBackgroundBanner;



  const cardRecipes = [
    { title: "Pâtes à la Bolognaise", image: image_recette_1, icon_diet: icon_meat, icon_favorite: icon_favorite_full, background_color: "#E27D60", to: "/create" },
    { title: "Pâtes à la Moutarde",image: image_recette_1, icon_diet: icon_vegetarian, icon_favorite: icon_favorite_empty, background_color: "#C56183", to: "/categories" },
    { title: "Pâtes à la Bolognaise", image: image_recette_1, icon_diet: icon_meat, icon_favorite: icon_favorite_full, background_color: "#E27D60", to: "/create" },
    { title: "Pâtes à la Moutarde",image: image_recette_1, icon_diet: icon_vegetarian, icon_favorite: icon_favorite_empty, background_color: "#C56183", to: "/categories" },
    { title: "Pâtes à la Bolognaise", image: image_recette_1, icon_diet: icon_meat, icon_favorite: icon_favorite_full, background_color: "#E27D60", to: "/create" },
    { title: "Pâtes à la Moutarde",image: image_recette_1, icon_diet: icon_vegetarian, icon_favorite: icon_favorite_empty, background_color: "#C56183", to: "/categories" },
  ];

  const cardCategories = [
    { title: "Entrées", image: image_recette_1, background_color: "#E27D60", to: "/categories" },
    { title: "Plats", image: image_recette_1,  background_color: "#C56183", to: "/categories" },
    { title: "Deserts", image: image_recette_1, background_color: "#E27D60", to: "/categories" },
  ];

  let title_recipe = 'Les dernières recettes';

  let title_categorie = 'Nos Categories';

  const cardLinkRecipe = [
      { title_link: "Les Recettes", background_color: "#F6C90E", text_btn: "Voir plus", to: "/recipes" },
  ];

  const cardLinkCategorie = [
      { title_link: "Les Catégories", background_color: "#F6C90E", text_btn: "Voir plus", to: "/recipes" },
  ];


  return (
    <div className='home'>
      <Banner 
        title={title}
        subtitle={subtitle} 
        first_letter={first_letter} 
        text={text} 
        image={image} 
        bannerVariants={bannerVariants} 
      />
      <Slider cardVariants={cardRecipes} cardLink={cardLinkRecipe} title_main={title_recipe} type="recipe" />
      <Slider cardVariants={cardCategories} cardLink={cardLinkCategorie} title_main={title_categorie} type="categorie" />
    </div>
  );
};

export default Home;
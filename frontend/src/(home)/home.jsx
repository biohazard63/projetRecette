import React, { useState, useEffect } from 'react';
import Banner from '../components/banner/banner';
import icon_create from '/icons/icon_create.png';
import icon_wastage from '/icons/icon_wastage.png';
import icon_diet from '/icons/icon_diet.png';
import icon_publish from '/icons/icon_publish.png';
import ImageBackgroundBanner from '/images/ImageBackgroundBanner.png';
import Slider from '../components/slider/slider';
import CardLink from '../components/card/card_link/card_link';

import './home.css';


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


  // const cardRecipes = [
  //   { title: "Pâtes à la Bolognaise", image: image_recette_1, icon_diet: icon_meat, icon_favorite: icon_favorite_full, background_color: "#E27D60", to: "/create" },
  //   { title: "Pâtes à la Moutarde",image: image_recette_1, icon_diet: icon_vegetarian, icon_favorite: icon_favorite_empty, background_color: "#C56183", to: "/categories" },
  //   { title: "Pâtes à la Bolognaise", image: image_recette_1, icon_diet: icon_meat, icon_favorite: icon_favorite_full, background_color: "#E27D60", to: "/create" },
  //   { title: "Pâtes à la Moutarde",image: image_recette_1, icon_diet: icon_vegetarian, icon_favorite: icon_favorite_empty, background_color: "#C56183", to: "/categories" },
  //   { title: "Pâtes à la Bolognaise", image: image_recette_1, icon_diet: icon_meat, icon_favorite: icon_favorite_full, background_color: "#E27D60", to: "/create" },
  //   { title: "Pâtes à la Moutarde",image: image_recette_1, icon_diet: icon_vegetarian, icon_favorite: icon_favorite_empty, background_color: "#C56183", to: "/categories" },
  // ];

  const cardCategories = [
    { title: "Entrées", image: image_recette_1, background_color: "#E27D60", to: "/categories" },
    { title: "Plats", image: image_recette_1,  background_color: "#C56183", to: "/categories" },
    { title: "Deserts", image: image_recette_1, background_color: "#E27D60", to: "/categories" },
  ];

  let title_recipe_main = 'Les dernières recettes';

  let title_categorie_main = 'Nos Categories';

  const cardLinkRecipe = [
      { title_link: "Les Recettes", background_color: "#F6C90E", text_btn: "Voir plus", to: "/recipes" },
  ];

  const cardLinkOurRecipe = [
      { title_link: "Parcourez nos recettes", background_color: "#77BA99", text_btn: "Voir plus", to: "/recipes" },
  ];

  const cardLinkYOourRecipe = [
      { title_link: "Créez votre recette", background_color: "#E27D60", text_btn: "Créez", to: "/recipes" },
  ];

  const cardLinkCategorie = [
      { title_link: "Les Catégories", background_color: "#F6C90E", text_btn: "Voir plus", to: "/recipes" },
  ];


  // useEffect(() => {
  //   const fetchRecipes = async () => {
  //     try {
  //       const response = await fetch('http://127.0.0.1:8000/api/recipes');
  //       const data = await response.json();
  //       if (response.ok) {
  //         setRecipes(data);
  //       } else {
  //         setError('Erreur lors de la récupération des recettes');
  //       }
  //     } catch (error) {
  //       setError('Erreur lors de la récupération des recettes');
  //     }
  //   };

  //   fetchRecipes();
  // }, []);


  const [recipes, setRecipes] = useState([]);
  const [categories, setCategories] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const response = await fetch('http://127.0.0.1:8000/api/recipes'); // Remplacez par l'URL de votre API
        if (!response.ok) {
          throw new Error('Erreur lors de la récupération des recettes');
        }
        const data = await response.json();
        setRecipes(data.slice(0, 10)); // Limiter à 10 recettes
      } catch (error) {
        setError('Erreur lors de la récupération des recettes');
      }
    };

    const fetchCategories = async () => {
      try {
        const response = await fetch('http://127.0.0.1:8000/api/categories'); // Remplacez par l'URL de votre API
        if (!response.ok) {
          throw new Error('Erreur lors de la récupération des catégories');
        }
        const data = await response.json();
        setCategories(data.slice(0, 10)); // Limiter à 10 catégories
      } catch (error) {
        setError('Erreur lors de la récupération des catégories');
      }
    };

    fetchRecipes();
    fetchCategories();
  }, []);


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



      {error && <p>{error}</p>}
      <Slider cardVariants={recipes} cardLink={cardLinkRecipe} title_main={title_recipe_main} type="recipe" />
      
      <div className='container_cards_link'>
        {cardLinkOurRecipe.map((link, index) => (

          <CardLink 
              key={index}
              title_link={link.title_link}
              text_btn={link.text_btn}
              background_color={link.background_color}
              to={link.to}
          />        
        ))}
        {cardLinkYOourRecipe.map((link, index) => (
          <CardLink
              key={index}
              title_link={link.title_link}
              text_btn={link.text_btn}
              background_color={link.background_color}
              to={link.to}
          />        
        ))}

      </div>

      <Slider cardVariants={categories} cardLink={cardLinkCategorie} title_main={title_categorie_main} type="categorie" />

    </div>
  );
};

export default Home;
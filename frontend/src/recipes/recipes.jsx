import React, { useState, useEffect } from 'react';
import ReactPaginate from 'react-paginate';
import './recipes.css';
import RecipesFilter from '../components/recipesFilter/recipesFilter';
import CardRecipe from '../components/card/card_recipe/card_recipe';

import Banner from '../components/banner/banner';
import icon_create from '/icons/icon_create.png';
import icon_wastage from '/icons/icon_wastage.png';
import icon_diet from '/icons/icon_diet.png';
import icon_publish from '/icons/icon_publish.png';


const Recipes = () => {
  let title = "Le Frigo Magique";
  let subtitle = "Bienvenue";
  let first_letter = "D";
  let text = "écouvrez le plaisir de créer et de partager vos recettes avec notre communauté gourmande et créative dans le thème de l’Anti-gaspi. Voici comment commencer :";
  const recipesPerPage = 6;
  const [currentPage, setCurrentPage] = useState(1);


  const bannerVariants = [
    { title: "Création", icon: icon_create, background: "#E27D60", to: "/create" },
    { title: "Anti-gaspi", icon: icon_wastage, background: "#C56183", to: "/categories" },
    { title: "Régime", icon: icon_diet, background: "#77BA99", to: "/categories" },
    { title: "Publiez", icon: icon_publish, background: "#F6C90E", to: "/recipes" },
  ];

  const [recipes, setRecipes] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const response = await fetch('http://127.0.0.1:8000/api/recipes');
        const data = await response.json();
        if (response.ok) {
          setRecipes(data);
        } else {
          setError('Erreur lors de la récupération des recettes');
        }
      } catch (error) {
        setError('Erreur lors de la récupération des recettes');
      }
    };

    fetchRecipes();
  }, []);

  const handlePageClick = (data) => {
    setCurrentPage(data.selected);
  };

  const offset = currentPage * recipesPerPage;
  const currentRecipes = recipes.slice(offset, offset + recipesPerPage);
  const pageCount = Math.ceil(recipes.length / recipesPerPage);

  return (
    <>
      <Banner 
        title={title}
        subtitle={subtitle} 
        first_letter={first_letter} 
        text={text} 
        bannerVariants={bannerVariants} 
      />
      <div className='recipes'>
        <h2>Nos recettes</h2>
        <div className='filterSection'>
          <RecipesFilter />
        </div>
        <h2>Page {currentPage}</h2>
        <div className='cardContainer'>
          {/* {currentCards.map(card => (
            <div className='card card_recipe' key={card.id}>{card.title}</div>
          ))} */}

          {error && <p>{error}</p>}

          {currentRecipes.map((card, index) => (
            <CardRecipe 
                key={index}
                image={card.image}
                title={card.title}
                // icon_diet={card.icon_diet}
                // icon_favorite={card.icon_favorite}
                // background_color={card.background_color}
                to={card.to}
                id={card.id}
            />
          ))} 
          <div className='pagination_container'>
            <ReactPaginate
              previousLabel={"<"}
              nextLabel={">"}
              breakLabel={"..."}
              pageCount={pageCount}
              marginPagesDisplayed={2}
              pageRangeDisplayed={5}
              onPageChange={handlePageClick}
              containerClassName={"pagination"}
              activeClassName={"active"}
            />
          </div>
        </div>
        {/* <div className='pagination'>
          {renderPageNumbers()}
        </div> */}


        {/* <div>

            {error && <p>{error}</p>}
          <ul>
            {recipes.map((recipe) => (
              <li key={recipe.id}>
                <h2>{recipe.title}</h2>
                <p>{recipe.description}</p>
                <p>{recipe.instructions}</p>
              </li>
            ))}
          </ul>
        </div> */}
      </div>    
    </>

  );
};

export default Recipes;

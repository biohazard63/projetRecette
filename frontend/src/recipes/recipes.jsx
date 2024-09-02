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


  // const allCards = new Array(500).fill(null).map((_, index) => ({ id: index, title: `Recipe ${index + 1}` }));
  // const [currentPage, setCurrentPage] = useState(1);
  // const [cardsPerPage] = useState(9);

  // const indexOfLastCard = currentPage * cardsPerPage;
  // const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  // const currentCards = allCards.slice(indexOfFirstCard, indexOfLastCard);
  // const totalPages = Math.ceil(allCards.length / cardsPerPage);

  // const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // // Affiche les contrôles de pagination avec des ellipses et des boutons de saut
  // const renderPageNumbers = () => {
  //   let pages = [];
  //   let leftSide = currentPage - 2;
  //   let rightSide = currentPage + 2;

  //   if (leftSide <= 1) {
  //     rightSide = 5;
  //     leftSide = 1;
  //   }
  //   if (rightSide >= totalPages) {
  //     leftSide = totalPages - 4;
  //     rightSide = totalPages;
  //     if (leftSide <= 1) leftSide = 1;
  //   }

  //   for (let number = leftSide; number <= rightSide; number++) {
  //     if (number > 0 && number <= totalPages) {
  //       pages.push(number);
  //     }
  //   }


  const handlePageClick = (data) => {
    setCurrentPage(data.selected);
  };

  const offset = currentPage * recipesPerPage;
  const currentRecipes = recipes.slice(offset, offset + recipesPerPage);
  const pageCount = Math.ceil(recipes.length / recipesPerPage);

  //   return (
  //     <>
  //       {currentPage > 1 && (
  //         <>
  //           <button onClick={() => paginate(1)}>{"<<"}</button>
  //           <button onClick={() => paginate(currentPage - 1)}>{"<"}</button>
  //         </>
  //       )}
  //       {leftSide > 1 && <button onClick={() => paginate(leftSide - 1)}>...</button>}
  //       {pages.map(number => (
  //         <button key={number} onClick={() => paginate(number)} className={currentPage === number ? 'active' : ''}>
  //           {number}
  //         </button>
  //       ))}
  //       {rightSide < totalPages && <button onClick={() => paginate(rightSide + 1)}>...</button>}
  //       {currentPage < totalPages && (
  //         <>
  //           <button onClick={() => paginate(currentPage + 1)}>{">"}</button>
  //           <button onClick={() => paginate(totalPages)}>{">>"}</button>
  //         </>
  //       )}
  //     </>
  //   );
  // };

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

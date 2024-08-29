import React, { useState } from 'react';
import './recipes.css';
import RecipesFilter from '../components/recipesFilter/recipesFilter';

const Recipes = () => {
  const allCards = new Array(500).fill(null).map((_, index) => ({ id: index, title: `Recipe ${index + 1}` }));
  const [currentPage, setCurrentPage] = useState(1);
  const [cardsPerPage] = useState(9);

  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  const currentCards = allCards.slice(indexOfFirstCard, indexOfLastCard);
  const totalPages = Math.ceil(allCards.length / cardsPerPage);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // Affiche les contrôles de pagination avec des ellipses et des boutons de saut
  const renderPageNumbers = () => {
    let pages = [];
    let leftSide = currentPage - 2;
    let rightSide = currentPage + 2;

    if (leftSide <= 1) {
      rightSide = 5;
      leftSide = 1;
    }
    if (rightSide >= totalPages) {
      leftSide = totalPages - 4;
      rightSide = totalPages;
      if (leftSide <= 1) leftSide = 1;
    }

    for (let number = leftSide; number <= rightSide; number++) {
      if (number > 0 && number <= totalPages) {
        pages.push(number);
      }
    }

    return (
      <>
        {currentPage > 1 && (
          <>
            <button onClick={() => paginate(1)}>{"<<"}</button>
            <button onClick={() => paginate(currentPage - 1)}>{"<"}</button>
          </>
        )}
        {leftSide > 1 && <button onClick={() => paginate(leftSide - 1)}>...</button>}
        {pages.map(number => (
          <button key={number} onClick={() => paginate(number)} className={currentPage === number ? 'active' : ''}>
            {number}
          </button>
        ))}
        {rightSide < totalPages && <button onClick={() => paginate(rightSide + 1)}>...</button>}
        {currentPage < totalPages && (
          <>
            <button onClick={() => paginate(currentPage + 1)}>{">"}</button>
            <button onClick={() => paginate(totalPages)}>{">>"}</button>
          </>
        )}
      </>
    );
  };

  return (
    <div className='recipes'>
      <h2>Nos recettes</h2>
      <div className='filterSection'>
        <RecipesFilter />
      </div>
      <h2>Page {currentPage}</h2>
      <div className='cardContainer'>
        {currentCards.map(card => (
          <div className='card' key={card.id}>{card.title}</div>
        ))}
      </div>
      <div className='pagination'>
        {renderPageNumbers()}
      </div>
    </div>
  );
};

export default Recipes;

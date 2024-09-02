import React, { useState, useEffect } from 'react';
import './categories.css';
import ReactPaginate from 'react-paginate';
import CardCategory from '../components/card/card_category/card_category';

import Banner from '../components/banner/banner';
import icon_wastage from '/icons/icon_wastage.png';
import icon_diet from '/icons/icon_diet.png';

const bannerVariants = [
  { title: "Ingrédients", icon: icon_wastage, background: "#C56183", to: "/categories" },
  { title: "Filtrez", icon: icon_diet, background: "#77BA99", to: "/categories" },
];

const Categories = () => {
  let title = "Les Catégories";
  let subtitle = "Nos Catégories";
  let first_letter = "D";
  let text = "écouvrez nos catégories :";

  const [categories, setCategories] = useState([]);
  const [error, setError] = useState('');

  const categoriesPerPage = 6;
  const [currentPage, setCurrentPage] = useState(1);


  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch('http://127.0.0.1:8000/api/categories');
        const data = await response.json();
        if (response.ok) {
          setCategories(data);
        } else {
          setError('Erreur lors de la récupération des catégories');
        }
      } catch (error) {
        setError('Erreur lors de la récupération des catégories');
      }
    };

    fetchCategories();
  }, []);


  // const allCards = new Array(500).fill(null).map((_, index) => ({ id: index, title: `Category ${index + 1}` }));
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
  
    const offset = currentPage * categoriesPerPage;
    const currentRecipes = categories.slice(offset, offset + categoriesPerPage);
    const pageCount = Math.ceil(categories.length / categoriesPerPage);

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
        bannerVariants={bannerVariants} />
      <div className='recipes'>
        <h2>Page {currentPage}</h2>
        <div className='cardContainer'>
          {error && <p>{error}</p>}
          {categories.map((card, index) => (
            <CardCategory 
                key={index}
                title={card.name}
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
      </div>
    </>

  );
};

export default Categories;

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

  const categoriesPerPage = 8;
  const [currentPage, setCurrentPage] = useState(0);


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



  const handlePageClick = (data) => {
    setCurrentPage(data.selected);
  };

  const offset = currentPage * categoriesPerPage;
  const currentCategories = categories.slice(offset, offset + categoriesPerPage);
  const pageCount = Math.ceil(categories.length / categoriesPerPage);

  return (
    <>
      <Banner
        title={title}
        subtitle={subtitle}
        first_letter={first_letter}
        text={text}
        bannerVariants={bannerVariants} />
      <div className='recipes'>
        <h2>Page {currentPage + 1}</h2>
        <div className='cardContainer'>
          {error && <p>{error}</p>}
          {currentCategories.map((card, index) => (
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
              pageRangeDisplayed={2}
              onPageChange={handlePageClick}
              containerClassName={"pagination"}
              activeClassName={"active"}
            />
          </div>
        </div>
      </div>
    </>

  );
};

export default Categories;

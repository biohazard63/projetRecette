import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const Categories = () => {
  const { categoryId } = useParams(); // Récupère l'identifiant de la catégorie depuis l'URL
  const [recipes, setRecipes] = useState([]);
  const [category, setCategory] = useState({});
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchCategoryDetails = async () => {
      try {
        const response = await fetch(`http://127.0.0.1:8000/api/categories/${categoryId}`);
        const data = await response.json();
        if (response.ok) {
          setCategory(data);
        } else {
          setError('Erreur lors de la récupération des détails de la catégorie');
        }
      } catch (error) {
        setError('Erreur lors de la récupération des détails de la catégorie');
      }
    };

    const fetchRecipes = async () => {
      try {
        const response = await fetch(`http://127.0.0.1:8000/api/categories/${categoryId}/recipes`);
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

    fetchCategoryDetails();
    fetchRecipes();
  }, [categoryId]);

  return (
    <div>
        {/* <Banner 
            title={category.name}
            subtitle={subtitle} 
            first_letter={first_letter} 
            text={text} 
            bannerVariants={bannerVariants} 
        /> */}
      <h1>Les Recettes de la Catégorie {category.name}</h1>
      {error && <p>{error}</p>}
      <ul>
      {recipes.map((card, index) => (
            <CardRecipe 
                key={index}
                image={card.image}
                title={card.title}
                to={card.to}
                id={card.id}
            />
          ))} 
      </ul>
    </div>
  );
};

export default Categories;
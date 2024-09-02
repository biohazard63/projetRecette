import React, { useState, useEffect, useMemo } from 'react';
import ReactPaginate from 'react-paginate';
import './recipes.css';
import CardRecipe from '../components/card/card_recipe/card_recipe';
import Banner from '../components/banner/banner';
import icon_create from '/icons/icon_create.png';
import icon_wastage from '/icons/icon_wastage.png';
import icon_diet from '/icons/icon_diet.png';
import icon_publish from '/icons/icon_publish.png';
import axios from 'axios';

const Recipes = () => {
  const title = "Le Frigo Magique";
  const subtitle = "Bienvenue";
  const first_letter = "D";
  const text = "écouvrez le plaisir de créer et de partager vos recettes avec notre communauté gourmande et créative dans le thème de l’Anti-gaspi. Voici comment commencer :";
  const recipesPerPage = 6;
  const [currentPage, setCurrentPage] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedIngredient, setSelectedIngredient] = useState('');
  const [categories, setCategories] = useState([]);
  const [ingredients, setIngredients] = useState([]);
  const [recipes, setRecipes] = useState([]);
  const [recipeIngredients, setRecipeIngredients] = useState([]);
  const [error, setError] = useState('');


  const bannerVariants = [
    { title: "Création", icon: icon_create, background: "#E27D60", to: "/create" },
    { title: "Anti-gaspi", icon: icon_wastage, background: "#C56183", to: "/categories" },
    { title: "Régime", icon: icon_diet, background: "#77BA99", to: "/categories" },
    { title: "Publiez", icon: icon_publish, background: "#F6C90E", to: "/recipes" },
  ];

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [recipesResponse, categoriesResponse, ingredientsResponse, recipeIngredientsResponse] = await Promise.all([
          axios.get('http://127.0.0.1:8000/api/recipes'),
          axios.get('http://127.0.0.1:8000/api/categories'),
          axios.get('http://127.0.0.1:8000/api/ingredients'),
          axios.get('http://127.0.0.1:8000/api/recipe-ingredients')
        ]);

        setRecipes(recipesResponse.data);
        setCategories(categoriesResponse.data);
        setIngredients(ingredientsResponse.data);
        setRecipeIngredients(recipeIngredientsResponse.data);
      } catch (error) {
        setError('Erreur lors de la récupération des données');
      }
    };

    fetchData();
  }, []);

  const handlePageClick = (data) => {
    setCurrentPage(data.selected);
  };

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
    setCurrentPage(0); // Reset to first page after filter change
  };

  const handleIngredientChange = (e) => {
    setSelectedIngredient(e.target.value);
    setCurrentPage(0); // Reset to first page after filter change
  };

  // Memorize the filtered recipes to optimize performance
  const filteredRecipes = useMemo(() => {
    return recipes.filter(recipe => {
      const matchesCategory = selectedCategory === '' || recipe.category_id === parseInt(selectedCategory); // Adjust if needed
      const matchesIngredient = selectedIngredient === '' || recipeIngredients.some(ri => ri.recipe_id === recipe.id && ri.ingredient_id === parseInt(selectedIngredient));
      return matchesCategory && matchesIngredient;
    });
  }, [recipes, recipeIngredients, selectedCategory, selectedIngredient]);

  const offset = currentPage * recipesPerPage;
  const currentRecipes = filteredRecipes.slice(offset, offset + recipesPerPage);
  const pageCount = Math.ceil(filteredRecipes.length / recipesPerPage);

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
          <label htmlFor="category">Catégorie :</label>
          <select id="category" value={selectedCategory} onChange={handleCategoryChange}>
            <option value="">Toutes</option>
            {categories.map(category => (
              <option key={category.id} value={category.id}>{category.name}</option>
            ))}
          </select>

          <label htmlFor="ingredient">Ingrédient :</label>
          <select id="ingredient" value={selectedIngredient} onChange={handleIngredientChange}>
            <option value="">Tous</option>
            {ingredients.map(ingredient => (
              <option key={ingredient.id} value={ingredient.id}>{ingredient.name}</option>
            ))}
          </select>
        </div>
        <h2>Page {currentPage + 1}</h2>
        <div className='cardContainer'>
          {error && <p>{error}</p>}
          {currentRecipes.map((card, index) => (
            <CardRecipe 
                key={index}
                image={card.image}
                title={card.title}
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
              marginPagesDisplayed={5}
              pageRangeDisplayed={5}
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

export default Recipes;

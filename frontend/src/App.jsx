import React, { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';

import './App.css';
import Header from './components/header/header';
import Footer from './components/footer/footer';

import Home from './(home)/home';
import Recipes from './recipes/recipes';
import GetRecipe from './recipe/get/recipe';
import Categories from './categories/categories';
import Login from './auth/login/login';
import Register from './auth/register/register';
import Account from './account/account';
import CreateRecipe from './recipe/create/create';
import UpdateRecipe from './recipe/update/update';
import DeleteRecipe from './recipe/delete/delete';
import Legals from './legals/legals';
import MyRecipe from './myrecipes/myrecipes';
import Category from './category/get/category';

function App() {
  const location = useLocation();
  const showFooter = location.pathname !== '/login' && location.pathname !== '/register';

  return (
    <>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/recipes" element={<Recipes />} />
          <Route path="/recipes/:id" element={<GetRecipe />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/account" element={<Account />} />
          <Route path="/recipes/new" element={<CreateRecipe />} />
          <Route path="/recipes/:id/edit" element={<UpdateRecipe />} />
          <Route path="/recipes/:id/delete" element={<DeleteRecipe />} />
          <Route path="/myrecipes" element={<MyRecipe />} />
          <Route path="/legals" element={<Legals />} />
          <Route path="/categories/:categoryId" element={<Category />} />
        </Routes>
        {showFooter && <Footer />}
    </>
  );
}

export default App;

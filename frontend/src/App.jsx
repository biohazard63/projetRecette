import React from 'react';

import './App.css';
import Header from './components/header/header';
import Footer from './components/footer/footer';
import { Routes, Route } from 'react-router-dom';

import Home from './(home)/home';
import Recipes from './recipes/recipes';
import Categories from './categories/categories';
import Login from './auth/login/login';
import Register from './auth/register/register';
import Account from './account/account';
import Create from './create/create';
import Legals from './legals/legals';
import MyRecipe from './myrecipes/myrecipes';


function App() {
  return (
    <>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/recipes" element={<Recipes />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/account" element={<Account />} />
          <Route path="/create" element={<Create />} />
          <Route path="/myrecipes" element={<MyRecipe />} />
          <Route path="/legals" element={<Legals />} />
        </Routes>
        <Footer />
    </>
  );
}

export default App;
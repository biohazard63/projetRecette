import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';

import './App.css';
import Header from './components/header/header';
import Footer from './components/footer/footer';

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
  const location = useLocation();
  const showFooter = location.pathname !== '/login' && location.pathname !== '/register';

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
        {showFooter && <Footer />}
    </>
  );
}

export default App;

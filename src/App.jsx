import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/header/Header';
import Home from './Pages/Home/Home';
import AddRecipes from './Pages/Add/AddRecipes';
import ReceipeFavorite from './Pages/Favorite/RecipeFavorite';
import RecipeDetail from './components/recipes/details/RecipeDetail';
import './App.scss';
import Footer from './components/footer/footer';

function App() {
  const [favorites, setFavorites] = useState(() => { // Je déclare une variable favorites et setFavorites qui est une fonction qui me permettra de modifier la variable favorites
    const savedFavorites = localStorage.getItem('favorites'); // Je récupère les favoris stockés dans le localStorage
    return savedFavorites ? JSON.parse(savedFavorites) : []; // Si savedFavorites existe, je le parse en JSON, sinon je retourne un tableau vide
  });

  const handleRemoveFromFavorites = (recipe) => { // Je crée une fonction handleRemoveFromFavorites qui prend en paramètre recipe
    const updatedFavorites = favorites.filter(fav => fav._id !== recipe._id); // Je crée une constante updatedFavorites qui est égale à tous les favoris sauf celui qui a le même id que recipe
    setFavorites(updatedFavorites);   // Je mets à jour les favoris avec updatedFavorites
    localStorage.setItem('favorites', JSON.stringify(updatedFavorites)); // Je stocke updatedFavorites dans le localStorage
  };

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home favorites={favorites} setFavorites={setFavorites} />} /> {/* Je crée une route pour la page d'accueil */}
        <Route path="/addReceipes" element={<AddRecipes />} /> {/* Je crée une route pour la page d'ajout de recettes */}
        <Route path="/ReceipeFavorite" element={<ReceipeFavorite favorites={favorites} onRemove={handleRemoveFromFavorites} />} /> {/* Je crée une route pour la page des recettes favorites */}
        <Route path="/recipe/:id" element={<RecipeDetail />} /> {/* Je crée une route pour la page de détail d'une recette */}
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
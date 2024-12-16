import React from 'react';
import { NavLink } from 'react-router-dom';
import './header.scss';
import SearchBar from '../recipes/search/SearchBar'; // Importation du composant SearchBar

const Header = () => {
  return (
    <header>
      <nav>
        <div className="logo-container">
          <NavLink to="/">
            <img src="./logo_CNA.png" alt="CNA Logo" className="logo" /> {/* Remplacez /path/to/logo-cna.png par le chemin réel de votre logo */}
          </NavLink>
        </div>
        <SearchBar /> {/* Utilisation du composant SearchBar */}
        <ul>
          <li>
            <NavLink to="/" className={({ isActive }) => (isActive ? 'active' : '')}>
              Accueil
            </NavLink>
          </li>
          <li>
            <NavLink to="/addReceipes" className={({ isActive }) => (isActive ? 'active' : '')}>
              Ajouter des recettes
            </NavLink>
          </li>
          <li>
            <NavLink to="/ReceipeFavorite" className={({ isActive }) => (isActive ? 'active' : '')}>
              Mes favoris
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
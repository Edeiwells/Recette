import React from 'react';
import './recipeFilter.scss';

const RecipeFilter = ({ types, categories, selectedType, selectedCategory, onTypeChange, onCategoryChange }) => { // Je crée un composant RecipeFilter qui prend en paramètre types, categories, selectedType, selectedCategory, onTypeChange et onCategoryChange
  return (
    <div className="recipe-filter"> 
      <select value={selectedType} onChange={(e) => onTypeChange(e.target.value)}> {/* Je crée un select avec la valeur selectedType et un onChange qui appelle onTypeChange avec la valeur sélectionnée */}
        <option value="">Tout types</option> {/* Je crée une option par défaut */}
        {types.map((type) => ( // Je mappe les types pour créer une option par type
          <option key={type} value={type}>{type}</option> // Je crée une option avec la valeur type
        ))}
      </select>
      <select value={selectedCategory} onChange={(e) => onCategoryChange(e.target.value)}> {/* Je crée un select avec la valeur selectedCategory et un onChange qui appelle onCategoryChange avec la valeur sélectionnée */}
        <option value="">Toutes catégories</option> {/* Je crée une option par défaut */}
        {categories.map((category) => ( // Je mappe les catégories pour créer une option par catégorie
          <option key={category} value={category}>{category}</option>  // Je crée une option avec la valeur category
        ))}
      </select>
    </div>
  );
};

export default RecipeFilter;
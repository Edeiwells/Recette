import React from 'react';
import { Link } from 'react-router-dom';
import './recipeCard.scss';

const RecipeCard = ({ recipe, onFavorite, onRemove, onDelete, isFavorite, showDeleteButton }) => {
  const handleFavoriteClick = () => {
    if (onFavorite) {
      onFavorite(recipe);
    }
  };

  const handleRemoveClick = () => {
    if (onRemove) {
      const confirmRemove = window.confirm('Are you sure you want to remove this recipe from favorites?');
      if (confirmRemove) {
        onRemove(recipe);
      }
    }
  };

  const handleDeleteClick = () => {
    if (onDelete) {
      const confirmDelete = window.confirm('Are you sure you want to delete this recipe?');
      if (confirmDelete) {
        onDelete(recipe._id);
      }
    }
  };

  return (
    <div className="recipe-card">
      <Link to={`/recipe/${recipe._id}`}>
        <img src={recipe.img} alt={recipe.title} />
        <h3>{recipe.title}</h3>
        <p>Temps de préparation: {recipe.preparationTime} mins</p>
      </Link>
      {onFavorite && (
        <button
          onClick={handleFavoriteClick}
          disabled={isFavorite}
          className={isFavorite ? 'favorite-button disabled' : 'favorite-button'}
        >
          {isFavorite ? 'En favoris' : 'Ajouter aux favoris'} <i className="fas fa-star"></i> 
        </button>
      )}
      {onRemove && (
        <button className="remove-button" onClick={handleRemoveClick}>
          Supprimer <i className="fas fa-trash"></i> 
        </button>
      )}
      {showDeleteButton && (
        <button className="delete-button" onClick={handleDeleteClick}>
          Supprimer <i className="fas fa-trash"></i> 
        </button>
      )}
    </div>
  );
};

export default RecipeCard;
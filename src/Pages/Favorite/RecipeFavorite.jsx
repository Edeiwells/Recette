import React from 'react';
import RecipeCard from '../../components/recipes/cards/RecipeCard';
import './recipeFavorite.scss'; 

function ReceipeFavorite({ favorites, onRemove }) {
  return (
    <div className="recipe-favorite">
      <h1 className="title">Mes recettes favorites</h1> 
      <div className="recipe-list">
        {favorites.length > 0 ? ( // Si favorites contient des recettes
          favorites.map((recipe) => ( // Je mappe les recettes pour créer un RecipeCard par recette
            <RecipeCard // Je crée un RecipeCard
              key={recipe._id} // Je définis la clé de RecipeCard avec l'id de la recette
              recipe={recipe} // Je passe la recette en props
              onRemove={onRemove} // Je passe la fonction onRemove en props
              showDeleteButton={false} // Je passe showDeleteButton à false
            />
          ))
        ) : (
          <p className="error-message">Aucune recette favorite trouvée.</p> // Si favorites est vide, j'affiche un message d'erreur
        )}
      </div>
    </div>
  );
}

export default ReceipeFavorite;
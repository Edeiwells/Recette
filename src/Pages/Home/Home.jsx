import React, { useEffect, useReducer } from 'react'; // j'importe useEffect et useReducer
import RecipeCard from '../../components/recipes/cards/RecipeCard.jsx'; // j'importe RecipeCard
import RecipeFilter from '../../components/recipes/Filter/RecipeFilter.jsx'; // j'importe RecipeFilter
import './home.scss'; // j'importe home.scss
import axios from 'axios'; // j'importe axios

const initialState = { // je crée une constante initialState
  recipes: [], // je crée une propriété recipes qui est un tableau vide
  selectedType: '', // je crée une propriété selectedType qui est une chaîne de caractères vide
  selectedCategory: '', // je crée une propriété selectedCategory qui est une chaîne de caractères vide
};

const reducer = (state, action) => { // je crée une fonction reducer qui prend en paramètre state et action
  switch (action.type) { // je crée un switch qui prend en paramètre action.type
    case 'SET_RECIPES': // si action.type est égal à 'SET_RECIPES'
      return { ...state, recipes: action.payload }; // je retourne un objet qui contient toutes les propriétés de state et je remplace recipes par action.payload
    case 'SET_SELECTED_TYPE': // si action.type est égal à 'SET_SELECTED_TYPE'
      return { ...state, selectedType: action.payload };  // je retourne un objet qui contient toutes les propriétés de state et je remplace selectedType par action.payload
    case 'SET_SELECTED_CATEGORY':  // si action.type est égal à 'SET_SELECTED_CATEGORY'
      return { ...state, selectedCategory: action.payload }; // je retourne un objet qui contient toutes les propriétés de state et je remplace selectedCategory par action.payload
    default:
      return state; // je retourne state par défaut
  }
};

function Home({ favorites, setFavorites }) { // je crée une fonction Home qui prend yyyyyyyen paramètre favorites et setFavorites
  const [state, dispatch] = useReducer(reducer, initialState); // je crée une constante state et dispatch qui utilise useReducer avec reducer et initialState

  useEffect(() => {
    const fetchRecipes = async () => { // je crée une fonction fetchRecipes
      try {
        const response = await axios.get('http://localhost:5000/recipes'); // je crée une constante response qui attend la réponse de axios.get('http://localhost:5000/recipes')
        dispatch({ type: 'SET_RECIPES', payload: response.data }); // je dispatch l'action 'SET_RECIPES' avec comme payload response.data
      } catch (error) { // si une erreur est attrapée
        console.error('Error fetching recipes:', error); // j'affiche une erreur dans la console
      }
    };

    fetchRecipes(); // j'appelle la fonction fetchRecipes
  }, []); // je passe un tableau vide en deuxième paramètre

  const handleAddToFavorites = (recipe) => { // je crée une fonction handleAddToFavorites qui prend en paramètre recipe
    const updatedFavorites = [...favorites, recipe]; // je crée une constante updatedFavorites qui est un tableau contenant tous les éléments de favorites et recipe
    setFavorites(updatedFavorites); // j'appelle la fonction setFavorites avec updatedFavorites en paramètre
    localStorage.setItem('favorites', JSON.stringify(updatedFavorites)); // je stocke updatedFavorites dans le localStorage
  };

  const handleDeleteRecipe = async (recipeId) => {
    try {
      await axios.delete(`http://localhost:5000/recipes/${recipeId}`);
      dispatch({ type: 'SET_RECIPES', payload: state.recipes.filter(recipe => recipe._id !== recipeId) });
    } catch (error) {
      console.error('Error deleting recipe:', error);
    }
  };

  const filteredRecipes = state.recipes.filter((recipe) => { // je crée une constante filteredRecipes qui est égale à state.recipes.filter
    return ( // je retourne
      (state.selectedType === '' || recipe.type === state.selectedType) && // si selectedType est égal à une chaîne de caractères vide ou si recipe.type est égal à selectedType
      (state.selectedCategory === '' || recipe.category === state.selectedCategory) // et si selectedCategory est égal à une chaîne de caractères vide ou si recipe.category est égal à selectedCategory
    );
  });

  const types = [...new Set(state.recipes.map(recipe => recipe.type))]; // je crée une constante types qui est égale à un tableau contenant toutes les valeurs uniques de state.recipes.map(recipe => recipe.type)
  const categories = [...new Set(state.recipes.map(recipe => recipe.category))]; // je crée une constante categories qui est égale à un tableau contenant toutes les valeurs uniques de state.recipes.map(recipe => recipe.category)

  return (
    <>
      <RecipeFilter // je retourne RecipeFilter
        types={types} // je passe types en paramètre
        categories={categories} // je passe categories en paramètre
        selectedType={state.selectedType} // je passe selectedType en paramètre
        selectedCategory={state.selectedCategory} // je passe selectedCategory en paramètre
        onTypeChange={(type) => dispatch({ type: 'SET_SELECTED_TYPE', payload: type })} // je passe une fonction qui dispatch l'action 'SET_SELECTED_TYPE' avec comme payload type
        onCategoryChange={(category) => dispatch({ type: 'SET_SELECTED_CATEGORY', payload: category })} // je passe une fonction qui dispatch l'action 'SET_SELECTED_CATEGORY' avec comme payload category
      />
      <div className="recipe-list"> 
        {filteredRecipes.length > 0 ? ( // si filteredRecipes.length est supérieur à 0
          filteredRecipes.map((recipe) => ( // je map filteredRecipes
            <RecipeCard  // je retourne RecipeCard avec recipe en paramètre
              key={recipe._id} // je passe recipe._id en paramètre
              recipe={recipe} // je passe recipe en paramètre
              onFavorite={handleAddToFavorites} // je passe handleAddToFavorites en paramètre
              isFavorite={favorites.some(fav => fav._id === recipe._id)} // je passe une valeur booléenne qui vérifie si recipe._id est présent dans favorites
              showDeleteButton={true} // je passe une valeur booléenne true
              onDelete={handleDeleteRecipe} // Ajoutez cette ligne pour passer la fonction de suppression
            />
          ))
        ) : (
          <p className="error-message">404 Not Found</p> // je retourne un paragraphe avec le message '404 Not Found'
        )}
      </div>
    </>
  );
}

export default Home;
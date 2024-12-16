import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './recipeDetail.scss';

const RecipeDetail = () => { // je crée une fonction RecipeDetail
  const { id } = useParams(); // je récupère l'id de l'url
  const [recipe, setRecipe] = useState(null); // je crée une variable recipe et une fonction setRecipe qui me permettra de modifier la variable recipe

  useEffect(() => { // je crée une fonction fetchRecipe qui me permettra de récupérer les données de la recette
    const fetchRecipe = async () => { // je crée une fonction asynchrone fetchRecipe
      try {
        const response = await axios.get(`http://localhost:5000/recipes/${id}`); // je récupère les données de la recette grâce à l'id
        setRecipe(response.data); // je stocke les données de la recette dans la variable recipe
      } catch (error) { // si une erreur survient
        console.error('Error fetching recipe:', error); // j'affiche un message d'erreur
      }
    };

    fetchRecipe(); // j'appelle la fonction fetchRecipe
  }, [id]); // je précise que je veux que la fonction fetchRecipe soit appelée à chaque changement de l'id

  if (!recipe) { // si la variable recipe est vide
    return <p>Loading...</p>; // j'affiche un message de chargement
  }

  return (
    <div className="recipe-detail">
      <img src={recipe.img} alt={recipe.title} />
      <h1>{recipe.title}</h1>
      <p>Temps de préparation: {recipe.preparationTime} mins</p>
      <p>Type: {recipe.type}</p>
      <p>Categorie: {recipe.category}</p>
      <p>Portion: {recipe.portion} personnes</p>
      <div>
        <h2>Ingrédients</h2>
        <ul className="ingredients-list">
          {recipe.ingredients.map((ingredient, index) => ( // je crée une liste des ingrédients
            <li key={index}>{ingredient}</li> // je crée un élément de liste pour chaque ingrédient
          ))}
        </ul>
      </div>
      <div>
        <h2>Etapes</h2>
        <ul className="steps-list"> 
          {recipe.steps.map((step, index) => ( // je crée une liste des étapes
            <li key={index}>{step}</li> // je crée un élément de liste pour chaque étape
          ))}
        </ul>
      </div>
      <h2>Conseil: {recipe.advice}</h2> 
    </div>
  );
};

export default RecipeDetail;
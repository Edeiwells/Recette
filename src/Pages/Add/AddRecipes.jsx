import React, { useState } from 'react';
import axios from 'axios';
import './recipes.scss';
import RecipeFormField from '../../components/recipes/add/RecipeFormField.jsx'; // Importation du composant RecipeFormField

const AddRecipes = () => { // composant pour ajouter une recette
  const [recipe, setRecipe] = useState({ // initialisation des valeurs
    title: '',
    preparationTime: '',
    ingredients: '',
    type: '',
    category: '',
    img: '',
    steps: '',
    portion: '',
    advice: '',
  });

  const [errors, setErrors] = useState({}); // initialisation des erreurs

  const handleChange = (e) => { // fonction pour gérer les changements
    const { name, value } = e.target; // récupération des valeurs
    setRecipe({ ...recipe, [name]: value }); // mise à jour des valeurs
  };

  const handleSubmit = async (e) => { // fonction pour gérer la soumission
    e.preventDefault(); // empêcher le rechargement de la page

    // Validation
    const newErrors = {}; // initialisation des erreurs
    if (recipe.title.length < 3) { // vérification de la longueur du titre
      newErrors.title = 'Title must be at least 3 characters long';  // message d'erreur
    }

    for (const key in recipe) { // vérification des champs vides
      if (recipe[key] === '') { // vérification des champs vides
        newErrors[key] = 'This field is required'; // message d'erreur
      }
    }

    if (Object.keys(newErrors).length > 0) { // vérification des erreurs
      setErrors(newErrors); // mise à jour des erreurs
      return;
    }

    try {
      await axios.post('http://localhost:5000/addRecipe', {
        ...recipe,
        ingredients: recipe.ingredients.split(';'),
        steps: recipe.steps.split(';'),
      });
      alert('Recipe added successfully');
      
      setRecipe({ // réinitialisation des valeurs
        title: '',
        preparationTime: '',
        ingredients: '',
        type: '',
        category: '',
        img: '',
        steps: '',
        portion: '',
        advice: '',
      });
      setErrors({});
    } catch (error) {  // gestion des erreurs
      console.error('There was an error adding the recipe!', error); // message d'erreur
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>Rajouter une recette</h1>
      <RecipeFormField
        name="title"
        type="text"
        placeholder="Titre"
        value={recipe.title}
        error={errors.title}
        onChange={handleChange}
      />
      <RecipeFormField
        name="preparationTime"
        type="number"
        placeholder="Temps de préparation"
        value={recipe.preparationTime}
        error={errors.preparationTime}
        onChange={handleChange}
      />
      <RecipeFormField
        name="ingredients"
        type="text"
        placeholder="Ingrédients (point virgule entre chaque ingrédient)"
        value={recipe.ingredients}
        error={errors.ingredients}
        onChange={handleChange}
      />
      <RecipeFormField
        name="type"
        type="text"
        placeholder="Type"
        value={recipe.type}
        error={errors.type}
        onChange={handleChange}
      />
      <RecipeFormField
        name="category"
        type="text"
        placeholder="Categorie"
        value={recipe.category}
        error={errors.category}
        onChange={handleChange}
      />
      <RecipeFormField
        name="img"
        type="text"
        placeholder="Image URL"
        value={recipe.img}
        error={errors.img}
        onChange={handleChange}
      />
      <RecipeFormField
        name="steps"
        type="text"
        placeholder="Etape (point virgule entre chaque étape)"
        value={recipe.steps}
        error={errors.steps}
        onChange={handleChange}
      />
      <RecipeFormField
        name="portion"
        type="number"
        placeholder="Portion"
        value={recipe.portion}
        error={errors.portion}
        onChange={handleChange}
      />
      <RecipeFormField
        name="advice"
        type="text"
        placeholder="Conseil"
        value={recipe.advice}
        error={errors.advice}
        onChange={handleChange}
      />
      <button type="submit">Ajouter</button>
    </form>
  );
};

export default AddRecipes;
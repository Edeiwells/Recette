const express = require('express'); // Importe le module express
const mongoose = require('mongoose'); // Importe le module mongoose
const cors = require('cors'); // Importe le module cors
const recipeController = require('./controllers/recipeController'); // Importe le contrôleur des recettes

const app = express(); // Crée une application express
app.use(cors()); // Permet d'accepter les requêtes provenant de n'importe quelle origine
app.use(express.json()); // Permet de parser les requêtes au format JSON

mongoose.connect('mongodb://localhost:27017/recipesDB', { // Connexion à la base de données
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Routes pour les recettes
app.post('/addRecipe', recipeController.addRecipe); // Route d'ajout de recette
app.get('/recipes', recipeController.getAllRecipes); // Route de récupération de toutes les recettes
app.get('/recipes/:id', recipeController.getRecipeById); // Route de récupération d'une recette par ID
app.delete('/recipes/:id', recipeController.deleteRecipeById); // Route de suppression d'une recette par ID
app.get('/search', recipeController.searchRecipes); // Route de recherche de recettes

app.listen(5000, () => {
  console.log('Server is running on port 5000');
});
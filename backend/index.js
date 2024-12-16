const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const cors = require('cors');
const recipeController = require('./controllers/recipeController');

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/recipesDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Routes pour les recettes
app.post('/addRecipe', recipeController.addRecipe);
app.get('/recipes', recipeController.getAllRecipes);
app.get('/recipes/:id', recipeController.getRecipeById);
app.delete('/recipes/:id', recipeController.deleteRecipeById);
app.get('/search', recipeController.searchRecipes);

// Servir les fichiers statiques du dossier 'dist'
app.use(express.static(path.join(__dirname, 'dist')));

// Rediriger toutes les requêtes vers le fichier index.html
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

app.listen(5000, () => {
  console.log('Server is running on port 5000');
});
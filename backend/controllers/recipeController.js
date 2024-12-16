const Recipe = require("../models/Recipe"); // Importe le modèle Recipe

// Fonction pour ajouter une recette
exports.addRecipe = async (req, res) => {
  // Je crée une fonction addRecipe qui prend en paramètre req et res
  const newRecipe = new Recipe(req.body); // Je crée une nouvelle recette avec les données de la requête
  try {
    await newRecipe.save(); // J'ajoute la recette à la base de données
    res.status(201).send(newRecipe); // Je renvoie la recette ajoutée
  } catch (error) {
    // Si une erreur survient
    res.status(400).send(error); // Je renvoie l'erreur
  }
};

// Fonction pour récupérer toutes les recettes
exports.getAllRecipes = async (req, res) => {
  // Je crée une fonction getAllRecipes qui prend en paramètre req et res
  try {
    const recipes = await Recipe.find(); // Je récupère toutes les recettes
    res.status(200).send(recipes); // Je renvoie les recettes
  } catch (error) {
    // Si une erreur survient
    res.status(500).send(error); // Je renvoie l'erreur
  }
};

// Fonction pour récupérer une recette par ID
exports.getRecipeById = async (req, res) => {
  // Je crée une fonction getRecipeById qui prend en paramètre req et res
  try {
    const recipe = await Recipe.findById(req.params.id); // Je récupère la recette par ID
    if (!recipe) {
      return res.status(404).send(); // Si la recette n'existe pas, je renvoie une erreur 404
    }
    res.status(200).send(recipe); // Je renvoie la recette
  } catch (error) {
    res.status(500).send(error); // Si une erreur survient, je renvoie l'erreur
  }
};

// Fonction pour supprimer une recette par ID
exports.deleteRecipeById = async (req, res) => {
  // Je crée une fonction deleteRecipeById qui prend en paramètre req et res
  try {
    const recipe = await Recipe.findByIdAndDelete(req.params.id); // Je supprime la recette par ID
    if (!recipe) {
      // Si la recette n'existe pas
      return res.status(404).send(); // Je renvoie une erreur 404
    }
    res.status(200).send(recipe); // Je renvoie la recette supprimée
  } catch (error) {
    res.status(500).send(error); // Si une erreur survient, je renvoie l'erreur
  }
};

// Fonction pour rechercher des recettes
exports.searchRecipes = async (req, res) => {
  // Je crée une fonction searchRecipes qui prend en paramètre req et res
  const query = req.query.q; // Je récupère la requête de recherche
  try {
    const recipes = await Recipe.find({ title: new RegExp(query, "i") }); // Je recherche les recettes par titre
    res.status(200).send(recipes); // Je renvoie les recettes trouvées
  } catch (error) {
    // Si une erreur survient
    res.status(500).send(error); // Je renvoie l'erreur
  }
};

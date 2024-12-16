const mongoose = require('mongoose');

const recipeSchema = new mongoose.Schema({
  title: String,
  preparationTime: Number,
  ingredients: [String],
  type: String,
  category: String,
  img: String,
  steps: [String],
  portion: Number,
  advice: String,
});

const Recipe = mongoose.model('Recipe', recipeSchema);

module.exports = Recipe;
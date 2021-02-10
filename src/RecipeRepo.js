const recipeData = require('../data/recipes');
const Recipe = require('../src/Recipe');

class RecipeRepo {
  constructor() {
    this.recipes = this.populateRecipes();
  }

  populateRecipes() {
    const recipes = recipeData.map(recipe => new Recipe(recipe));
    return recipes;
  }
}


module.exports = RecipeRepo;
class Recipe {
  constructor(recipeObject) {
    this.id = recipeObject.id;
    this.image = recipeObject.image;
    this.ingredients = recipeObject.ingredients;
  }
}


module.exports = Recipe;


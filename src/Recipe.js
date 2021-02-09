class Recipe {
  constructor(recipeObject) {
    this.id = recipeObject.id;
    this.image = recipeObject.image;
    this.ingredients = recipeObject.ingredients;
    this.tags = recipeObject.tags;
    this.name = recipeObject.name;
    this.instructions = recipeObject.instructions;
  }
}


module.exports = Recipe;


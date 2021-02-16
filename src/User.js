
class User {
  constructor(userObject) {
    this.name = userObject.name;
    this.id = userObject.id;
    this.pantry = userObject.pantry;
    this.favoriteRecipes = [];
    this.recipesToCook = [];
  }

  loveRecipe(recipe) {
    this.favoriteRecipes.push(recipe);
  }

  removeRecipe(recipe) {
    this.favoriteRecipes = this.favoriteRecipes.filter(favRecipe => favRecipe.id !== recipe.id)
  }

  saveRecipe(recipe) {
    this.recipesToCook.push(recipe);
  }
}

if (typeof module !== 'undefined') {
  module.exports = User;
}
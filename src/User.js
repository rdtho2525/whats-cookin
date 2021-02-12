
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
}

module.exports = User;
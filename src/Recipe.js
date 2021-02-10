class Recipe {
  constructor(recipeObject) {
    this.id = recipeObject.id;
    this.image = recipeObject.image;
    this.ingredients = recipeObject.ingredients;
    this.tags = recipeObject.tags;
    this.name = recipeObject.name;
    this.instructions = recipeObject.instructions;
  }
  getIngredientNames() {
    //iterate through this.ingredients
    //for each ingredient, push the ingredient name matching the id to an array
    //return array
    let names = this.ingredients.map(ingredient => {
      ingredientData[]
    })
  }
}


module.exports = Recipe;


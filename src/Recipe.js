// const ingredientsData = require('../data/ingredients');

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
    const name = this.ingredients.map(ingredient => {
      const findName = ingredientsData.find(element => ingredient.id === element.id);
      return findName.name;
    });
    return name
  }

  getTotalCostOfIngredients() {
    const cost = this.ingredients.reduce((totalCost, ingredient) => {
      const findCost = ingredientsData.find(element => ingredient.id === element.id);
      const estimatedCostInDollars = (findCost.estimatedCostInCents * ingredient.quantity.amount) / 100;
      return totalCost + Number((estimatedCostInDollars).toFixed(2));
    }, 0)

    return cost
  }

  getInstructions() {
    return this.instructions
  }
}


if (typeof module !== 'undefined') {
  module.exports = Recipe;
}


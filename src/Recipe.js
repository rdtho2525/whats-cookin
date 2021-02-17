// const ingredientsData = require('../data/ingredients');

const { find } = require("../data/ingredients");

class Recipe {
  constructor(recipeObject) {
    this.id = recipeObject.id;
    this.image = recipeObject.image;
    this.ingredients = recipeObject.ingredients;
    this.tags = recipeObject.tags;
    this.name = recipeObject.name;
    this.instructions = recipeObject.instructions;
  }
  getIngredientNames(ingredientArray) {
    const name = this.ingredients.map(ingredient => {
      const findName = ingredientArray.find(element => ingredient.id === element.id);
      if (findName) {
        return findName.name
      }
    });
    return name
  }

  getTotalCostOfIngredients(ingredientArray) {
    const cost = this.ingredients.reduce((totalCost, ingredient) => {
      const findCost = ingredientArray.find(element => ingredient.id === element.id);
      const estimatedCostInDollars = (findCost.estimatedCostInCents * ingredient.quantity.amount) / 100;
      return totalCost + estimatedCostInDollars
    }, 0)

    return Math.round(cost * 100) / 100; 
  }

  getInstructions() {
    return this.instructions
  }
}


if (typeof module !== 'undefined') {
  module.exports = Recipe;
}


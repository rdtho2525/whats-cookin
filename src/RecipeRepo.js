const Recipe = require('../src/Recipe');

class RecipeRepo {
  constructor(recipeArray) {
    this.recipes = this.populateRecipes(recipeArray);
  }

  populateRecipes(recipeArray) {
    const recipes = recipeArray.map(recipe => new Recipe(recipe));
    return recipes;
  }

  filterByTag(searchString) {
    const tags = searchString.split(',').map(tag => tag.trim());
    
    const recipes = this.recipes.reduce((matchingRecipes, recipe) => {
      tags.forEach(tag => {
        if (recipe.tags.includes(tag)) {
          matchingRecipes.push(recipe);
        }
      })
      return matchingRecipes
    }, [])
    return this.removeDuplicates(recipes);
  }

  filterByName(searchString) {
    const names = searchString.split(',').map(tag => tag.trim());

    const recipes = this.recipes.reduce((matchingRecipes, recipe) => {
      names.forEach(recipeName => {
        if (recipe.name === recipeName) {
          matchingRecipes.push(recipe);
        }
      })
      return matchingRecipes;
    }, [])
    return this.removeDuplicates(recipes);
  }

  filterByIngredient(searchString, ingredientArray) {
    const ingredients = searchString.split(',').map(tag => tag.trim());
    
    const recipes = this.recipes.reduce((matchingRecipes, recipe) => {
      const recipeIngredients = recipe.getIngredientNames(ingredientArray);
      ingredients.forEach(ingredientName => {
        if (recipeIngredients.includes(ingredientName)) {
          matchingRecipes.push(recipe);
        }
      })
      return matchingRecipes;
    }, [])
    return this.removeDuplicates(recipes);
  }

  removeDuplicates(data) {
    return data.filter((a, b) => data.indexOf(a) === b)
  }
}

if (typeof module !== 'undefined') {
  module.exports = RecipeRepo;
}

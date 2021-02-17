
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

  filterByName(searchString, list) {
    const names = searchString.split(',').map(tag => tag.trim());

    const recipes = this[list].reduce((matchingRecipes, recipe) => {
      names.forEach(recipeName => {
        if (recipe.name === recipeName) {
          matchingRecipes.push(recipe);
        }
      })
      return matchingRecipes;
    }, [])

    return this.removeDuplicates(recipes);
  }
  
  filterByTag(searchString, list) {
    const tags = searchString.split(',').map(tag => tag.trim());
    
    const recipes = this[list].reduce((matchingRecipes, recipe) => {
      tags.forEach(tag => {
        if (recipe.tags.includes(tag)) {
          matchingRecipes.push(recipe);
        }
      })
      return matchingRecipes
    }, [])
    return this.removeDuplicates(recipes);
  }

  filterByIngredients(searchString, list, ingredientArray) {
    const ingredients = searchString.split(',').map(tag => tag.trim());
    
    const recipes = this[list].reduce((matchingRecipes, recipe) => {
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
  checkForIngredients(recipe) {
    const pantryIDs = this.pantry.map(pantryIngredient => pantryIngredient.ingredient); 
    const itemsNotInPantry = recipe.ingredients.filter((recipeIngredient) => !pantryIDs.includes(recipeIngredient.id));
    const itemsInPantry = recipe.ingredients.filter((recipeIngredient) => pantryIDs.includes(recipeIngredient.id));
    const lowQuantityItems = itemsInPantry.filter((recipeIngredient, i) => {

      const pantryItems = this.pantry.filter(pantryIngredient => recipeIngredient.id === pantryIngredient.ingredient
      );
        return pantryItems[i].amount > recipeIngredient.quantity.amount
      });
    const result = [...itemsNotInPantry, ...lowQuantityItems];
    if (result.length) {
      return result
    } else {
      return true 
    }
  }

  findMissingIngredients(recipe, ingredientArray) {
    const result = recipe.getIngredientNames(ingredientArray);
  }

  consumeIngredients() {

  }

  cookMeal() {

  }

  removeDuplicates(data) {
    return data.filter((a, b) => data.indexOf(a) === b)
  }
}

if (typeof module !== 'undefined') {
  module.exports = User;
}
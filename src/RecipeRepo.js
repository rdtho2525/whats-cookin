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

  filterByTag(searchString) {
    const tags = searchString.split(',').map(tag => tag.trim());//separates by comma and trims whitespace
    
    const recipes = this.recipes.reduce((matchingRecipes, recipe) => {
      tags.forEach(tag => {
        if (recipe.tags.includes(tag)) {
          matchingRecipes.push(recipe);
        }
      })
      return matchingRecipes
    },[])

    return this.removeDuplicates(recipes);
  }

  removeDuplicates(data) {
    return data.filter((a, b) => data.indexOf(a) === b)
  }
}




module.exports = RecipeRepo;

//how to handle tags with multiple words
//how do you search: 'main course' 'beef' together
//do we return tag 1 and 2 ....or tag1 OR tag2

//decisions: two+ tags would use AND -- requires recipe to have both
//force a user to put a comma between tags



const Recipe = require('../src/Recipe');
const chai = require('chai');
const expect = chai.expect;
const recipeData = require('../data/recipes');
const ingredientsData = require('../data/ingredients');


describe('Recipe', () => {

  it('should be a function', () => {
    expect(Recipe).to.be.a('function');
  });

  it('should be an instance of Recipe', () => {
    const recipe = new Recipe(recipeData[0]);
    expect(recipe).to.be.an.instanceof(Recipe);
  }); 

  it('should have an id property', () => {
    const recipe = new Recipe(recipeData[0]);
    expect(recipe.id).to.equal(595736);
  }); 

  it('should have an image', () => {
    const recipe = new Recipe(recipeData[0]);
    expect(recipe.image).to.equal("https://spoonacular.com/recipeImages/595736-556x370.jpg");
  }); 

  it('should have an array of ingredients', () => {
    const recipe = new Recipe(recipeData[0]);
    const ingredients1 = recipeData[0].ingredients;
    expect(recipe.ingredients).to.equal(ingredients1);
  }); 

  // it('should return a list of ingredient names', () => {
  //   const ingredients = [
  //     {
  //       "id": 20081,
  //       "quantity": {
  //         "amount": 1.5,
  //         "unit": "c"
  //       }
  //     },
  //     {
  //       "id": 18372,
  //       "quantity": {
  //         "amount": 0.5,
  //         "unit": "tsp"
  //       }
  //     },
  //     {
  //       "id": 1123,
  //       "quantity": {
  //         "amount": 1,
  //         "unit": "large"
  //       }
  //     },
  //     {
  //       "id": 19335,
  //       "quantity": {
  //         "amount": 0.5,
  //         "unit": "c"
  //       }
  //     }
  //   ];
  //   const recipe = new Recipe(247, "https://spoonacular.com/recipeImages/595736-556x370.jpg", ingredients);
  //   expect(getIngredientNames()).to.equal();
  // }); 

});

// const newRecipe = new Recipe(recipObj, ingObj)

//this.id = recepObj[i].id
//...
//this.ignredientNames = ingObj.map(ele => {
  //return ingObj.name
//})
//this.ingredientNames = ['eggs']
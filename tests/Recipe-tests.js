
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

  it('should have an array of tags', () => {
    const recipe = new Recipe(recipeData[0]);
    const tags1 = recipeData[0].tags;
    expect(recipe.tags).to.equal(tags1);
  });

  it('should have a name', () => {
    const recipe = new Recipe(recipeData[0]);
    expect(recipe.name).to.equal("Loaded Chocolate Chip Pudding Cookie Cups");
  }); 

  it('should have instructions', () => {
    const recipe = new Recipe(recipeData[0]);
    const instructions1 = recipeData[0].instructions;
    expect(recipe.instructions).to.equal(instructions1);
  });

  it('should be able to return a list of ingredient names', () => {
    const recipe = new Recipe(recipeData[0]);
    // console.log(recipe.getIngredientNames());
    expect(recipe.getIngredientNames().length).to.equal(recipe.ingredients.length);
  });

  it('should be able to calculate the total cost of ingredients required', () => {
    const recipe = new Recipe(recipeData[0]);
    console.log(recipe.getTotalCostOfIngredients());
    expect(recipe.getTotalCostOfIngredients()).to.equal(177.75);
  });

  it('should be able to return recipe\'s instructions'), () => {
    const recipe = new Recipe(recipeData[0]);
    console.log(recipe.getInstructions());
    expect(recipe.getInstructions()).to.equal();
  });

});

// const newRecipe = new Recipe(recipObj, ingObj)

//this.id = recepObj[i].id
//...
//this.ignredientNames = ingObj.map(ele => {
  //return ingObj.name
//})
//this.ingredientNames = ['eggs']
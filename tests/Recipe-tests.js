
const Recipe = require('../src/Recipe');
const chai = require('chai');
const expect = chai.expect;
const recipeData = require('../data/recipes');


describe('Recipe', () => {
  let recipe;

  beforeEach(function() {
    recipe = new Recipe(recipeData[0]); 
  });

  it('should be a function', () => {
    expect(Recipe).to.be.a('function');
  });

  it('should be an instance of Recipe', () => {
    expect(recipe).to.be.an.instanceof(Recipe);
  }); 

  it('should have an id property', () => {
    expect(recipe.id).to.equal(595736);
  }); 

  it('should have an image', () => {
    expect(recipe.image).to.equal("https://spoonacular.com/recipeImages/595736-556x370.jpg");
  }); 

  it('should have an array of ingredients', () => {
    const ingredients1 = recipe.ingredients;
    expect(recipe.ingredients).to.equal(ingredients1);
  }); 

  it('should have an array of tags', () => {
    const tags1 = recipe.tags;
    expect(recipe.tags).to.equal(tags1);
  });

  it('should have a name', () => {
    expect(recipe.name).to.equal("Loaded Chocolate Chip Pudding Cookie Cups");
  }); 

  it('should have instructions', () => {
    const instructions1 = recipe.instructions;
    expect(recipe.instructions).to.equal(instructions1);
  });

  it('should be able to return a list of ingredient names', () => {
    const ingredients = [
      {
        "id": 20081,
        "name": "wheat flour",
        "estimatedCostInCents": 142
      },
      {
        "id": 18372,
        "name": "bicarbonate of soda",
        "estimatedCostInCents": 582
      },
      {
        "id": 1123,
        "name": "eggs",
        "estimatedCostInCents": 472
      }
    ]
    expect(recipe.getIngredientNames(ingredients).length).to.equal(recipe.ingredients.length);
  });

  it('should be able to calculate the total cost of ingredients required', () => {
    const ingredients = [
      {
        "id": 20081,
        "name": "wheat flour",
        "estimatedCostInCents": 142
      },
      {
        "id": 18372,
        "name": "bicarbonate of soda",
        "estimatedCostInCents": 582
      },
      {
        "id": 1123,
        "name": "eggs",
        "estimatedCostInCents": 472
      },
      {
        "id": 19335,
        "name": "sucrose",
        "estimatedCostInCents": 902
      },
      {
        "id": 19206,
        "name": "instant vanilla pudding",
        "estimatedCostInCents": 660
      },
      {
        "id": 19334,
        "name": "brown sugar",
        "estimatedCostInCents": 559
      },
      {
        "id": 2047,
        "name": "salt",
        "estimatedCostInCents": 280
      },
      {
        "id": 1012047,
        "name": "fine sea salt",
        "estimatedCostInCents": 528
      },
      {
        "id": 10019903,
        "name": "semi sweet chips",
        "estimatedCostInCents": 253
      },
      {
        "id": 1145,
        "name": "unsalted butter",
        "estimatedCostInCents": 617
      },
      {
        "id": 2050,
        "name": "vanilla",
        "estimatedCostInCents": 926
      }
    ]
    expect(recipe.getTotalCostOfIngredients(ingredients)).to.equal(177.76);
  });

  it('should be able to return recipe\'s instructions', () => {
    expect(recipe.getInstructions()).to.equal(recipe.instructions);
  });
});
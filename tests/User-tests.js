const User = require('../src/User');
const chai = require('chai');
const expect = chai.expect;
const usersData = require('../data/users');
const recipeData = require('../data/recipes');
const Recipe = require('../src/Recipe');
const RecipeRepo = require('../src/RecipeRepo');
const { indexOf } = require('../data/ingredients');

describe('User', () => {

  let user;
  let recipeRepo;

  beforeEach(() => {
    user = new User(usersData[0]);
    recipeRepo = new RecipeRepo();
  });

  it('should be a function', () => {
    expect(User).to.be.a('function');
  });

  it('should be an instance of User', () => {
    expect(user).to.be.an.instanceof(User);
  }); 

  it('should have a name', () => {
    expect(user.name).to.equal("Saige O'Kon");
  });

  it('should have an id', () => {
    expect(user.id).to.equal(1);
  });

  it('should have a pantry of ingredients', () => {
    expect(user.pantry.length).to.equal(36);
  });

  it('should start with an empty list of favorite recipes', () => {
    expect(user.favoriteRecipes).to.deep.equal([]);
  });

  it('should start with an empty list of recipes to cook', () => {
    expect(user.recipesToCook).to.deep.equal([]);
  });

  it('should be able to add a recipe to the favorite recipes list', () => {
    const recipe = new Recipe(recipeData[0]);
    user.loveRecipe(recipe);
    expect(user.favoriteRecipes).to.deep.equal([recipe]);
  });

  it('should be able to remove a recipe from the favorite recipes list', () => {
    const recipe = new Recipe(recipeData[0]);
    const recipe1 = new Recipe(recipeData[1]);
    user.loveRecipe(recipe);
    user.loveRecipe(recipe1);
    user.removeRecipe(recipe);
    expect(user.favoriteRecipes).to.deep.equal([recipe1]);
  });

  it('should be able to add a recipe to the recipes to cook list', () => {
    const recipe = new Recipe(recipeData[0]);
    user.saveRecipe(recipe);
    expect(user.recipesToCook).to.deep.equal([recipe]);
  });

  it('should be able to filter recipes by name', () => {
    user.favoriteRecipes = recipeRepo.recipes;
    const result = user.filterByName('Elvis Pancakes', 'favoriteRecipes');
    // console.log(user.favoriteRecipes);
    expect(result[0].name).to.equal('Elvis Pancakes');
    expect(result.length).to.equal(1);
  });

  it('should be able to filter recipes by tag', () => {
    user.favoriteRecipes = recipeRepo.recipes;
    const result = user.filterByTag('side dish', 'favoriteRecipes');
    expect(result[0].name).to.equal('Elvis Pancakes');
    expect(result.length).to.equal(22);
  });

  it('should be able to filter recipes by ingredients', () => {
    user.favoriteRecipes = recipeRepo.recipes;
    const result = user.filterByIngredients('almondmilk', 'favoriteRecipes');
    expect(result[0].name).to.equal('Pumpkin Cheesecake Breakfast Smoothie');
    expect(result.length).to.equal(1);
  });

  it('should be able to check pantry for a recipe\'s necessary ingredients', () => {
    user.recipesToCook = [recipeRepo.recipes[3]];

    user.pantry = [{
      "ingredient": 20081,
      "amount": 4
    },
    {
      "ingredient": 18371,
      "amount": 4
    },
    {
      "ingredient": 9040,
      "amount": 10
    }];
    expect(user.checkForIngredients(user.recipesToCook[0]).length).to.equal(10);

  });

  it('should be able to check pantry for a recipe\'s necessary ingredients', () => {
    user.recipesToCook = [recipeRepo.recipes[3]];
    user.recipesToCook.ingredients = [
    {
      "id": 20081,
      "quantity": {
        "amount": 1,
        "unit": "cup"
      }
    },
    {
      "id": 18371,
      "quantity": {
        "amount": 2,
        "unit": "teaspoons"
      }
    },
    {
      "id": 9040,
      "quantity": {
        "amount": 12,
      "unit": "servings"
     }
    }];
    user.pantry = [{
      "ingredient": 20081,
      "amount": 4
    },
    {
      "ingredient": 18371,
      "amount": 4
    },
    {
      "ingredient": 9040,
      "amount": 12
    }];
    expect(user.checkForIngredients(user.recipesToCook)).to.equal(true);

  });


  it.skip('should be able to identify which of the recipe\'s ingredients are missing from the pantry', () => {
    user.recipesToCook = [recipeRepo.recipes[3]];
    user.pantry = [{
      "ingredient": 20081,
      "amount": 4
    },
    {
      "ingredient": 18371,
      "amount": 4
    },
    {
      "ingredient": 9040,
      "amount": 10
    }];
    const testIngredients = user.checkForIngredients(user.recipesToCook);
    user.findMissingIngredients(testIngredients);
    expect(user.findMissingIngredients(testIngredients)).to.equal(/*message listing missing ingredient names*/)
  });

  it.skip('should be able to subtract from the pantry all ingredients used in a recipe', () => {
    user.recipesToCook = [recipeRepo.recipes[3]];
    expect(user.pantry[indexOf('eggs')].amount).to.equal(4);

    user.consumeIngredients();
    expect(user.pantry[indexOf('eggs')].amount).to.equal(2);
  });

  it.skip('should be able to cook a meal', () => {

  });
});
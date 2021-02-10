const RecipeRepo = require('../src/RecipeRepo');
const Recipe = require('../src/Recipe');
const chai = require('chai');
const expect = chai.expect;
const recipeData = require('../data/recipes');

describe('RecipeRepo', () => {


  it('should be a function', () => {
    expect(RecipeRepo).to.be.a('function');
  });

  it('should be an instance of Recipe', () => {
    const recipeRepo = new RecipeRepo()
    expect(recipeRepo).to.be.an.instanceof(RecipeRepo);
  }); 

  it('should have a repository of recipes', () => {
    const recipeRepo = new RecipeRepo()
    expect(recipeRepo.recipes).to.exist;
  });

  it('should populate the list of recipes upon instantiation', () => {
    const recipeRepo = new RecipeRepo()
    expect(recipeRepo.recipes.length).to.equal(recipeData.length);
    expect(recipeRepo.recipes[7].id).to.equal(recipeData[7].id);
  });


});
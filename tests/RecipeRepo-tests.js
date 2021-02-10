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

  // it('should have an id property', () => {
  //   expect(recipe.id).to.equal(595736);
  // }); 

});
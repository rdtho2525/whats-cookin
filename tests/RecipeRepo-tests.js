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

  it('should be able to filter recipes by tag', () => {
    const recipeRepo = new RecipeRepo();

    const filteredData1 = recipeRepo.filterByTag('antipasti');
    expect(filteredData1.length).to.equal(9);
    const filteredData2 = recipeRepo.filterByTag('main course, dinner');
    expect(filteredData2.length).to.equal(12);
  });

  it('should be able to remove duplicates from filtered data', () => {
    const recipeRepo = new RecipeRepo();

    const filteredData2 = recipeRepo.removeDuplicates([1, 2, 3, 3, 3]);
    expect(filteredData2).to.deep.equal([1, 2, 3]);
  });
  
  it('should be able to filter recipes by name', () => {
    const recipeRepo = new RecipeRepo();

    const filteredData1 = recipeRepo.filterByName('Loaded Chocolate Chip Pudding Cookie Cups');
    expect(filteredData1[0].id).to.equal(595736);
    const filteredData2 = recipeRepo.filterByName('fish');
    expect(filteredData2).to.deep.equal([]);
  });
});
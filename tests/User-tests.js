const User = require('../src/User');
const chai = require('chai');
const expect = chai.expect;
const ingredientData = require('../data/ingredients');
const usersData = require('../data/users');

describe('User', () => {


  it('should be a function', () => {
    expect(User).to.be.a('function');
  });

  it('should be an instance of User', () => {
    const user = new User(usersData[0]);
    expect(user).to.be.an.instanceof(User);
  }); 

  it('should have a name', () => {
    const user = new User(usersData[0]);
    expect(user.name).to.equal("Saige O'Kon");
  });

  it('should have an id', () => {
    const user = new User(usersData[0]);
    expect(user.id).to.equal(1);
  });

  it('should have a pantry of ingredients', () => {
    const user = new User(usersData[0]);
    expect(user.pantry.length).to.equal(36);
  });

  it('should start with an empty list of favorite recipes', () => {
    const user = new User(usersData[0]);
    expect(user.favoriteRecipes).to.deep.equal([]);
  });

  it('should start with an empty list of recipes to cook', () => {
    const user = new User(usersData[0]);
    expect(user.recipesToCook).to.deep.equal([]);
  });


  // it('should populate the list of recipes upon instantiation', () => {
  //   expect(recipeRepo.recipes.length).to.equal(recipeData.length);
  //   expect(recipeRepo.recipes[7].id).to.equal(recipeData[7].id);
  // });

  // it('should be able to filter recipes by tag', () => {
  //   const filteredData1 = recipeRepo.filterByTag('antipasti');
  //   expect(filteredData1.length).to.equal(9);
  //   const filteredData2 = recipeRepo.filterByTag('main course, dinner');
  //   expect(filteredData2.length).to.equal(12);
  //   const filteredData3 = recipeRepo.filterByTag('soup');
  //   expect(filteredData3).to.deep.equal([]);
  // });

  // it('should be able to remove duplicates from filtered data', () => {
  //   const filteredData2 = recipeRepo.removeDuplicates([1, 2, 3, 3, 3]);
  //   expect(filteredData2).to.deep.equal([1, 2, 3]);
  // });
  
  // it('should be able to filter recipes by name', () => {
  //   const filteredData1 = recipeRepo.filterByName('Loaded Chocolate Chip Pudding Cookie Cups');
  //   expect(filteredData1[0].id).to.equal(595736);
  //   const filteredData2 = recipeRepo.filterByName('fish');
  //   expect(filteredData2).to.deep.equal([]);
  // });

  // it('should be able to filter recipes by ingredient', () => {
  //   const filteredData1 = recipeRepo.filterByIngredient('eggs');
  //   expect(filteredData1.length).to.equal(13);
  //   const filteredData2 = recipeRepo.filterByIngredient('fish');
  //   expect(filteredData2).to.deep.equal([]);
  // });
});
const User = require('../src/User');
const chai = require('chai');
const expect = chai.expect;
const usersData = require('../data/users');

describe('User', () => {

  let user;

  beforeEach(() => {
    user = new User(usersData[0]);
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

});
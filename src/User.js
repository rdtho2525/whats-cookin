const userData = require('../data/users');

class User {
  constructor(userObject) {
    this.name = userObject.name;
    this.id = userObject.id;
    this.pantry = userObject.pantry;
    this.favoriteRecipes = [];
  }
}

module.exports = User;
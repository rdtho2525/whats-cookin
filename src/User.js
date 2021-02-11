const userData = require('../data/users');
const usersData = require('../data/users');

class User {
  constructor(userObject) {
    this.name = userObject.name;
    this.id = userObject.id;
  }
}

module.exports = User;
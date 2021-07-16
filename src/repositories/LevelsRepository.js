// const model = require('../database/models');
const Repository = require('./Repository');

class LevelsRepository extends Repository {
  constructor() {
    super('Levels');
  }

}

module.exports = LevelsRepository;


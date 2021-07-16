const model = require('../database/models');
const { Op } = require('sequelize');

const Repository = require('./Repository');

class ClassesRepository extends Repository {
  constructor() {
    super('Classes');
  }

  async all(query) {
   
    if (this._isDataValidToFilter(query)) {
      return await super.all({
          start_date: {
            [Op.between]: [query.start_date, query.end_date]
          }
      });  
    }
   
   return await super.all();
  }

  _isDataValidToFilter(query) {
    return query.hasOwnProperty('start_date') 
    && query.hasOwnProperty('end_date')
  }
}
module.exports = ClassesRepository;
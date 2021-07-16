const model = require('../database/models');
const Repository = require('./Repository');

class PeopleRepository extends Repository {
  constructor() {
    super('People');
    this.enrollment = new Repository('Enrollment');
  }

  async all(where = {}) {
    return await model[this.modelName]
    .scope('all')
    .findAll({ where: { ...where } });
  }

  async allActive(where = {}) {
    return await model[this.modelName].findAll({where: { ...where }});
  }

  async cancelPeople(studentId) {
    await this.findById(studentId);

    const transaction = await model.sequelize.transaction();
    
    try {
      await super.update(
        { active: false }, 
        Number(studentId),
        { transaction: transaction }
      );

      await this.enrollment.updates(
        { status: 'canceled' }, 
        { student_id: Number(studentId) },
        { transaction: transaction }
      );
      
      await transaction.commit();
    } catch (error) {
      await transaction.rollback()
      throw new Error(error.message);
    }
  }
}

module.exports = PeopleRepository;
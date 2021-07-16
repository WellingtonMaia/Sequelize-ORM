const model = require('../database/models');
const Sequelize = require('sequelize');

const Repository = require('./Repository');

class EnrollmentRepository extends Repository {
  constructor() {
    super('Enrollment');
  }

  async all(studentId) {
    const person = await super.all({ student_id: Number(studentId) });
    return person;
  }

  async findById(studentId, id) {
    return await super.getByIdCustom({
        student_id: Number(studentId),
        id: Number(id)
      },
      true,
    );
  }

  async update(enrollment) {
    const { student_id, id } = enrollment;
 
    return await super.updates(enrollment, id, {
        student_id: Number(student_id),
        id: Number(id)
    });
  }

  async delete(studentId, id) {
    return await super.deleteCustom(id, {
      student_id: Number(studentId),
      id: Number(id)
    });
  }

  async getEnrolledClasses(studentId) {
    return await model[this.modelName].findAll({
      where: {
        student_id: Number(studentId),
      },
      include: model.People
    });
  }

  async getAllEnrollmentByClass(classId) {
    return await model[this.modelName].findAndCountAll({
      where: {
        class_id: Number(classId),
        status: 'confirmed'
      },
      // limit: 1,
      order: [['student_id', 'DESC']] //ASC | DESC
    })
  }

  async getCrowdedClasses(classCapacity) {
    return await model[this.modelName].findAndCountAll({
      where: {
        status: 'confirmed'
      },
      attributes: ['class_id'],
      group: ['class_id'],
      having: Sequelize.literal(`COUNT(class_id) >= ${classCapacity}`) 
    });
  }
}

module.exports = EnrollmentRepository;
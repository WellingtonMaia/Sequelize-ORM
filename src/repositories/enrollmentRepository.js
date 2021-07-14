const model = require('../database/models');

module.exports = {
  async all(studentId) {
    console.log(`repository ${studentId}`)
    return await model.Enrollment.findAll({
      where: {
        student_id: Number(studentId)
      },
      raw: true
    });
  },

  async findById(studentId, id) {
    const found = await model.Enrollment.findOne({
      where: {
        student_id: Number(studentId),
        id: Number(id)
      },
      raw: true,
    });

    if (!found) {
      throw new Error('Enrollment not found!');
    }

    return found;
  },

  async create(enrollment) {  
    return await model.Enrollment.create(enrollment);
  },

  async update(enrollment) {
    const { student_id, id } = enrollment;

    await this.findById(student_id, id);
 
    await model.Enrollment.update(enrollment, {
      where: {
        student_id: Number(student_id),
        id: Number(id)
      }
    });

    return await this.findById(student_id, id);
  },

  async delete(studentId, id) {
    await this.findById(studentId, id);
    
    return await model.Enrollment.destroy({
      where: {
        student_id: Number(studentId),
        id: Number(id)
      }
    });
  }
};
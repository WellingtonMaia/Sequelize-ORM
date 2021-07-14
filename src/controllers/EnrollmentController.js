const repository = require('../repositories/enrollmentRepository');

class EnrollmentController {
  static async getAllEnrollment({ people }, res) {
    try {
      const studentId = people.id
      const enrollment = await repository.all(studentId);
      
      return res.status(200).json(enrollment);
    } catch (error) {
      return res.status(404).json(error.message);
    }
  }

  static async getById({ people, params }, res) {
    try {
      const studentId = people.id
      const id = params.id;
      
      const enrollment = await repository.findById(studentId, id);
      
      return res.status(200).json(enrollment);
    } catch (error) {
      return res.status(404).json(error.message);
    }
  }

  static async store({people, body}, res) {
    try {
        const enrollmentObject = Object.assign(
          {}, 
          body, 
          { student_id: people.id, }
        );

        const enrollment = await repository.create(enrollmentObject);
        
        return res.status(201).json(enrollment);
    } catch (error) {
      return res.status(404).json(error);
    }
  }

  static async update ({ params, body, people }, res) {
    try {
      const enrollmentObject = Object.assign(
        {},
        body,
        { id: params.id, student_id: people.id } 
      );

      const enrollment = await repository.update(enrollmentObject);
  
      return res.status(201).json(enrollment);
    } catch (error) {
      return res.status(404).json(error.message);
    }
  }

  static async delete ({ people, params }, res) {
    try {
      const id = params.id;
      await repository.delete(people.id, id);

      return res.status(200).json(`Register with id(${id}) deleted!`);
    } catch (error) {
      return res.status(404).json(error.message);
    }
  }
}

module.exports = EnrollmentController;
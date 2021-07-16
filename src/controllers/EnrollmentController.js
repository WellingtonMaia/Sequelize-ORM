const EnrollmentRepository = require('../repositories/EnrollmentRepository');
const repository = new EnrollmentRepository();
const ErrorsRequest = require('./Exceptions/ErrorsRequest');

class EnrollmentController {
  static async getAllEnrollmentConfirmed({ people }, res) {
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

  static async store(req, res) {
    try {
        ErrorsRequest.validateRequest(req);

        const { body, people } = req;
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

  static async update (req, res) {
    try {
      ErrorsRequest.validateRequest(req);
      
      const { body, people, params } = req;
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

  static async restore({ params }, res) {
    try {
      const id = params.id;
      
      await repository.restore(id);

      return res.status(201).json({ message: `Register with id(${id}) restored` });
    } catch (error) {
      return res.status(404).json(error.message);
    }
  }

  static async getAllEnrollment({ people }, res) {
    try {
      const id = people.id;
      
      const result = await repository.getEnrolledClasses(id);

      return res.status(200).json(result);
    } catch (error) {
      return res.status(404).json(error.message);      
    }
  }

  static async getEnrollmentByClass({ params }, res) {
    try {
      
      const classId = params.classId
      
      const result = await repository.getAllEnrollmentByClass(classId);

      return res.status(200).json(result);
    } catch (error) {
      return res.status(404).json(error.message);
    }
  }

  static async getCrowdedClasses(req, res) {
    try {
      const classCapacity = 2; //can be other values
      
      const result = await repository.getCrowdedClasses(classCapacity);

      return res.status(200).json(result.count);
    } catch (error) {
      return res.status(404).json(error.message);
    }
  }
}

module.exports = EnrollmentController;
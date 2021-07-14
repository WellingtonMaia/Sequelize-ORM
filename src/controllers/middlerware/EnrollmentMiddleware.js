const peopleRepository = require('../../repositories/peopleRepository');

class EnrollmentMiddleware {
  static async setPerson(req, res, next) {
    try {
      const { personId } = req.params;
      const person = await peopleRepository.findById(personId);
      req.people = person;
      next();
    } catch (error) {
      next(error);
    }
  }
}

module.exports = EnrollmentMiddleware;
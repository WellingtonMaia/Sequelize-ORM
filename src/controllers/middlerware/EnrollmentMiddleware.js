const PeopleRepository = require('../../repositories/PeopleRepository');
const repository = new PeopleRepository();

class EnrollmentMiddleware {
  static async setPerson(req, res, next) {
    try {
      const { personId } = req.params;
      const person = await repository.getById(personId);
      req.people = person;
      next();
    } catch (error) {
      next(error);
    }
  }
}

module.exports = EnrollmentMiddleware;
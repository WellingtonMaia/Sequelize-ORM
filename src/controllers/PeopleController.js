const PeopleRepository = require('../repositories/index').PeopleRepository;
const repository = new PeopleRepository();
const ErrorsRequest = require('./Exceptions/ErrorsRequest');

class PeopleController {
  static async getAllActivePeople (req, res) {
    try {
      const result = await repository.allActive();
      return res.status(200).json(result);
    } catch (error) {
      return res.status(500).json(error.message); 
    }
  }

  static async getAllPeople(req, res) {
    try {
      const result = await repository.all();
      return res.status(200).json(result);
    } catch (error) {
      return res.status(500).json(error.message); 
    }
  }
  
  static async getById (req, res) {
    try {
      const { id } = req.params;
      const result = await repository.getById(id, 'Person not found!', true);

      return res.status(200).json(result);
    } catch (error) {
      return res.status(404).json(error.message);
    }
  }

  static async store (req, res) {
    try {
      
      ErrorsRequest.validateRequest(req);

      const body = req.body;
      const result = await repository.create(body);
      
      return res.status(201).json(result);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async update (req, res) {
    try {

      ErrorsRequest.validateRequest(req)
      
      const id = req.params.id;
      const person = Object.assign({}, req.body, { id: id });

      const personUpdate = await repository.update(person, id);
      
      return res.status(201).json(personUpdate);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async delete({ params }, res) {
    try {
      const id = params.id;
      
      await repository.delete(id);

      return res.status(200).json({ message: `Person with id(${id}) deleted` });
    } catch (error) {
      return res.status(404).json(error.message);
    }
  }

  static async restore({ params }, res) {
    try {
      const id = params.id;
      
      await repository.restore(id);

      return res.status(201).json({ message: `Person with id(${id}) restored!` });
    } catch (error) {
      return res.status(404).json(error.message);
    }
  }

  static async cancelPeople({ params }, res) {
    try {
      const studentId = params.studentId;

      await repository.cancelPeople(studentId);

      return res.status(201).json({ message: `Student with id(${studentId}) canceled!` });
    } catch (error) {
      return res.status(404).json(error.message);
    }
  }
};

module.exports = PeopleController;
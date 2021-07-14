const repository = require('../repositories/peopleRepository');

class PeopleController {
  static async getAllPeople (req, res) {
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
      const result = await repository.findById(id);

      return res.status(200).json(result);
    } catch (error) {
      return res.status(404).json(error.message);
    }
  }

  static async store (req, res) {
    try {
      const body = req.body;
      const result = repository.create(body);
      
      return res.status(201).json(result);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async update ({body, params}, res) {
    try {
      const id = params.id;
      const person = Object.assign({}, body, { id: id });

      const personUpdate = await repository.update(person);
      
      return res.status(201).json(personUpdate);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async delete({ params }, res) {
    try {
      const id = params.id;
      
      await repository.delete(id);

      return res.status(200).json({message: `Person with id(${id}) deleted`});
    } catch (error) {
      return res.status(404).json(error.message);
    }
  }
};

module.exports = PeopleController;
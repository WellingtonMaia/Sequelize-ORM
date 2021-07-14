const repository = require('../repositories/classesRepository');

class ClassesController {
  static async getAllClasses(req, res) {
    try {
      const result = await repository.all();

      return res.status(200).json(result);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async getById(req, res) {
    try {
      const { id } = req.params;

      const entity = await repository.findById(id);
      
      return res.status(200).json(entity);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async store({ body }, res) {
    try {
      const result = await repository.create(body);

      return res.status(201).json(result);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async update({ params, body }, res) {
    try {
      const classBody = Object.assign({}, body, { id: params.id });

      const updatedClass = await repository.update(classBody); 

      return res.status(201).json(updatedClass);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async delete(req, res) {
    try {
      const { id } = req.params;

      await repository.delete(id);
      
      return res.status(200).json({
        message: `Class with id(${id}) deleted!`
      });
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }
}

module.exports = ClassesController;
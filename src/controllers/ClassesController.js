const ClassesRepository = require('../repositories/ClassesRepository');
const repository = new ClassesRepository();

class ClassesController {
  static async getAllClasses(req, res) {
    try {
      const query = req.query;
      const result = await repository.all(query);

      return res.status(200).json(result);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async getById(req, res) {
    try {
      const { id } = req.params;

      const classEntity = await repository.getById(
        id,
        undefined, 
        true
      );
      
      return res.status(200).json(classEntity);
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

      const updatedClass = await repository.update(classBody, classBody.id); 

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

  static async restore({ params }, res) {
    try {
      const id = params.id;
      
      await repository.restore(id);

      return res.status(201).json({ message: `Class with id(${id}) restored` });
    } catch (error) {
      return res.status(404).json(error.message);
    }
  }
}

module.exports = ClassesController;
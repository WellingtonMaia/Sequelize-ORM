const repository = require('../repositories/levelsRepository');

class LevelsController {
  static async getAllLevels(req, res) {
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
      
      const level = await repository.findById(id);
      
      return res.status(200).json(level);  
    } catch (error) {
      return res.status(404).json(error.message);
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

  static async update({ body, params }, res) {
    try {
      const id = params.id;
      const level = Object.assign({}, body, {id: id});
    
      const result = await repository.update(level);
    
      return res.status(201).json(result);
    } catch (error) {
      return res.status(404).json(error.message);
    }
  }

  static async delete({ params }, res) {
    try {
      const id = params.id;
      
      await repository.delete(id);

      return res.status(200).json({
        message: `Level with id(${id}) deleted!`
      });  
    } catch (error) {
      return res.status(404).json(error.message);
    }
  }
}

module.exports = LevelsController;


const LevelsRepository = require('../repositories/LevelsRepository');
const repository = new LevelsRepository();
const ErrorsRequest = require('./Exceptions/ErrorsRequest');

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
      
      const level = await repository.getById(
        id,
        'Level not found',
        true
      );
      
      return res.status(200).json(level);  
    } catch (error) {
      return res.status(404).json(error.message);
    }
  }

  static async store(req, res) {
    try {
      
      ErrorsRequest.validateRequest(req);

      const result = await repository.create(req.body);

      return res.status(201).json(result);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async update(req, res) {
    try {
      ErrorsRequest.validateRequest(req);

      const { id } = req.params;
      const level = Object.assign({}, req.body, {id: id});
    
      const result = await repository.update(level, id);
    
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

  static async restore({ params }, res) {
    try {
      const id = params.id;
      
      await repository.restore(id);

      return res.status(201).json({ message: `Level with id(${id}) restored` });
    } catch (error) {
      return res.status(404).json(error.message);
    }
  }
}

module.exports = LevelsController;

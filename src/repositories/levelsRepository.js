const model = require('../database/models');

module.exports = {
  async all() {
    return await model.Levels.findAll();
  },

  async findById(id) {
    const found = await model.Levels.findOne({
      where: {
        id: Number(id)
      },
      raw: true,
    });

    if (!found) {
      throw new Error('Person not found!');
    }

    return found;
  },

  async create(body) {
    return await model.Levels.create(body);
  },

  async update(person) {
    await this.findById(person.id);
    
    await model.Levels.update(person, {
      where: {
        id: Number(person.id)
      }
    });

    return await this.findById(person.id);
  },

  async delete(id) {
    await this.findById(id);
    
    return await model.Levels.destroy({
      where: {
        id: Number(id)
      }
    });
  }
}
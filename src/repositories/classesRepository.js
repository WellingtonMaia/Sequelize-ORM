const model = require('../database/models');

module.exports = {
  async all() {
    return await model.Classes.findAll();
  },

  async findById(id) {
    const found = await model.Classes.findOne({
      where: {
        id: Number(id)
      }
    });

    if (!found) {
      throw new Error('Class not found!');
    }

    return found;
  },

  async create(body) {
    return await model.Classes.create(body);
  },

  async update(person) {
    await this.findById(person.id);

    await model.Classes.update(person, {
      where: {
        id: Number(person.id)
      }
    });

    return await this.findById(person.id);
  },

  async delete(id) {
    await this.findById(id);
    
    return await model.Classes.destroy({
      where: {
        id: Number(id)
      }
    });
  }
}
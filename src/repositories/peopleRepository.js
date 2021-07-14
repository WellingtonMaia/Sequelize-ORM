const model = require('../database/models');

module.exports = {
  async all() {
    return await model.People.findAll();
  },

  async findById(id) {
    const found =  await model.People.findOne({
      where: {
        id: Number(id),
      },
      raw: true,
    });

    if (!found) {
      throw new Error('Person not found!');
    }

    return found;
  },

  async create(body) {
    return await model.People.create(body);
  },

  async update(person) {
    await this.findById(person.id);

    await model.People.update(person, {
      where: {
        id: Number(person.id)
      }
    });
    
    return await this.findById(person.id);
  },

  async delete(id) {
    await this.findById(id);

    return await model.People.destroy({
      where: {
        id: Number(id),
      }
    })
  }
}
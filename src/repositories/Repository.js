const database = require('../database/models');

class Repository {
  constructor(modelName) {
    this.modelName = modelName;
  }

  async all(where = {}) {
    return await database[this.modelName].findAll({
      where: { ...where }
    });
  }

  async getById(id, msgError, raw = false) {
    const found = await database[this.modelName].findOne({
      where: {
        id: id,
      },
      raw: raw
    });

    if (!found) {
      throw new Error(msgError || `${this.modelName} not found!`);
    }

    return found;
  }

  async getByIdCustom(where = {}, raw = false) {
    return await database[this.modelName].findOne({
      where: { ...where }
    },
    raw 
    );
  }

  async create(values) {
    return await database[this.modelName].create(values);
  }

  async update(values, id, transaction = {}) {
    await this.getById(id, `${this.modelName} not found`);

    await database[this.modelName].update(values, {
      where: {
        id: id
      }
    }, transaction);

    return await this.getById(id);
  }

  async updates(values, id, where, transaction = {}) {
    await this.getById(id, `${this.modelName} not found`);

    await database[this.modelName].update(values, {
      where: {
        ...where
      }
    }, transaction);

    return await this.getById(id);
  }

  async delete(id) {
    await this.getById(id);

    return await database[this.modelName].destroy({
      where: {
        id: id
      }
    });
  }

  async deleteCustom(id, where) {
    await this.getById(id);

    if (!where) throw new Error('Uninformed conditions')
    return await database[this.modelName].destroy({
      where: { ...where}
    });
  }

  async restore(id) {
    return await database[this.modelName].restore({
      where: {
        id: Number(id)
      }
    });
  }
}

module.exports = Repository;
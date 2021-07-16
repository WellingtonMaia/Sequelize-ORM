'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Levels extends Model {
    static associate(models) {
      // define association here
      Levels.hasMany(models.Classes, {
        foreignKey: 'level_id'
      });
    }
  };
  Levels.init({
    description: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'Levels',
    paranoid: true,
  });
  return Levels;
};
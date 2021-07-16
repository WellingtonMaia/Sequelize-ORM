'use strict';
const { all } = require('./scope/allPeople');

const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class People extends Model {
    static associate(models) {
      // define association here
      People.hasMany(models.Classes, {
        foreignKey: 'teacher_id'
      });
      People.hasMany(models.Enrollment, {
        foreignKey: 'student_id', 
        scope: { status: 'confirmed' },
        as: 'enrolledClasses'
      });
    }
  };

  People.init({
    name: DataTypes.STRING,
    active: DataTypes.BOOLEAN,
    email: DataTypes.STRING,
    role: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'People',
    paranoid: true,
    defaultScope: {
      where: {
        active: true
      }
    },
    scopes: {
      all
    }
  });

  return People;
};
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
    name: {
      type: DataTypes.STRING,
      validate: {
        isValid: (value) => {
          if (String(value).length < 3) {
            throw new Error('Name is invalid!');
          }
        }
      }
    },
    active: DataTypes.BOOLEAN,
    email: {
      type: DataTypes.STRING,
      validate: {
        isEmail: {
          msg: 'This is not e-mail!'
        }
      }
    },
    role: {
      type: DataTypes.STRING,
      validate: {
        isIn: {
          args: [['student', 'teacher']],
          msg: "Role have be 'student' or 'teacher'"
        }
      }
    }
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
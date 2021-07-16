'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('Enrollments', 'deletedAt', {
      allowNull: true,
      type: Sequelize.DATE
    });
  },

  down: async (queryInterface, Sequelize) => {
      await queryInterface.removeColumn('Enrollments', 'deletedAt');
  }
};

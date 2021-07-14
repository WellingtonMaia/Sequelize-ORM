'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    
      await queryInterface.bulkInsert('Levels', [
        {
          description: 'basic',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          description: 'intermediary',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          description: 'advanced',
          createdAt: new Date(),
          updatedAt: new Date()
        }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Levels', null, {});
  }
};

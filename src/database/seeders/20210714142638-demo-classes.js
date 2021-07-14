'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
      await queryInterface.bulkInsert('Classes', [
        {
          start_date: "2020-02-01",
          level_id: 1,
          teacher_id: 7,
          createdAt: new Date(),
          updatedAt: new Date()				 
        },
        {
          start_date: "2020-02-01",
          level_id: 2,
          teacher_id: 6,
          createdAt: new Date(),
          updatedAt: new Date()			
        },
        {
          start_date: "2020-02-01",
          level_id: 3,
          teacher_id: 7,
          createdAt: new Date(),
          updatedAt: new Date()			
          },
        {
          start_date: "2020-07-01",
          level_id: 3,
          teacher_id: 6,
          createdAt: new Date(),
          updatedAt: new Date()			
        }
      ], {});
  },

  down: async (queryInterface, Sequelize) => {
      await queryInterface.bulkDelete('Classes', null, {});
  }
};

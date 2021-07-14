'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('People', [
      {
        name: 'Jhon Doe',
        active: true,
        email: 'jhon.doe@outlook.com',
        role: 'student',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
				name: 'Ana Souza',
				active: true,
				email: 'ana@ana.com',
				role: 'student',
				createdAt: new Date(),
				updatedAt: new Date()
			},
			{
				name: 'Marcos Cintra',
				active: true,
				email: 'marcos@marcos.com',
				role: 'student',
				createdAt: new Date(),
				updatedAt: new Date()
			},
			{
				name: 'Felipe Cardoso',
				active: true,
				email: 'felipe@felipe.com',
				role: 'student',
				createdAt: new Date(),
				updatedAt: new Date()
			},
			{
				name: 'Sandra Gomes',
				active: false,
				email: 'sandra@sandra.com',
				role: 'student',
				createdAt: new Date(),
				updatedAt: new Date()
			},
			{
				name: 'Paula Morais',
				active: true,
				email: 'paula@paula.com',
				role: 'teacher',
				createdAt: new Date(),
				updatedAt: new Date()
			},
			{
				name: 'Sergio Lopes',
				active: true,
				email: 'sergio@sergio.com',
				role: 'teacher',
				createdAt: new Date(),
				updatedAt: new Date()
			}
  ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('People', null, {});
  }
};

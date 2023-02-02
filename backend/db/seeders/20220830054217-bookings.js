'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
     await queryInterface.bulkInsert('Bookings', [
        {
          spotId: 2,
          userId: 1,
          startDate: new Date('2022-10-12'),
          endDate: new Date('2022-11-12')
        },
        {
          spotId: 3,
          userId: 2,
          startDate: new Date('2023-10-12'),
          endDate: new Date('2023-11-12')
        },
        {
          spotId: 4,
          userId: 3,
          startDate: new Date('2024-10-12'),
          endDate: new Date('2024-11-12')
        },
        {
          spotId: 5,
          userId: 4,
          startDate: new Date('2025-10-12'),
          endDate: new Date('2025-11-12')
        },
        {
          spotId: 6,
          userId: 5,
          startDate: new Date('2026-10-12'),
          endDate: new Date('2026-11-12')
        }
     ], {})
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
     await queryInterface.bulkDelete('Bookings', null, {});
    
  }
};

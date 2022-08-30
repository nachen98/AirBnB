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
          spotId: 1,
          userId: 1,
          startDate: '2022-10-12',
          endDate: '2022-11-12'
        },
        {
          spotId: 2,
          userId: 2,
          startDate: '2023-10-12',
          endDate: '2023-11-12'
        },
        {
          spotId: 3,
          userId: 3,
          startDate: '2024-10-12',
          endDate: '2024-11-12'
        },
        {
          spotId: 4,
          userId: 4,
          startDate: '2025-10-12',
          endDate: '2025-11-12'
        },
        {
          spotId: 5,
          userId: 5,
          startDate: '2026-10-12',
          endDate: '2026-11-12'
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

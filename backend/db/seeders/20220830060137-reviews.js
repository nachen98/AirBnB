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
   await queryInterface.bulkInsert('Reviews', [
    {
      spotId: 1,
      userId: 1,
      review: 'It is a great place!',
      stars: 4,
    },
    {
      spotId: 2,
      userId: 2,
      review: 'We like it!',
      stars: 5,
    },
    {
      spotId: 3,
      userId: 3,
      review: 'We will come back.',
      stars: 4
    },
    {
      spotId: 4,
      userId: 4,
      review: 'We will come back.',
      stars: 5
    },
    {
      spotId: 5,
      userId: 5,
      review: 'We enjoyed it.',
      stars: 4
    },

  ])
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};

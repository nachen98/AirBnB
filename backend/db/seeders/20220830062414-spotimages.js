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
   await queryInterface.bulkInsert('SpotImages', [
    {
      spotId: 1,
      url: 'authenticate-me/backend/assets/spotimages/florian-schmidinger-b_79nOqf95I-unsplash.jpg',
      preview: true,
    },
    {
      spotId: 2,
      url: 'authenticate-me/backend/assets/spotimages/john-fornander-Id7u0EkTjBE-unsplash.jpg',
      preview: true,
    },
    {
      spotId: 3,
      url: 'authenticate-me/backend/assets/spotimages/ksenia-balandina-RCF5KSWb7Ms-unsplash.jpg',
      preview: true,
    },
    {
      spotId: 4,
      url: 'authenticate-me/backend/assets/spotimages/r-architecture-2gDwlIim3Uw-unsplash.jpg',
      preview: true,
    },
    {
      spotId: 5,
      url: 'authenticate-me/backend/assets/spotimages/sieuwert-otterloo-aren8nutd1Q-unsplash.jpg',
      preview: true,
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
    await queryInterface.bulkDelete('SpotImages', null, {})
  }
};

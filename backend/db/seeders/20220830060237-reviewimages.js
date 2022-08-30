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
   await queryInterface.bulkInsert('ReviewImages', [
    {
      reviewId: 1,
      url: 'authenticate-me/backend/assets/reviewimages/behzad-ghaffarian-nhWgZNV85LQ-unsplash.jpg'
    },
    {
      reviewId: 2,
      url: 'authenticate-me/backend/assets/reviewimages/daniel-chen-SoNaNOFT974-unsplash.jpg'
    },
    {
      reviewId: 3,
      url: 'authenticate-me/backend/assets/reviewimages/kam-idris-kyt0PkBSCNQ-unsplash.jpg'
    },
    {
      reviewId: 4,
      url: 'authenticate-me/backend/assets/reviewimages/neonbrand-Wp7t4cWN-68-unsplash.jpg'
    },
    {
      reviewId: 5,
      url: 'authenticate-me/backend/assets/reviewimages/roberto-nickson-emqnSQwQQDo-unsplash.jpg'
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
    await queryInterface.bulkDelete('ReviewImages', null, {})
  }
};

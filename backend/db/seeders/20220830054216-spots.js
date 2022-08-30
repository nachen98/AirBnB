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
   await queryInterface.bulkInsert('Spots', [
    {
      ownerId: 1,
      address: '129 Jarvill Road',
      city: 'Red Bluff',
      state: 'California',
      country: 'USA',
      lat: 40.785625,
      lng: -75.568985,
      name: 'beach',
      description: 'This is a beach',
      price: 12,
    },
    {
      ownerId: 2,
      address: '130 Oakwood Road',
      city: 'San Jose',
      state: 'California',
      country: 'USA',
      lat: 40.775475,
      lng: -75.235786,
      name: 'camping',
      description: 'This is a camping',
      price: 22,
    },
    {
      ownerId: 3,
      address: '60 Forest Dr',
      city: 'Santa Clara',
      state: 'California',
      country: 'USA',
      lat: 21.785625,
      lng: -88.568985,
      name: 'pool',
      description: 'This is a pool',
      price: 30,
    },
    {
      ownerId: 4,
      address: '78 Greenwood Ave',
      city: 'Palo Alto',
      state: 'California',
      country: 'USA',
      lat: 40.345625,
      lng: -75.798985,
      name: 'arctic',
      description: 'This is a arctic',
      price: 7,
    },
    {
      ownerId: 5,
      address: '890 Andros Road',
      city: 'Sunnyvale',
      state: 'California',
      country: 'USA',
      lat: 40.785679,
      lng: -75.547525,
      name:'cave',
      description: 'This is a cave',
      price: 78,
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
     await queryInterface.bulkDelete('Spots', null, {});
  }
};

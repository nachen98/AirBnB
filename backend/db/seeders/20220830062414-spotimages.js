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
        "spotId": 1,
        "url": "https://a0.muscache.com/im/pictures/8b29bbe1-fe0a-4a32-9dba-1af15dbde880.jpg",
        "preview": "true"
    },
    {
        "spotId": 2,
        "url": "https://a0.muscache.com/im/pictures/03f23a46-efe0-4537-92e3-96b8df13e98f.jpg",
        "preview": "true"
    },
    {
        "spotId": 3,
        "url": "https://a0.muscache.com/im/pictures/8ad870ec-30bf-4b38-a227-734fcb3c3181.jpg",
        "preview": "true"
    },
    {
        "spotId": 4,
        "url": "https://a0.muscache.com/im/pictures/d7118c3d-5574-4697-bb9d-cc743a7dbb4b.jpg",
        "preview": "true"
    },
    {
        "spotId": 5,
        "url": "https://a0.muscache.com/im/pictures/prohost-api/Hosting-533354529173145802/original/fb072ad0-aa45-44ea-94f4-0a3b8e3a7a87.jpeg",
        "preview": "true"
    },
    {
        "spotId": 6,
        "url": "https://a0.muscache.com/im/pictures/prohost-api/Hosting-553724453830698306/original/32a46b55-fee1-4553-bdba-a7a1c84b2bdd.jpeg",
        "preview": "true"
    },
    {
        "spotId": 7,
        "url": "https://a0.muscache.com/im/pictures/miso/Hosting-53058812/original/b53ab059-5eb5-40a7-8061-f5a2e34773cf.jpeg",
        "preview": "true"
    },
    {
        "spotId": 8,
        "url": "https://a0.muscache.com/im/pictures/6ee51aeb-5add-4499-bfed-59f70dd85ddb.jpg",
        "preview": "true"
    },
    {
        "spotId": 9,
        "url": "https://a0.muscache.com/im/pictures/miso/Hosting-49924321/original/bca57cdc-bc62-4366-91e9-03ba6c4059ee.jpeg",
        "preview": "true"
    },
    {
        "spotId": 10,
        "url": "https://a0.muscache.com/im/pictures/3211ba1c-0a71-4ce7-bec8-f820b3fb0ecf.jpg",
        "preview": "true"
    },
    {
        "spotId": 11,
        "url": "https://a0.muscache.com/im/pictures/56467892-0d23-4ab1-8302-9c3d0d5e52cd.jpg",
        "preview": "true"
    },
    {
        "spotId": 12,
        "url": "https://a0.muscache.com/im/pictures/7e416e40-eccc-44be-a6cf-8d287d71647c.jpg",
        "preview": "true"
    },
    {
        "spotId": 13,
        "url": "https://a0.muscache.com/im/pictures/miso/Hosting-39300792/original/e8eefc13-0dfe-4f19-9e22-f3f9ab6dc2f0.jpeg",
        "preview": "true"
    },
    {
        "spotId": 14,
        "url": "https://a0.muscache.com/im/pictures/monet/Luxury-654278398556572625/original/06a36369-c4eb-4b7e-81e8-a51e2102abc1",
        "preview": "true"
    },
    {
        "spotId": 15,
        "url": "https://a0.muscache.com/im/pictures/a50edfd5-b9b9-445f-a440-f3ce2518dd7c.jpg",
        "preview": "true"
    },
    {
        "spotId": 16,
        "url": "https://a0.muscache.com/im/pictures/25b6d6af-fc6d-4d17-9fd6-c231105b17a6.jpg",
        "preview": "true"
    },
    {
        "spotId": 17,
        "url": "https://a0.muscache.com/im/pictures/3d014422-5757-4fdd-bfdb-797b03e04c44.jpg",
        "preview": "true"
    },
    {
        "spotId": 18,
        "url": "https://a0.muscache.com/im/pictures/cf660cdf-d399-47d1-bb5c-68d7a025a6b2.jpg",
        "preview": "true"
    },
    {
        "spotId": 19,
        "url": "https://a0.muscache.com/im/pictures/monet/Luxury-552797436177821069/original/b165d0ad-b1f3-414b-ade0-8f84af3598c8",
        "preview": "true"
    },
    {
        "spotId": 20,
        "url": "https://a0.muscache.com/im/pictures/b4db5900-b90e-4cc3-b12b-6d17953d0079.jpg",
        "preview": "true"
    }
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

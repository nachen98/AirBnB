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
        "spotId": 1,
        "url": "https://a0.muscache.com/im/pictures/ad906eb4-9108-4e47-bd60-a4122ba460e4.jpg",
        "preview": "false"
    },
    {
        "spotId": 1,
        "url": "https://a0.muscache.com/im/pictures/5d9c39cc-2f2d-4ac5-a5a7-b817757ae239.jpg",
        "preview": "false"
    },
    {
        "spotId": 1,
        "url": "https://a0.muscache.com/im/pictures/miso/Hosting-37013228/original/f0658630-6670-4302-b14c-e5dce99bd0af.jpeg",
        "preview": "false"
    },
    {
        "spotId": 1,
        "url": "https://a0.muscache.com/im/pictures/miso/Hosting-37013228/original/e7d4d467-0895-4b6c-bb82-c424abc82de0.jpeg",
        "preview": "false"
    },
    {
        "spotId": 2,
        "url": "https://a0.muscache.com/im/pictures/03f23a46-efe0-4537-92e3-96b8df13e98f.jpg",
        "preview": "true"
    },
    {
        "spotId": 2,
        "url": "https://a0.muscache.com/im/pictures/3a98daa8-5ddb-41d4-a554-e1980b08dfad.jpg",
        "preview": "false"
    },
    {
        "spotId": 2,
        "url": "https://a0.muscache.com/im/pictures/fed50feb-d650-42b5-92e0-42f55541591e.jpg",
        "preview": "false"
    },
    {
        "spotId": 2,
        "url": "https://a0.muscache.com/im/pictures/f7387173-ace9-417b-a08f-d05129f688b7.jpg",
        "preview": "false"
    },
    {
        "spotId": 2,
        "url": "https://a0.muscache.com/im/pictures/5d64f8ca-2fba-4335-b499-46845aea6b9d.jpg",
        "preview": "false"
    },
    {
        "spotId": 3,
        "url": "https://a0.muscache.com/im/pictures/de2e0f51-39e0-44fc-8c34-6d82d670d636.jpg",
        "preview": "true"
    },
    {
        "spotId": 3,
        "url": "https://a0.muscache.com/im/pictures/a5a33c38-c161-4312-838e-41f6da08226f.jpg",
        "preview": "false"
    },
    {
        "spotId": 3,
        "url": "https://a0.muscache.com/im/pictures/8ad870ec-30bf-4b38-a227-734fcb3c3181.jpg",
        "preview": "false"
    },
    {
        "spotId": 3,
        "url": "https://a0.muscache.com/im/pictures/f43c8477-b212-4d2a-99b8-7db9d86f95c2.jpg",
        "preview": "false"
    },
    {
        "spotId": 3,
        "url": "https://a0.muscache.com/im/pictures/1e215e72-6d59-44f0-a3c1-0622172aa412.jpg",
        "preview": "false"
    },
    {
        "spotId": 3,
        "url": "https://a0.muscache.com/im/pictures/5bb65d75-111c-4534-bdc5-87d5752d0a30.jpg",
        "preview": "false"
    },
    {
        "spotId": 3,
        "url": "https://a0.muscache.com/im/pictures/f3c57745-cd57-4cb8-a103-efac32b4cf5c.jpg",
        "preview": "false"
    },
    {
        "spotId": 3,
        "url": "https://a0.muscache.com/im/pictures/18bd32b0-3678-4f4d-82c7-bc939a809564.jpg",
        "preview": "false"
    },
    {
        "spotId": 3,
        "url": "https://a0.muscache.com/im/pictures/891157ae-e37e-4d13-9788-1903b2492935.jpg",
        "preview": "false"
    },
    {
        "spotId": 4,
        "url": "https://a0.muscache.com/im/pictures/miso/Hosting-46512101/original/7c3b4ce0-aadf-4ae6-b19c-131007abe5da.jpeg",
        "preview": "true"
    },
    {
        "spotId": 4,
        "url": "https://a0.muscache.com/im/pictures/f9da5002-00c9-4f74-8f87-dcaccb5c8ea9.jpg",
        "preview": "false"
    },
    {
        "spotId": 4,
        "url": "https://a0.muscache.com/im/pictures/13f1a8b5-38a9-4bd5-853e-1e5912745dc7.jpg",
        "preview": "false"
    },
    {
        "spotId": 4,
        "url": "https://a0.muscache.com/im/pictures/miso/Hosting-46512101/original/fe29faba-eab4-40fc-97a4-4b4df07e4eb6.jpeg",
        "preview": "false"
    },
    {
        "spotId": 4,
        "url": "https://a0.muscache.com/im/pictures/d7118c3d-5574-4697-bb9d-cc743a7dbb4b.jpg",
        "preview": "false"
    },
    {
        "spotId": 5,
        "url": "https://a0.muscache.com/im/pictures/prohost-api/Hosting-533354529173145802/original/fb072ad0-aa45-44ea-94f4-0a3b8e3a7a87.jpeg",
        "preview": "true"
    },
    {
        "spotId": 5,
        "url": "https://a0.muscache.com/im/pictures/prohost-api/Hosting-533354529173145802/original/09fa8bd0-f169-4d59-833c-4cb457fe08bf.jpeg",
        "preview": "false"
    },
    {
        "spotId": 5,
        "url": "https://a0.muscache.com/im/pictures/prohost-api/Hosting-533354529173145802/original/e9e3597d-ad3b-4fd9-b1a4-f4eb807fecd2.jpeg",
        "preview": "false"
    },
    {
        "spotId": 5,
        "url": "https://a0.muscache.com/im/pictures/prohost-api/Hosting-533354529173145802/original/78066064-aa0a-414d-8def-a71b817d0a9b.jpeg",
        "preview": "false"
    },
    {
        "spotId": 5,
        "url": "https://a0.muscache.com/im/pictures/prohost-api/Hosting-533354529173145802/original/db566131-bd2a-42bf-9086-26b7e203f9c7.jpeg",
        "preview": "false"
    },
    {
        "spotId": 6,
        "url": "https://a0.muscache.com/im/pictures/prohost-api/Hosting-553724453830698306/original/4ffdbc06-d624-484e-9505-8b534685c14a.jpeg",
        "preview": "true"
    },
    {
        "spotId": 6,
        "url": "https://a0.muscache.com/im/pictures/prohost-api/Hosting-553724453830698306/original/0d6c3452-f8a2-4ed1-b789-1e3a029500f2.jpeg",
        "preview": "false"
    },
    {
        "spotId": 6,
        "url": "https://a0.muscache.com/im/pictures/prohost-api/Hosting-553724453830698306/original/32a46b55-fee1-4553-bdba-a7a1c84b2bdd.jpeg",
        "preview": "false"
    },
    {
        "spotId": 6,
        "url": "https://a0.muscache.com/im/pictures/prohost-api/Hosting-553724453830698306/original/0eea157f-eeb0-4f6f-a3bc-9ab18dd1fc4e.jpeg",
        "preview": "false"
    },
    {
        "spotId": 6,
        "url": "https://a0.muscache.com/im/pictures/prohost-api/Hosting-553724453830698306/original/8eda3ed0-ffbc-454b-bdee-5d6f7f621e53.jpeg",
        "preview": "false"
    },
    {
        "spotId": 7,
        "url": "https://a0.muscache.com/im/pictures/miso/Hosting-53058812/original/34b24ac3-a00f-4747-9440-0fdd30f4bdf6.jpeg",
        "preview": "true"
    },
    {
        "spotId": 7,
        "url": "https://a0.muscache.com/im/pictures/miso/Hosting-53058812/original/c389b35e-5c33-4916-a7ca-061e86747867.jpeg",
        "preview": "false"
    },
    {
        "spotId": 7,
        "url": "https://a0.muscache.com/im/pictures/miso/Hosting-53058812/original/b53ab059-5eb5-40a7-8061-f5a2e34773cf.jpeg",
        "preview": "false"
    },
    {
        "spotId": 7,
        "url": "https://a0.muscache.com/im/pictures/miso/Hosting-53058812/original/734016f0-6ab8-47b1-9690-b3ca373f6e5d.jpeg",
        "preview": "false"
    },
    {
        "spotId": 7,
        "url": "https://a0.muscache.com/im/pictures/miso/Hosting-53058812/original/fe6ffeea-dfcc-45da-af29-a530f7296f4f.jpeg",
        "preview": "false"
    },
    {
        "spotId": 8,
        "url": "https://a0.muscache.com/im/pictures/3f8d4c0c-b8bb-4470-997f-b7c461b193c3.jpg",
        "preview": "true"
    },
    {
        "spotId": 8,
        "url": "https://a0.muscache.com/im/pictures/6ee51aeb-5add-4499-bfed-59f70dd85ddb.jpg",
        "preview": "false"
    },
    {
        "spotId": 8,
        "url": "https://a0.muscache.com/im/pictures/7db22037-62e0-4868-8cfb-b36e8991d026.jpg",
        "preview": "false"
    },
    {
        "spotId": 8,
        "url": "https://a0.muscache.com/im/pictures/f7fc90b1-69df-4e66-afee-92abde9c23cf.jpg",
        "preview": "false"
    },
    {
        "spotId": 8,
        "url": "https://a0.muscache.com/im/pictures/a550a039-c538-4201-b103-329ce9892c1f.jpg",
        "preview": "false"
    },
    {
        "spotId": 9,
        "url": "https://a0.muscache.com/im/pictures/miso/Hosting-49924321/original/bca57cdc-bc62-4366-91e9-03ba6c4059ee.jpeg",
        "preview": "true"
    },
    {
        "spotId": 9,
        "url": "https://a0.muscache.com/im/pictures/miso/Hosting-49924321/original/992ad5e1-78c8-43d4-9b69-a898d4ac21f6.jpeg",
        "preview": "false"
    },
    {
        "spotId": 9,
        "url": "https://a0.muscache.com/im/pictures/miso/Hosting-49924321/original/9348db93-1b50-47c0-9aff-11ead5facd22.jpeg",
        "preview": "false"
    },
    {
        "spotId": 9,
        "url": "https://a0.muscache.com/im/pictures/a7c25c65-91ab-45dd-81ac-9dcd60c34623.jpg",
        "preview": "false"
    },
    {
        "spotId": 10,
        "url": "https://a0.muscache.com/im/pictures/3211ba1c-0a71-4ce7-bec8-f820b3fb0ecf.jpg",
        "preview": "true"
    },
    {
        "spotId": 10,
        "url": "https://a0.muscache.com/im/pictures/81c6e7d2-ab8d-450b-be25-48e90ade9279.jpg",
        "preview": "false"
    },
    {
        "spotId": 10,
        "url": "https://a0.muscache.com/im/pictures/b3b8d9f7-dedf-45f7-8393-1ccf4a9e3e5e.jpg",
        "preview": "false"
    },
    {
        "spotId": 10,
        "url": "https://a0.muscache.com/im/pictures/fe4e9822-939f-48d5-a8d5-1d22f93baeff.jpg",
        "preview": "false"
    },
    {
        "spotId": 10,
        "url": "https://a0.muscache.com/im/pictures/53abdadf-9594-4d8c-a78b-66468c2e4808.jpg",
        "preview": "false"
    },
    {
        "spotId": 10,
        "url": "https://a0.muscache.com/im/pictures/351ece27-8dab-463b-aca8-14b33836716f.jpg",
        "preview": "false"
    },
    {
        "spotId": 11,
        "url": "https://a0.muscache.com/im/pictures/de1a5925-d8f6-4f31-8008-967c0a19562a.jpg",
        "preview": "true"
    },
    {
        "spotId": 11,
        "url": "https://a0.muscache.com/im/pictures/a56b89e4-5607-4e3e-a69d-e112a17355cc.jpg",
        "preview": "false"
    },
    {
        "spotId": 11,
        "url": "https://a0.muscache.com/im/pictures/a7f86e41-3cf5-4994-bc84-ce9036138149.jpg",
        "preview": "false"
    },
    {
        "spotId": 11,
        "url": "https://a0.muscache.com/im/pictures/56467892-0d23-4ab1-8302-9c3d0d5e52cd.jpg",
        "preview": "false"
    },
    {
        "spotId": 11,
        "url": "https://a0.muscache.com/im/pictures/6342fa90-e175-442a-abd3-79d0b2e89f10.jpg",
        "preview": "false"
    },
    {
        "spotId": 12,
        "url": "https://a0.muscache.com/im/pictures/7e416e40-eccc-44be-a6cf-8d287d71647c.jpg",
        "preview": "true"
    },
    {
        "spotId": 12,
        "url": "https://a0.muscache.com/im/pictures/3d35e90f-26bf-431b-a63c-e476c76478ff.jpg",
        "preview": "false"
    },
    {
        "spotId": 12,
        "url": "https://a0.muscache.com/im/pictures/7d50c4d0-598b-4951-b873-e097a318bdc5.jpg",
        "preview": "false"
    },
    {
        "spotId": 12,
        "url": "https://a0.muscache.com/im/pictures/39d2bff8-8a9b-48ed-8be8-0b4b3adbbc2b.jpg",
        "preview": "false"
    },
    {
        "spotId": 12,
        "url": "https://a0.muscache.com/im/pictures/71e56a6c-41b0-45a6-8d83-9b8394cc677f.jpg",
        "preview": "false"
    },
    {
        "spotId": 12,
        "url": "https://a0.muscache.com/im/pictures/57dfe1d9-f780-4c48-8c9d-09e91cca996d.jpg",
        "preview": "false"
    },
    {
        "spotId": 12,
        "url": "https://a0.muscache.com/im/pictures/a4c30b2e-7de3-4849-8dda-454ba49071ec.jpg",
        "preview": "false"
    },
    {
        "spotId": 12,
        "url": "https://a0.muscache.com/im/pictures/73a479ef-a00d-403c-8695-dc6cb8f5f820.jpg",
        "preview": "false"
    },
    {
        "spotId": 13,
        "url": "https://a0.muscache.com/im/pictures/miso/Hosting-39300792/original/1f81c029-4011-480e-a955-6f37602cfe44.jpeg",
        "preview": "true"
    },
    {
        "spotId": 13,
        "url": "https://a0.muscache.com/im/pictures/miso/Hosting-39300792/original/e8eefc13-0dfe-4f19-9e22-f3f9ab6dc2f0.jpeg",
        "preview": "false"
    },
    {
        "spotId": 13,
        "url": "https://a0.muscache.com/im/pictures/96d9ac8a-82d1-4fe3-b3db-facf17fbb397.jpg",
        "preview": "false"
    },
    {
        "spotId": 13,
        "url": "https://a0.muscache.com/im/pictures/miso/Hosting-39300792/original/010c6e98-7562-47dd-817c-012e0ffcc36b.jpeg",
        "preview": "false"
    },
    {
        "spotId": 13,
        "url": "https://a0.muscache.com/im/pictures/miso/Hosting-39300792/original/c96eb534-c8d0-46e1-82cc-dfe7b98fd1ea.jpeg",
        "preview": "false"
    },
    {
        "spotId": 14,
        "url": "https://a0.muscache.com/im/pictures/monet/Luxury-654278398556572625/original/936f2243-f704-4f64-a849-571554c8752a",
        "preview": "true"
    },
    {
        "spotId": 14,
        "url": "https://a0.muscache.com/im/pictures/1e215e72-6d59-44f0-a3c1-0622172aa412.jpg",
        "preview": "false"
    },
    {
        "spotId": 14,
        "url": "https://a0.muscache.com/im/pictures/monet/Luxury-654278398556572625/original/f52036a6-26c2-4eb8-8419-271293230300",
        "preview": "false"
    },
    {
        "spotId": 14,
        "url": "https://a0.muscache.com/im/pictures/monet/Luxury-654278398556572625/original/476006b7-5c5b-4576-b3a2-f0ca87e0ea3c",
        "preview": "false"
    },
    {
        "spotId": 14,
        "url": "https://a0.muscache.com/im/pictures/monet/Luxury-654278398556572625/original/b7e9b444-1b07-4717-b4d6-cfb526e4173e",
        "preview": "false"
    },
    {
        "spotId": 14,
        "url": "https://a0.muscache.com/im/pictures/monet/Luxury-654278398556572625/original/87a8d3cd-5609-4b22-9fa7-8e58cf573c5f",
        "preview": "false"
    },
    {
        "spotId": 14,
        "url": "https://a0.muscache.com/im/pictures/891157ae-e37e-4d13-9788-1903b2492935.jpg",
        "preview": "false"
    },
    {
        "spotId": 14,
        "url": "https://a0.muscache.com/im/pictures/monet/Luxury-654278398556572625/original/7990896f-3388-4d3e-a4e7-c29bfac1c2b8",
        "preview": "false"
    },
    {
        "spotId": 14,
        "url": "https://a0.muscache.com/im/pictures/monet/Luxury-654278398556572625/original/769bce1c-a1db-4473-a13f-7125b03a2786",
        "preview": "false"
    },
    {
        "spotId": 14,
        "url": "https://a0.muscache.com/im/pictures/monet/Luxury-654278398556572625/original/d265016e-be69-4251-8b04-9e56ca4ab274",
        "preview": "false"
    },
    {
        "spotId": 14,
        "url": "https://a0.muscache.com/im/pictures/monet/Luxury-654278398556572625/original/17d303c7-8efc-455f-b281-92d431b9cf08",
        "preview": "false"
    },
    {
        "spotId": 14,
        "url": "https://a0.muscache.com/im/pictures/monet/Luxury-654278398556572625/original/406f9b34-3739-42cd-9638-c539e6ad6882",
        "preview": "false"
    },
    {
        "spotId": 14,
        "url": "https://a0.muscache.com/im/pictures/monet/Luxury-654278398556572625/original/fb36b5f8-03d9-48d9-bdea-cf049ff09eb8",
        "preview": "false"
    },
    {
        "spotId": 14,
        "url": "https://a0.muscache.com/im/pictures/monet/Luxury-654278398556572625/original/06a36369-c4eb-4b7e-81e8-a51e2102abc1",
        "preview": "false"
    },
    {
        "spotId": 15,
        "url": "https://a0.muscache.com/im/pictures/debca1b3-e910-4a37-a5e7-e686c1346c55.jpg",
        "preview": "true"
    },
    {
        "spotId": 15,
        "url": "https://a0.muscache.com/im/pictures/bcfe3dd8-2e92-482a-8332-b4e4a0cdf9c2.jpg",
        "preview": "false"
    },
    {
        "spotId": 15,
        "url": "https://a0.muscache.com/im/pictures/55a0e6c0-026f-4e86-bb79-26ade2d7102e.jpg",
        "preview": "false"
    },
    {
        "spotId": 15,
        "url": "https://a0.muscache.com/im/pictures/891157ae-e37e-4d13-9788-1903b2492935.jpg",
        "preview": "false"
    },
    {
        "spotId": 15,
        "url": "https://a0.muscache.com/im/pictures/2c95f889-ed09-49a8-b8f3-d3b422b20f2c.jpg",
        "preview": "false"
    },
    {
        "spotId": 15,
        "url": "https://a0.muscache.com/im/pictures/f3cfe20b-2a1b-44c0-8615-42f14fdaace8.jpg",
        "preview": "false"
    },
    {
        "spotId": 15,
        "url": "https://a0.muscache.com/im/pictures/02bd661d-dbbf-4ca9-b07d-5e179f4d1eeb.jpg",
        "preview": "false"
    },
    {
        "spotId": 15,
        "url": "https://a0.muscache.com/im/pictures/a50edfd5-b9b9-445f-a440-f3ce2518dd7c.jpg",
        "preview": "false"
    },
    {
        "spotId": 15,
        "url": "https://a0.muscache.com/im/pictures/2192c305-e8c2-42b6-99b6-22c4b0293037.jpg",
        "preview": "false"
    },
    {
        "spotId": 15,
        "url": "https://a0.muscache.com/im/pictures/536431ce-a1e2-4857-80f6-475e3f4d8d8d.jpg",
        "preview": "false"
    },
    {
        "spotId": 15,
        "url": "https://a0.muscache.com/im/pictures/0048cbde-1270-4f4b-9ffc-82a5a95144ef.jpg",
        "preview": "false"
    },
    {
        "spotId": 16,
        "url": "https://a0.muscache.com/im/pictures/25b6d6af-fc6d-4d17-9fd6-c231105b17a6.jpg",
        "preview": "true"
    },
    {
        "spotId": 16,
        "url": "https://a0.muscache.com/im/pictures/f2bf7f64-e354-460c-b12f-0ed173af669b.jpg",
        "preview": "false"
    },
    {
        "spotId": 16,
        "url": "https://a0.muscache.com/im/pictures/72e16baf-1213-448f-8799-7c661466aa87.jpg",
        "preview": "false"
    },
    {
        "spotId": 16,
        "url": "https://a0.muscache.com/im/pictures/40073d9a-f9ff-4ae8-9a96-5a07fcb5adeb.jpg",
        "preview": "false"
    },
    {
        "spotId": 16,
        "url": "https://a0.muscache.com/im/pictures/18ae98b5-5cdb-47f6-b78e-1ba59c000ee9.jpg",
        "preview": "false"
    },
    {
        "spotId": 16,
        "url": "https://a0.muscache.com/im/pictures/081af60c-54a1-463a-991c-ae036db2215a.jpg",
        "preview": "false"
    },
    {
        "spotId": 17,
        "url": "https://a0.muscache.com/im/pictures/3d014422-5757-4fdd-bfdb-797b03e04c44.jpg",
        "preview": "true"
    },
    {
        "spotId": 17,
        "url": "https://a0.muscache.com/im/pictures/a69ecdc0-cd38-42d4-8285-d82c7b8c7823.jpg",
        "preview": "false"
    },
    {
        "spotId": 17,
        "url": "https://a0.muscache.com/im/pictures/49a3c55c-1fdb-445b-a1b8-4fdf4f67ad64.jpg",
        "preview": "false"
    },
    {
        "spotId": 17,
        "url": "https://a0.muscache.com/im/pictures/13d23966-a44f-4ae4-a0c1-59886f40b6a8.jpg",
        "preview": "false"
    },
    {
        "spotId": 17,
        "url": "https://a0.muscache.com/im/pictures/7ea8f048-4e4e-498b-b83a-a9621891a56f.jpg",
        "preview": "false"
    },
    {
        "spotId": 18,
        "url": "https://a0.muscache.com/im/pictures/49a2b389-7cb8-4a47-98d6-e9982c15907b.jpg",
        "preview": "true"
    },
    {
        "spotId": 18,
        "url": "https://a0.muscache.com/im/pictures/3fd5c6a5-c5f8-48ab-93b4-7374c384d5d3.jpg",
        "preview": "false"
    },
    {
        "spotId": 18,
        "url": "https://a0.muscache.com/im/pictures/1e215e72-6d59-44f0-a3c1-0622172aa412.jpg",
        "preview": "false"
    },
    {
        "spotId": 18,
        "url": "https://a0.muscache.com/im/pictures/891157ae-e37e-4d13-9788-1903b2492935.jpg",
        "preview": "false"
    },
    {
        "spotId": 18,
        "url": "https://a0.muscache.com/im/pictures/520a0af7-a77b-4878-b41e-cd5d3ce693ef.jpg",
        "preview": "false"
    },
    {
        "spotId": 18,
        "url": "https://a0.muscache.com/im/pictures/cf660cdf-d399-47d1-bb5c-68d7a025a6b2.jpg",
        "preview": "false"
    },
    {
        "spotId": 18,
        "url": "https://a0.muscache.com/im/pictures/e31a0ef9-8389-43e2-be78-a4e3beed9a90.jpg",
        "preview": "false"
    },
    {
        "spotId": 18,
        "url": "https://a0.muscache.com/im/pictures/a0e992dc-7c15-4b1f-976a-a6bcb54f5d67.jpg",
        "preview": "false"
    },
    {
        "spotId": 18,
        "url": "https://a0.muscache.com/im/pictures/bd6bae95-48fa-467d-ab4c-514c96d84a73.jpg",
        "preview": "false"
    },
    {
        "spotId": 18,
        "url": "https://a0.muscache.com/im/pictures/629e19b4-4882-4ef7-b72b-c2e4eb871022.jpg",
        "preview": "false"
    },
    {
        "spotId": 19,
        "url": "https://a0.muscache.com/im/pictures/monet/Luxury-552797436177821069/original/b165d0ad-b1f3-414b-ade0-8f84af3598c8",
        "preview": "true"
    },
    {
        "spotId": 19,
        "url": "https://a0.muscache.com/im/pictures/1e215e72-6d59-44f0-a3c1-0622172aa412.jpg",
        "preview": "false"
    },
    {
        "spotId": 19,
        "url": "https://a0.muscache.com/im/pictures/891157ae-e37e-4d13-9788-1903b2492935.jpg",
        "preview": "false"
    },
    {
        "spotId": 19,
        "url": "https://a0.muscache.com/im/pictures/monet/Luxury-552797436177821069/original/a960be64-28bd-4da3-b36a-a643c4d345a4",
        "preview": "false"
    },
    {
        "spotId": 19,
        "url": "https://a0.muscache.com/im/pictures/monet/Luxury-552797436177821069/original/e41b4ddd-1898-402b-9cca-7d49bb328bdd",
        "preview": "false"
    },
    {
        "spotId": 19,
        "url": "https://a0.muscache.com/im/pictures/monet/Luxury-552797436177821069/original/0167ceaf-5654-43de-8081-992a498a7671",
        "preview": "false"
    },
    {
        "spotId": 19,
        "url": "https://a0.muscache.com/im/pictures/monet/Luxury-552797436177821069/original/65a7320e-f208-459b-bd15-a7edfb30e2a7",
        "preview": "false"
    },
    {
        "spotId": 19,
        "url": "https://a0.muscache.com/im/pictures/monet/Luxury-552797436177821069/original/612924bc-8e07-47d7-a072-e7fd78a28cf3",
        "preview": "false"
    },
    {
        "spotId": 19,
        "url": "https://a0.muscache.com/im/pictures/monet/Luxury-552797436177821069/original/1e7f3de1-faff-4ec4-83be-03cbf93d22da",
        "preview": "false"
    },
    {
        "spotId": 19,
        "url": "https://a0.muscache.com/im/pictures/monet/Luxury-552797436177821069/original/068eb85f-30c2-41da-894c-2c354bf3c934",
        "preview": "false"
    },
    {
        "spotId": 19,
        "url": "https://a0.muscache.com/im/pictures/monet/Luxury-552797436177821069/original/8fdc2f2f-9dbb-4e1d-9339-e0f31f7bf5bd",
        "preview": "false"
    },
    {
        "spotId": 19,
        "url": "https://a0.muscache.com/im/pictures/monet/Luxury-552797436177821069/original/d89a32b0-f6a2-467b-bdd1-8a2c344c2230",
        "preview": "false"
    },
    {
        "spotId": 20,
        "url": "https://a0.muscache.com/im/pictures/b4db5900-b90e-4cc3-b12b-6d17953d0079.jpg",
        "preview": "true"
    },
    {
        "spotId": 20,
        "url": "https://a0.muscache.com/im/pictures/891157ae-e37e-4d13-9788-1903b2492935.jpg",
        "preview": "false"
    },
    {
        "spotId": 20,
        "url": "https://a0.muscache.com/im/pictures/1e215e72-6d59-44f0-a3c1-0622172aa412.jpg",
        "preview": "false"
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

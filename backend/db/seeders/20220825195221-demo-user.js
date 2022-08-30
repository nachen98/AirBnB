'use strict';
const bcrypt = require("bcryptjs");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [
      {
        firstName: 'Amy',
        lastName: 'Smith',
        email: 'demo@user.io',
        username: 'Demo-lition',
        hashedPassword: bcrypt.hashSync('password1')
      },
      {
        firstName: 'Ellen',
        lastName: 'Thomas',
        email: 'user2@user.io',
        username: 'FakeUser2',
        hashedPassword: bcrypt.hashSync('password2')
      },
      {
        firstName: 'Ryan',
        lastName: 'Roberts',
        email: 'user3@user.io',
        username: 'FakeUser3',
        hashedPassword: bcrypt.hashSync('password3')
      },
      {
        firstName: 'Bob',
        lastName: 'Liang',
        email: 'user4@user.io',
        username: 'FakeUser4',
        hashedPassword: bcrypt.hashSync('password4')
      },
      {
        firstName: 'Leo',
        lastName: 'Arnold',
        email: 'user5@user.io',
        username: 'FakeUser5',
        hashedPassword: bcrypt.hashSync('password5')
      },

    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    const Op = Sequelize.Op;
      await queryInterface.bulkDelete('Users', {
      username: { [Op.in]: ['Demo-lition', 'FakeUser2', 'FakeUser3', 'FakeUser4', 'FakeUser5'] }
    }, {});
  }
};
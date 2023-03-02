'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('users', [
      {
        username: 'vozy',
        email: 'vozy@gmail.com',
        password: 'MyPassw0rd1',
        createdAt: '1970-01-03 00:00:01',
        updatedAt: '1970-01-03 00:00:01',
      },
      {
        username: 'orsiiii',
        email: 'orsi@gmail.com',
        password: 'MyPassw0rd2',
        createdAt: '1971-01-03 00:00:01',
        updatedAt: '1971-01-03 00:00:01',
      },
    ]);
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('users', null, {});
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};

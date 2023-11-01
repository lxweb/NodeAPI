'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
      await queryInterface.bulkInsert('company', [
        {
          name: 'Koka',
          country: 'UY',
          cant_employees: 7
        },
        {
          name: 'Pexi',
          country: 'BR',
          cant_employees: 3
        },
        {
          name: 'LionFresh',
          country: 'AR',
          cant_employees: 5
        },
    ], {});
    
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('company', null, {});
  }
};

'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {

    await queryInterface.bulkInsert('employees', [
      {
        "company_name": "Koka",
        "document_number": 12345678,
        "first_name": "John",
        "last_name": "Doe",
        "date_admission": "2023-11-01 11:35:56"
      },
      {
        "company_name": "Koka",
        "document_number": 23456789,
        "first_name": "Jane",
        "last_name": "Smith",
        "date_admission": "2023-11-01 11:35:56"
      },
      {
        "company_name": "Koka",
        "document_number": 34567890,
        "first_name": "Bob",
        "last_name": "Johnson",
        "date_admission": "2023-11-01 11:35:56"
      },
      {
        "company_name": "Koka",
        "document_number": 45678901,
        "first_name": "Alice",
        "last_name": "Brown",
        "date_admission": "2023-11-01 11:35:56"
      },
      {
        "company_name": "Koka",
        "document_number": 56789012,
        "first_name": "Ella",
        "last_name": "Davis",
        "date_admission": "2023-11-01 11:35:56"
      },
      {
        "company_name": "Koka",
        "document_number": 67890123,
        "first_name": "William",
        "last_name": "Wilson",
        "date_admission": "2023-11-01 11:35:56"
      },
      {
        "company_name": "Koka",
        "document_number": 78901234,
        "first_name": "Olivia",
        "last_name": "Miller",
        "date_admission": "2023-11-01 11:35:56"
      },
      {
        "company_name": "Pexi",
        "document_number": 89012345,
        "first_name": "Michael",
        "last_name": "Lee",
        "date_admission": "2023-11-01 11:35:56"
      },
      {
        "company_name": "Pexi",
        "document_number": 90123456,
        "first_name": "Sophia",
        "last_name": "Martinez",
        "date_admission": "2023-11-01 11:35:56"
      },
      {
        "company_name": "Pexi",
        "document_number": 71234567,
        "first_name": "Daniel",
        "last_name": "Garcia",
        "date_admission": "2023-11-01 11:35:56"
      },
      {
        "company_name": "LionFresh",
        "document_number": 10293847,
        "first_name": "Oliver",
        "last_name": "Brown",
        "date_admission": "2023-11-01 11:35:56"
      },
      {
        "company_name": "LionFresh",
        "document_number": 21098765,
        "first_name": "Ava",
        "last_name": "Wilson",
        "date_admission": "2023-11-01 11:35:56"
      },
      {
        "company_name": "LionFresh",
        "document_number": 54321098,
        "first_name": "Liam",
        "last_name": "Smith",
        "date_admission": "2023-11-01 11:35:56"
      },
      {
        "company_name": "LionFresh",
        "document_number": 87654321,
        "first_name": "Mia",
        "last_name": "Johnson",
        "date_admission": "2023-11-01 11:35:56"
      },
      {
        "company_name": "LionFresh",
        "document_number": 98765432,
        "first_name": "Noah",
        "last_name": "Davis",
        "date_admission": "2023-11-01 11:35:56"
      }
    ], {});
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};

'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('users', [{
      name: "admin",
      cpf: "12345678900",
      email: "admin@admin.com",
      password: "$2b$08$8pOlpJ9oNoB3N5lVE/9SOuXZvkp12EkXKA/saLfP.se0W7j4cWTme", //123456
      "created_at": new Date(),
      "updated_at": new Date(),
      type: "professor",
    }], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('users', null, {});
  }
};
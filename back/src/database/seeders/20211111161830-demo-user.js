'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('users', [{
      name: "admin",
      cpf: "12345678900",
      email: "admin@admin.com",
      password: "$2b$08$Zl7RMMWIPVaowi1.fxdrw.osYfAqpRRds9O/urg94FmqmaxSLIQn.", //admin
      "created_at": new Date(),
      "updated_at": new Date(),
      type: "professor",
    }], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('users', null, {});
  }
};
'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('question_categories', [
      {
        "knowledge_area": "Linguagens",
        discipline: "Língua Portuguesa",
        "created_at": new Date(),
        "updated_at": new Date(),
      },
      {
        "knowledge_area": "Linguagens",
        discipline: "Artes",
        "created_at": new Date(),
        "updated_at": new Date(),
      },
      {
        "knowledge_area": "Linguagens",
        discipline: "Educação Física",
        "created_at": new Date(),
        "updated_at": new Date(),
      },
      {
        "knowledge_area": "Linguagens",
        discipline: "Inglês",
        "created_at": new Date(),
        "updated_at": new Date(),
      },
      {
        "knowledge_area": "Matemática",
        discipline: "Matemática",
        "created_at": new Date(),
        "updated_at": new Date(),
      },
      {
        "knowledge_area": "Ciências da Natureza",
        discipline: "Biologia",
        "created_at": new Date(),
        "updated_at": new Date(),
      },
      {
        "knowledge_area": "Ciências da Natureza",
        discipline: "Física",
        "created_at": new Date(),
        "updated_at": new Date(),
      },
      {
        "knowledge_area": "Ciências da Natureza",
        discipline: "Química",
        "created_at": new Date(),
        "updated_at": new Date(),
      },
      {
        "knowledge_area": "Ciências Humanas",
        discipline: "Geografia",
        "created_at": new Date(),
        "updated_at": new Date(),
      },
      {
        "knowledge_area": "Ciências Humanas",
        discipline: "História",
        "created_at": new Date(),
        "updated_at": new Date(),
      },
      {
        "knowledge_area": "Ciências Humanas",
        discipline: "Geografia",
        "created_at": new Date(),
        "updated_at": new Date(),
      },
      {
        "knowledge_area": "Ciências Humanas",
        discipline: "Filosofia",
        "created_at": new Date(),
        "updated_at": new Date(),
      },
      {
        "knowledge_area": "Ciências Humanas",
        discipline: "Sociologia",
        "created_at": new Date(),
        "updated_at": new Date(),
      },
      {
        "knowledge_area": "Ensino Religioso",
        discipline: "Ensino Religioso",
        "created_at": new Date(),
        "updated_at": new Date(),
      },
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('question_types', null, {});
  }
};

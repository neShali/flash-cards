'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

    const arr = [
      {question: 'Как меня зовут?', answer: 'Настя', deck_id: 3, createdAt: new Date(), updatedAt: new Date()},
      {question: 'наша группа?', answer: 'Пчелы', deck_id: 2, createdAt: new Date(), updatedAt: new Date()},
      {question: 'Школа?', answer: 'Эльбрус', deck_id: 2, createdAt: new Date(), updatedAt: new Date()},
      {question: 'День сегодня?', answer: 'Четверг', deck_id: 3, createdAt: new Date(), updatedAt: new Date()},
    ];
    await queryInterface.bulkInsert('Cards', arr);

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

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};

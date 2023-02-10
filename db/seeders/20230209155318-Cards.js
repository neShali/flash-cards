'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

    const arr = [
      {question: '1 Как меня зовут?', answer: 'Настя', deck_id: 1, createdAt: new Date(), updatedAt: new Date()},
      {question: '1 наша группа?', answer: 'Пчелы', deck_id: 1, createdAt: new Date(), updatedAt: new Date()},
      {question: '1 Школа?', answer: 'Эльбрус', deck_id: 1, createdAt: new Date(), updatedAt: new Date()},
      {question: '2 День сегодня?', answer: 'Четверг', deck_id: 2, createdAt: new Date(), updatedAt: new Date()},
      {question: '2 Как меня зовут?', answer: 'Настя', deck_id: 2, createdAt: new Date(), updatedAt: new Date()},
      {question: '2 наша группа?', answer: 'Пчелы', deck_id: 2, createdAt: new Date(), updatedAt: new Date()},
      {question: '3 Школа?', answer: 'Эльбрус', deck_id: 3, createdAt: new Date(), updatedAt: new Date()},
      {question: '3 День сегодня?', answer: 'Четверг', deck_id: 3, createdAt: new Date(), updatedAt: new Date()},
      {question: '3 Как меня зовут?', answer: 'Настя', deck_id: 3, createdAt: new Date(), updatedAt: new Date()},
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

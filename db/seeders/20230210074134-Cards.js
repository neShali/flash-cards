'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {


    const arr = [
      {question: 'Как звучал известный коммунистический лозунг?', answer: 'Пролетарии всех стран, соединяйтесь!', answer_r: 'Пролетарии всех стран, соединяйтесь!', deck_id: 1, createdAt: new Date(), updatedAt: new Date()},
      {question: 'Как звучал известный коммунистический лозунг?', answer: 'Пролетарии всех стран, объединяйтесь!', answer_r: 'Пролетарии всех стран, соединяйтесь!', deck_id: 1, createdAt: new Date(), updatedAt: new Date()},
      {question: 'Как звучал известный коммунистический лозунг?', answer: 'Пролетарии всех стран, давайте жить дружно!', answer_r: 'Пролетарии всех стран, соединяйтесь!', deck_id: 1, createdAt: new Date(), updatedAt: new Date()},
      {question: 'В мультике "Лев и черепаха" львенок говорит:', answer: 'Покатай меня, большая черепаха!', answer_r: 'А теперь покатай меня, а?', deck_id: 1, createdAt: new Date(), updatedAt: new Date()},
      {question: 'В мультике "Лев и черепаха" львенок говорит:', answer: 'А теперь покатай меня, а?', answer_r: 'А теперь покатай меня, а?', deck_id: 1, createdAt: new Date(), updatedAt: new Date()},
      {question: 'В мультике "Лев и черепаха" львенок говорит:', answer: 'Покатай меня, Дилдожон!', answer_r: 'А теперь покатай меня, а?', deck_id: 1, createdAt: new Date(), updatedAt: new Date()},
      {question: 'Как выглядит хвост Пикачу?', answer: 'Желтый с черными полосками', answer_r: 'Полностью желтый', deck_id: 1, createdAt: new Date(), updatedAt: new Date()},
      {question: 'Как выглядит хвост Пикачу?', answer: 'Желтый с черным хвостиком', answer_r: 'Полностью желтый', deck_id: 1, createdAt: new Date(), updatedAt: new Date()},
      {question: 'Как выглядит хвост Пикачу?', answer: 'Полностью желтый', answer_r: 'Полностью желтый', deck_id: 1, createdAt: new Date(), updatedAt: new Date()},
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

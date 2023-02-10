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
      {question: 'На советском флаге изображены?', answer: 'Серп', answer_r: 'Серп, молот и звезда', deck_id: 1, createdAt: new Date(), updatedAt: new Date()},
      {question: 'На советском флаге изображены?', answer: 'Серп и молот', answer_r: 'Серп, молот и звезда', deck_id: 1, createdAt: new Date(), updatedAt: new Date()},
      {question: 'На советском флаге изображены?', answer: 'Серп, молот и звезда', answer_r: 'Серп, молот и звезда', deck_id: 1, createdAt: new Date(), updatedAt: new Date()},
      {question: 'А теперь давайте вспомним старуху Шапокляк. Какой атрибут НЕ носила Шапокляк?', answer: 'Сумочку', answer_r: 'Зонтик', deck_id: 1, createdAt: new Date(), updatedAt: new Date()},
      {question: 'А теперь давайте вспомним старуху Шапокляк. Какой атрибут НЕ носила Шапокляк?', answer: 'Крысу Ларису', answer_r: 'Зонтик', deck_id: 1, createdAt: new Date(), updatedAt: new Date()},
      {question: 'А теперь давайте вспомним старуху Шапокляк. Какой атрибут НЕ носила Шапокляк?', answer: 'Зонтик', answer_r: 'Зонтик', deck_id: 1, createdAt: new Date(), updatedAt: new Date()},
      {question: 'Вспомните строчку из знаменитой композиции в фильме «Карнавальная ночь»:', answer: 'Пять минут, пять минут — это много или мало?', answer_r: 'Без пяти, без пяти, но ведь пять минут — не много', deck_id: 1, createdAt: new Date(), updatedAt: new Date()},
      {question: 'Вспомните строчку из знаменитой композиции в фильме «Карнавальная ночь»:', answer: 'Пять минут, пять минут – это время небольшое', answer_r: 'Без пяти, без пяти, но ведь пять минут — не много', deck_id: 1, createdAt: new Date(), updatedAt: new Date()},
      {question: 'Вспомните строчку из знаменитой композиции в фильме «Карнавальная ночь»:', answer: 'Без пяти, без пяти, но ведь пять минут — не много', answer_r: 'Без пяти, без пяти, но ведь пять минут — не много', deck_id: 1, createdAt: new Date(), updatedAt: new Date()},
      {question: '«Сижу за решёткой в темнице сырой…» Кто написал это стихотворение?', answer: 'Лермонтов', answer_r: 'Пушкин', deck_id: 1, createdAt: new Date(), updatedAt: new Date()},
      {question: '«Сижу за решёткой в темнице сырой…» Кто написал это стихотворение?', answer: 'Пушкин', answer_r: 'Пушкин', deck_id: 1, createdAt: new Date(), updatedAt: new Date()},
      {question: '«Сижу за решёткой в темнице сырой…» Кто написал это стихотворение?', answer: 'Есенин', answer_r: 'Пушкин', deck_id: 1, createdAt: new Date(), updatedAt: new Date()},
      {question: 'Борис Ельцин объявил об уходе с поста президента 31 декабря 1999 года словами:', answer: 'Я сделал все, что мог', answer_r: 'Я сделал все, что мог', deck_id: 1, createdAt: new Date(), updatedAt: new Date()},
      {question: 'Борис Ельцин объявил об уходе с поста президента 31 декабря 1999 года словами:', answer: 'Я сделал все, что мог, пора отдыхать!', answer_r: 'Я сделал все, что мог', deck_id: 1, createdAt: new Date(), updatedAt: new Date()},
      {question: 'Борис Ельцин объявил об уходе с поста президента 31 декабря 1999 года словами:', answer: 'Я устал, я ухожу', answer_r: 'Я сделал все, что мог', deck_id: 1, createdAt: new Date(), updatedAt: new Date()},
      {question: 'Какого цвета робот C-3PO из «Звездных Войн»?', answer: 'Золотой с одной серебряной ногой', answer_r: 'Золотой с одной серебряной ногой', deck_id: 1, createdAt: new Date(), updatedAt: new Date()},
      {question: 'Какого цвета робот C-3PO из «Звездных Войн»?', answer: 'Золотой с двумя серебряными ногами', answer_r: 'Золотой с одной серебряной ногой', deck_id: 1, createdAt: new Date(), updatedAt: new Date()},
      {question: 'Какого цвета робот C-3PO из «Звездных Войн»?', answer: 'Полностью серебряный', answer_r: 'Золотой с одной серебряной ногой', deck_id: 1, createdAt: new Date(), updatedAt: new Date()},
      {question: 'В мультике «Жил был пес» объевшийся волк, проломив пузом забор, прежде чем уйти в ночь, говорит:', answer: 'Ты это, заходи, если что!', answer_r: 'Ты заходи, если что!', deck_id: 1, createdAt: new Date(), updatedAt: new Date()},
      {question: 'В мультике «Жил был пес» объевшийся волк, проломив пузом забор, прежде чем уйти в ночь, говорит:', answer: 'Ты это самое, заходи, если что!', answer_r: 'Ты заходи, если что!', deck_id: 1, createdAt: new Date(), updatedAt: new Date()},
      {question: 'В мультике «Жил был пес» объевшийся волк, проломив пузом забор, прежде чем уйти в ночь, говорит:', answer: 'Ты заходи, если что!', answer_r: 'Ты заходи, если что!', deck_id: 1, createdAt: new Date(), updatedAt: new Date()},
      {question: 'Кого в тюрьме называют вертухаем?', answer: 'Охранник', answer_r: 'Надзиратель', deck_id: 2, createdAt: new Date(), updatedAt: new Date()},
      {question: 'Кого в тюрьме называют вертухаем?', answer: 'Надзиратель', answer_r: 'Надзиратель', deck_id: 2, createdAt: new Date(), updatedAt: new Date()},
      {question: 'Кого в тюрьме называют вертухаем?', answer: 'Инспектор по воспитательной работе', answer_r: 'Надзиратель', deck_id: 2, createdAt: new Date(), updatedAt: new Date()},
      {question: 'Как называется выход из тюрьмы на жаргоне?', answer: 'Отъехать', answer_r: 'Откинуться', deck_id: 2, createdAt: new Date(), updatedAt: new Date()},
      {question: 'Как называется выход из тюрьмы на жаргоне?', answer: 'Выдвинуться', answer_r: 'Откинуться', deck_id: 2, createdAt: new Date(), updatedAt: new Date()},
      {question: 'Как называется выход из тюрьмы на жаргоне?', answer: 'Откинуться', answer_r: 'Откинуться', deck_id: 2, createdAt: new Date(), updatedAt: new Date()},
      {question: 'Как заходить в хату?', answer: 'Громко постучаться в дверь', answer_r: 'Громко со всеми поздороваться', deck_id: 2, createdAt: new Date(), updatedAt: new Date()},
      {question: 'Как заходить в хату?', answer: 'Громко со всеми поздороваться', answer_r: 'Громко со всеми поздороваться', deck_id: 2, createdAt: new Date(), updatedAt: new Date()},
      {question: 'Как заходить в хату?', answer: 'Просто войти', answer_r: 'Громко со всеми поздороваться', deck_id: 2, createdAt: new Date(), updatedAt: new Date()},
      {question: 'Год основания "крестов" В СПб? ', answer: '1888', answer_r: '1892', deck_id: 2, createdAt: new Date(), updatedAt: new Date()},
      {question: 'Год основания "крестов" В СПб? ', answer: '1892', answer_r: '1892', deck_id: 2, createdAt: new Date(), updatedAt: new Date()},
      {question: 'Год основания "крестов" В СПб? ', answer: '1901', answer_r: '1892', deck_id: 2, createdAt: new Date(), updatedAt: new Date()},
      {question: 'В какой тюрьме отбывают срок особо опасные заключенные (название)?', answer: 'Черный дельфин', answer_r: 'Черный дельфин', deck_id: 2, createdAt: new Date(), updatedAt: new Date()},
      {question: 'В какой тюрьме отбывают срок особо опасные заключенные (название)?', answer: 'Черная акула', answer_r: 'Черный дельфин', deck_id: 2, createdAt: new Date(), updatedAt: new Date()},
      {question: 'В какой тюрьме отбывают срок особо опасные заключенные (название)?', answer: 'Черный кит', answer_r: 'Черный дельфин', deck_id: 2, createdAt: new Date(), updatedAt: new Date()},
      {question: 'Зеки рисуют на стене футбольные ворота, а на полу мяч. Говорят забить гол. Что делать?', answer: 'Попросить дать пас', answer_r: 'Попросить дать пас', deck_id: 2, createdAt: new Date(), updatedAt: new Date()},
      {question: 'Зеки рисуют на стене футбольные ворота, а на полу мяч. Говорят забить гол. Что делать?', answer: 'Попросить встать зека на место мяча', answer_r: 'Попросить дать пас', deck_id: 2, createdAt: new Date(), updatedAt: new Date()},
      {question: 'Зеки рисуют на стене футбольные ворота, а на полу мяч. Говорят забить гол. Что делать?', answer: 'Сыграть в имитацию', answer_r: 'Попросить дать пас', deck_id: 2, createdAt: new Date(), updatedAt: new Date()},
      {question: 'За что посадили Профессора СПбГУ и известного историка Олега Соколова? ', answer: 'За совращение несовершеннолетних', answer_r: 'За убийство и расчленение своей студентки', deck_id: 2, createdAt: new Date(), updatedAt: new Date()},
      {question: 'За что посадили Профессора СПбГУ и известного историка Олега Соколова? ', answer: 'За взятки', answer_r: 'За убийство и расчленение своей студентки', deck_id: 2, createdAt: new Date(), updatedAt: new Date()},
      {question: 'За что посадили Профессора СПбГУ и известного историка Олега Соколова? ', answer: 'За убийство и расчленение своей студентки', answer_r: 'За убийство и расчленение своей студентки', deck_id: 2, createdAt: new Date(), updatedAt: new Date()},
      {question: 'Одно из самых известный мест заключения, получившее свою популярность благодаря песне Михаила Круга?', answer: 'Девочка-пай', answer_r: 'Владимирский централ', deck_id: 2, createdAt: new Date(), updatedAt: new Date()},
      {question: 'Одно из самых известный мест заключения, получившее свою популярность благодаря песне Михаила Круга?', answer: 'Владимирский централ', answer_r: 'Владимирский централ', deck_id: 2, createdAt: new Date(), updatedAt: new Date()},
      {question: 'Одно из самых известный мест заключения, получившее свою популярность благодаря песне Михаила Круга?', answer: 'Заходите в мой дом', answer_r: 'Владимирский централ', deck_id: 2, createdAt: new Date(), updatedAt: new Date()},
      {question: 'Из какой тюрьмы за всю историю ни разу не удалось совершить побег? ', answer: 'Тюрьма Кордильеры', answer_r: 'Черный дельфин', deck_id: 2, createdAt: new Date(), updatedAt: new Date()},
      {question: 'Из какой тюрьмы за всю историю ни разу не удалось совершить побег? ', answer: 'Цебу', answer_r: 'Черный дельфин', deck_id: 2, createdAt: new Date(), updatedAt: new Date()},
      {question: 'Из какой тюрьмы за всю историю ни разу не удалось совершить побег? ', answer: 'Черный дельфин', answer_r: 'Черный дельфин', deck_id: 2, createdAt: new Date(), updatedAt: new Date()},
      {question: 'Зеки разбивают бутылку и говорят: «Зашей!». Что делать?', answer: 'Сходить за новой бутылкой и выпить', answer_r: 'Попросить вывернуть наизнанку', deck_id: 2, createdAt: new Date(), updatedAt: new Date()},
      {question: 'Зеки разбивают бутылку и говорят: «Зашей!». Что делать?', answer: 'Взять розочку в руки', answer_r: 'Попросить вывернуть наизнанку', deck_id: 2, createdAt: new Date(), updatedAt: new Date()},
      {question: 'Зеки разбивают бутылку и говорят: «Зашей!». Что делать?', answer: 'Попросить вывернуть наизнанку', answer_r: 'Попросить вывернуть наизнанку', deck_id: 2, createdAt: new Date(), updatedAt: new Date()},
      {question: 'Что из перечисленного не является названием Эвереста?', answer: '"Небесная вершина" (Сагарматха)', answer_r: '"Гора из тысячи гор" (Минги-тау)', deck_id: 3, createdAt: new Date(), updatedAt: new Date()},
      {question: 'Что из перечисленного не является названием Эвереста?', answer: '"Божественная мать Вселенной" (Джомолунгма)', answer_r: '"Гора из тысячи гор" (Минги-тау)', deck_id: 3, createdAt: new Date(), updatedAt: new Date()},
      {question: 'Что из перечисленного не является названием Эвереста?', answer: '"Гора из тысячи гор" (Минги-тау)', answer_r: '"Гора из тысячи гор" (Минги-тау)', deck_id: 3, createdAt: new Date(), updatedAt: new Date()},
      {question: 'Где расположена самая высокая вершина, на которую до сих пор не взошел ни один альпинист?', answer: 'В Афганистане', answer_r: 'В Бутане', deck_id: 3, createdAt: new Date(), updatedAt: new Date()},
      {question: 'Где расположена самая высокая вершина, на которую до сих пор не взошел ни один альпинист?', answer: 'В Бутане', answer_r: 'В Бутане', deck_id: 3, createdAt: new Date(), updatedAt: new Date()},
      {question: 'Где расположена самая высокая вершина, на которую до сих пор не взошел ни один альпинист?', answer: 'В Китае', answer_r: 'В Бутане', deck_id: 3, createdAt: new Date(), updatedAt: new Date()},
      {question: 'Какая из перечисленных гор не является потухшим вулканом?', answer: 'Эльбрус', answer_r: 'Аконкагуа', deck_id: 3, createdAt: new Date(), updatedAt: new Date()},
      {question: 'Какая из перечисленных гор не является потухшим вулканом?', answer: 'Килиманджаро', answer_r: 'Аконкагуа', deck_id: 3, createdAt: new Date(), updatedAt: new Date()},
      {question: 'Какая из перечисленных гор не является потухшим вулканом?', answer: 'Аконкагуа', answer_r: 'Аконкагуа', deck_id: 3, createdAt: new Date(), updatedAt: new Date()},
      {question: 'Какая из перечисленных гор является исключительно мифическим местом?', answer: 'Олимп', answer_r: 'Меру', deck_id: 3, createdAt: new Date(), updatedAt: new Date()},
      {question: 'Какая из перечисленных гор является исключительно мифическим местом?', answer: 'Лысая гора', answer_r: 'Меру', deck_id: 3, createdAt: new Date(), updatedAt: new Date()},
      {question: 'Какая из перечисленных гор является исключительно мифическим местом?', answer: 'Меру', answer_r: 'Меру', deck_id: 3, createdAt: new Date(), updatedAt: new Date()},
      {question: 'Где находится Арарат?', answer: 'В Армении', answer_r: 'В Турции', deck_id: 3, createdAt: new Date(), updatedAt: new Date()},
      {question: 'Где находится Арарат?', answer: 'В Турции', answer_r: 'В Турции', deck_id: 3, createdAt: new Date(), updatedAt: new Date()},
      {question: 'Где находится Арарат?', answer: 'В Грузии', answer_r: 'В Турции', deck_id: 3, createdAt: new Date(), updatedAt: new Date()},
      {question: 'Были ли случаи, когда олимпийские медали вручались альпинистам?', answer: 'Никогда', answer_r: 'Трижды', deck_id: 3, createdAt: new Date(), updatedAt: new Date()},
      {question: 'Были ли случаи, когда олимпийские медали вручались альпинистам?', answer: 'Да, но лишь единожды — на первых зимних Олимпийских играх', answer_r: 'Трижды', deck_id: 3, createdAt: new Date(), updatedAt: new Date()},
      {question: 'Были ли случаи, когда олимпийские медали вручались альпинистам?', answer: 'Трижды', answer_r: 'Трижды', deck_id: 3, createdAt: new Date(), updatedAt: new Date()},
      {question: 'Где находятся Русские горы?', answer: 'В Антарктиде', answer_r: 'В Антарктиде', deck_id: 3, createdAt: new Date(), updatedAt: new Date()},
      {question: 'Где находятся Русские горы?', answer: 'В Финляндии', answer_r: 'В Антарктиде', deck_id: 3, createdAt: new Date(), updatedAt: new Date()},
      {question: 'Где находятся Русские горы?', answer: 'В России', answer_r: 'В Антарктиде', deck_id: 3, createdAt: new Date(), updatedAt: new Date()},
      {question: 'В какой стране находится самая опасная пешеходная горная тропа в мире, в конце которой всех посетителей ждет чайный домик?', answer: 'В Норвегии', answer_r: 'В Китае', deck_id: 3, createdAt: new Date(), updatedAt: new Date()},
      {question: 'В какой стране находится самая опасная пешеходная горная тропа в мире, в конце которой всех посетителей ждет чайный домик?', answer: 'В Китае', answer_r: 'В Китае', deck_id: 3, createdAt: new Date(), updatedAt: new Date()},
      {question: 'В какой стране находится самая опасная пешеходная горная тропа в мире, в конце которой всех посетителей ждет чайный домик?', answer: 'В Перу', answer_r: 'В Китае', deck_id: 3, createdAt: new Date(), updatedAt: new Date()},
      {question: 'На какое количество гор-восьмитысячников нужно взойти, чтобы завоевать "Корону Земли"?', answer: '8', answer_r: '14', deck_id: 3, createdAt: new Date(), updatedAt: new Date()},
      {question: 'На какое количество гор-восьмитысячников нужно взойти, чтобы завоевать "Корону Земли"?', answer: '10', answer_r: '14', deck_id: 3, createdAt: new Date(), updatedAt: new Date()},
      {question: 'На какое количество гор-восьмитысячников нужно взойти, чтобы завоевать "Корону Земли"?', answer: '14', answer_r: '14', deck_id: 3, createdAt: new Date(), updatedAt: new Date()},
      {question: 'Самая длинная горная система Земли?', answer: 'Урал', answer_r: 'Анды', deck_id: 3, createdAt: new Date(), updatedAt: new Date()},
      {question: 'Самая длинная горная система Земли?', answer: 'Анды', answer_r: 'Анды', deck_id: 3, createdAt: new Date(), updatedAt: new Date()},
      {question: 'Самая длинная горная система Земли?', answer: 'Трансантарктические горы', answer_r: 'Анды', deck_id: 3, createdAt: new Date(), updatedAt: new Date()},

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

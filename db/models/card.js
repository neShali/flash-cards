'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Card extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Card.init({
    question: {
      type: Sequelize.TEXT
    },
    answer: {
      type: Sequelize.TEXT
    },
    answer_r: {
      type: Sequelize.TEXT
    },
    deck_id: {
      type: Sequelize.INTEGER,
      references: {
        model: 'Deck',
        key: 'id',
      }
    },
  }, {
    sequelize,
    modelName: 'Card',
  });
  return Card;
};
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
    static associate({Deck}) {
      Card.hasMany(Deck, { foreignKey: "deck_id" });
      // define association here
    }
  }
  Card.init({
    question: DataTypes.TEXT,
    answer: DataTypes.TEXT,
    deck_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Card',
  });
  return Card;
};
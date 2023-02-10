'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Round extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate() {
      // define association here
    }
  }
  Round.init({
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'User',
        key: 'id',
      }
    },
    deck_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Deck',
        key: 'id',
      }
    },
    score: {
      type: DataTypes.INTEGER
    },
    total: {
      type: DataTypes.INTEGER
    },
  }, {
    sequelize,
    modelName: 'Round',
  });
  return Round;
};
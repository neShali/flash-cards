"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Deck extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Round }) {
      Deck.hasMany(Round, { foreignKey: "deck_id" });
      // define association here
    }
  }
  Deck.init(
    {
      theme: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "Deck",
    }
  );
  return Deck;
};

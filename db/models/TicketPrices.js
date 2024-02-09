const { Model, DataTypes } = require('sequelize');
const sequelize = require('../../src/config/connection');

class TicketPrices extends Model {}

TicketPrices.init(
  {
    seat_grade: {
      type: DataTypes.CHAR(1),
      allowNull: false,
      primaryKey: true,
      autoIncrement: false,
    },
    seat_grade_desc: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    seat_base_price: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'ticketPrices',
  }
);

module.exports = TicketPrices;

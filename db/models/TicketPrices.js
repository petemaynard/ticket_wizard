const { Model, DataTypes } = require('sequelize');
const sequelize = require('../../src/config/connection');

class TicketPrices extends Model {}

TicketPrices.init(
  {
    seat_grade: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true,
      validate: {
         len: [1, 1], // Enforce length constraint
       },
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

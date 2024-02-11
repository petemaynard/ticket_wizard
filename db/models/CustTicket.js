const { Model, DataTypes } = require('sequelize');
const sequelize = require('../../src/config/connection');

class CustTicket extends Model { }

CustTicket.init(
   {
      cust_tix_id: {
         type: DataTypes.INTEGER,
         allowNull: false,
         primaryKey: true,
         autoIncrement: true,
      },
      cust_id: {
         type: DataTypes.INTEGER,
         allowNull: false,
      },
      perf_id: {
         type: DataTypes.INTEGER,
         allowNull: false,
      },
      seat_grade: {
         type: DataTypes.STRING,
         allowNull: false,
      },
      seat_count: {
         type: DataTypes.INTEGER,
      },
      purchased: {
         type: DataTypes.BOOLEAN,
         allowNull: false,
         default: 0,
      }
   },
   {
      sequelize,
      freezeTableName: true,
      underscored: true,
      modelName: 'custTicket',
   }
);

module.exports = CustTicket;

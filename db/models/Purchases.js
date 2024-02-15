const { Model, DataTypes } = require('sequelize');
const sequelize = require('../../src/config/connection');

class Purchases extends Model { }

Purchases.init(
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
         references: {
            model: 'customer',
            key: 'cust_id'
            // hasMany set up in index.js
         }
      },
      perf_id: {
         type: DataTypes.INTEGER,
         allowNull: false,
         references: {
            model: 'performanceDates',
            key: 'perf_date_id'
            // hasMany set up in index.js
         }
      },
      seat_grade: {
         type: DataTypes.STRING,
         allowNull: false,
         references: {
            model: 'ticketPrices',
            key: 'seat_grade'
            // hasMany set up in index.js
         }
      },
      seat_count: {
         type: DataTypes.INTEGER,
      },
      // total_seat_cost: {
      //    type: DataTypes.INTEGER,
      // },
      purchased: {
         type: DataTypes.BOOLEAN,
         allowNull: false,
         default: false,
      }
   },
   {
      sequelize,
      freezeTableName: true,
      underscored: true,
      modelName: 'purchases',
   }
);

module.exports = Purchases;

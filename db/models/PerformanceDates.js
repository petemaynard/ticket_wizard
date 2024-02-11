const { Model, DataTypes } = require('sequelize');
const sequelize = require('../../src/config/connection');

class PerformanceDates extends Model { }

PerformanceDates.init(
   {
      perf_date_id: {
         type: DataTypes.INTEGER,
         allowNull: false,
         primaryKey: true,
         autoIncrement: true,
      },
      artist_id: {
         type: DataTypes.STRING,
         allowNull: false,
      },
      date: {
         type: DataTypes.DECIMAL(2,1),
      },
   },
   {
      sequelize,
      freezeTableName: true,
      underscored: true,
      modelName: 'performanceDates',
   }
);

module.exports = PerformanceDates;

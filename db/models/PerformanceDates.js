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
      event_date: {
         type: DataTypes.DATEONLY,
         allowNull: false,
      },
      venue_id: {
         type: DataTypes.INTEGER,
         allowNull: false,
         references: {
            model: 'venue',
            key: 'venue_id',
         }
      },
      artist_id: {
         type: DataTypes.INTEGER,
         allowNull: false,
         references: {
            model: 'artist',
            key: 'artist_id',
         }
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

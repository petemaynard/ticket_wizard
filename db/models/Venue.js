const { Model, DataTypes } = require('sequelize');
const sequelize = require('../../src/config/connection');

class Venue extends Model { }

Venue.init(
   {
      venue_id: {
         type: DataTypes.INTEGER,
         allowNull: false,
         primaryKey: true,
         autoIncrement: true,
      },
       venue_name: {
         type: DataTypes.STRING,
         allowNull: false,
      },
      city: {
         type: DataTypes.STRING,
         allowNull: false,
      },
   },
   {
      sequelize,
      freezeTableName: true,
      underscored: true,
      modelName: 'venue',
   }
);

module.exports = Venue;

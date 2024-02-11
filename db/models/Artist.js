const { Model, DataTypes } = require('sequelize');
const sequelize = require('../../src/config/connection');

class Artist extends Model { }

Artist.init(
   {
      artist_id: {
         type: DataTypes.INTEGER,
         allowNull: false,
         primaryKey: true,
         autoIncrement: true,
      },
      artist: {
         type: DataTypes.STRING,
         allowNull: false,
      },
      popularity_index: {
         type: DataTypes.DECIMAL(2,1),
      },
      description: {
         type: DataTypes.TEXT,
      },
   },
   {
      sequelize,
      freezeTableName: true,
      underscored: true,
      modelName: 'artist',
   }
);

module.exports = Artist;
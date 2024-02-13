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
      artist_name: {
         type: DataTypes.STRING,
         allowNull: false,
      },
      popularity_index: {
         type: DataTypes.DECIMAL,
         precision: 3,
         scale: 1,
         allowNull: false,
      },
      description: {
         type: DataTypes.TEXT,
         allowNull: false,
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

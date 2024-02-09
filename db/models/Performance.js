const { Model, DataTypes } = require('sequelize');
const sequelize = require('../../src/config/connection');

class Performance extends Model {}

Performance.init(
  {
    perf_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    artist: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    city: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    venue: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    date: {
      type: DataTypes.DATEONLY,
    },
    pic_link_URL: {
      type: DataTypes.STRING,
    },
    popularity_index: {
      type: DataTypes.DECIMAL,
    },
    description: {
      type: DataTypes.TEXT,
    },
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'performance',
  }
);

module.exports = Performance;

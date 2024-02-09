const { Model, DataTypes } = require('sequelize');
const sequelize = require('../../src/config/connection');

class TaxRate extends Model {}

TaxRate.init(
  {
    state: {
      type: DataTypes.CHAR(2),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    rate: {
      type: DataTypes.DECIMAL,
      allowNull: false,
    },
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'taxRate',
  }
);

module.exports = TaxRate;

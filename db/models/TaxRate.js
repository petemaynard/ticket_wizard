const { Model, DataTypes } = require('sequelize');
const sequelize = require('../../src/config/connection');

class TaxRate extends Model {}

TaxRate.init(
  {
    state: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true,
      validate: {
         len: [2],
      },
    },
    rate: {
      type: DataTypes.DECIMAL(3,2),
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

const { Model, DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');
const sequelize = require('../../src/config/connection');

class Customer extends Model {
   checkPassword(loginPw) {
      return bcrypt.compareSync(loginPw, this.password);
   }
}

Customer.init(
   {
      cust_id: {
         type: DataTypes.INTEGER,
         allowNull: false,
         primaryKey: true,
         autoIncrement: true,
      },
      f_name: {
         type: DataTypes.STRING,
         allowNull: false,
      },
      l_name: {
         type: DataTypes.STRING,
         allowNull: false,
      },
      address: {
         type: DataTypes.STRING,
         allowNull: true,
      },
      city: {
         type:DataTypes.STRING,
         allowNull: true,
      },
      state: {
         type: DataTypes.STRING,
         allowNull: false,
         validate: {
            len: [2],
         },
      },
      zip: {
         type: DataTypes.INTEGER,
         allowNull: true,
         validate: {
            len: [5],
         },
      },
      username: {
         type: DataTypes.STRING,
         allowNull: false,
      },
      email: {
         type: DataTypes.STRING,
         allowNull: false,
      },
      password: {
         type: DataTypes.STRING,
         allowNull: false,
         validate: {
            len: [8],
         },
      },
   },
   {
      hooks: {
         beforeCreate: async (newUserData) => {
           newUserData.password = await bcrypt.hash(newUserData.password, 10);
           return newUserData;
         },
       },
      sequelize,
      freezeTableName: true,
      underscored: true,
      modelName: 'customer',
   }
);

module.exports = Customer;

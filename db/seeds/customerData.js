const { Customer } = require('../models');

const customerData = 
[
   {cust_id: 1, f_name: "Sophia", l_name: "Williams", address: "9403 Oak St", city: "Cheyenne", state: "WY", zip: 82001, username: "swilliams", email: "swilliams@gmail.com", password: "password"},
   {cust_id: 2, f_name: "Liam", l_name: "Patel", address: "34 Parker Way", city: "Fargo", state: "ND", zip: 5812, username: "lpatel", email: "lpatel@gmail.com", password: "password"},
   {cust_id: 3, f_name: "Emma", l_name: "Yamaguchi", address: "500 Poplar Ave", city: "Biloxi", state: "MS", zip: 39530, username: "eyamaguchi", email: "eyamaguchi@gmail.com", password: "password"},
   {cust_id: 4, f_name: "Noah", l_name: "White", address: "8844 Indiana St", city: "Sioux Falls", state: "SD", zip: 57103, username: "nwhite", email: "nwhite@gmail.com", password: "password"},
   {cust_id: 5, f_name: "Olivia", l_name: "Harvey", address: "922 Straton Pl", city: "Bangor", state: "ME", zip: 4401, username: "oharvey", email: "oharvey@gmail.com", password: "password"},
   {cust_id: 6, f_name: "William", l_name: "Graham", address: "345 Jersey Blvd", city: "Burlington", state: "VT", zip: 5401, username: "wgraham", email: "wgraham@gmail.com", password: "password"},
   {cust_id: 7, f_name: "Ava", l_name: "Bartlett", address: "8575 France Ave", city: "Pueblo", state: "CO", zip: 81003, username: "abartlett", email: "abartlett@gmail.com", password: "password"},
   {cust_id: 8, f_name: "James", l_name: "Clark", address: "4003 Teller St", city: "Bismarck", state: "ND", zip: 58501, username: "jclark", email: "jclark@gmail.com", password: "password"},
   {cust_id: 9, f_name: "Isabella", l_name: "Green", address: "856 Broadway Ave", city: "Rapid City", state: "SD", zip: 57701, username: "igreen", email: "igreen@gmail.com", password: "password"},
   {cust_id: 10, f_name: "Oliver", l_name: "Johnson", address: "1255 Burlington Circle", city: "Great Falls", state: "MT", zip: 59401, username: "ojohnson", email: "ojohnson@gmail.com", password: "password"},
   
];

const seedCustomer = () => Customer.bulkCreate(customerData);

module.exports = seedCustomer;

const Customer = require('./Customer');
const CustTicket = require('./CustTicket');
const Performance = require('./Performance');
const TaxRate = require('./TaxRate');
const TicketPrices = require('./TicketPrices');


CustTicket.belongsTo(Customer, {
  foreignKey: 'cust_id',
});

Customer.hasMany(CustTicket, {
  foreignKey: 'cust_id',
  onDelete: 'CASCADE',
});

Performance.hasMany(Customer, {
   foreignKey: 'cust_id',
   onDelete: 'CASCADE',
});



module.exports = { Customer, CustTicket, Performance, TaxRate, TicketPrices };

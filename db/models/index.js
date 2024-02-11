const Customer = require('./Customer');
const CustTicket = require('./CustTicket');
const Performance = require('./Performance');
const TaxRate = require('./TaxRate');
const TicketPrices = require('./TicketPrices');

// This first part makes sense, the customer has many (or one) ticket(s)
Customer.hasMany(CustTicket, {
   foreignKey: 'cust_id',
   onDelete: 'CASCADE',
});
CustTicket.belongsTo(Customer, {
   foreignKey: 'cust_id',
});


// Okay, a performance sells many tickets
Performance.hasMany(CustTicket, {
   foreignKey: 'perf_id',
   onDelete: 'CASCADE'  // Does this mean when performance is deleted that customer is deleted
});
CustTicket.belongsTo(Performance, {
   foreignKey: 'perf_id',
});


// Hmmm, a customer's ticket can have many different seat prices.  Okay.
TicketPrices.hasMany(CustTicket, {
   foreignKey: 'seat_grade',
});
CustTicket.belongsTo(TicketPrices, {
   foreignKey: 'seat_grade',
});

module.exports = { Customer, CustTicket, Performance, TicketPrices };

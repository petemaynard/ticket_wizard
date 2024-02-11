const Artist = require('Artist');
const Customer = require('./Customer');
const PerformanceDates = require('./PerformanceDates');
const Purchases = require('./Purchases');
const TaxRate = require('./TaxRate');
const TicketPrices = require('./TicketPrices');
const Venue = require('./Venue');

// This first part makes sense, the customer has many (or one) ticket(s)
Customer.hasMany(Purchases, {
   foreignKey: 'cust_id',
   onDelete: 'CASCADE',
});
Purchases.belongsTo(Customer, {
   foreignKey: 'cust_id',
});


// Okay, a performance sells many tickets
Performance.hasMany(Purchases, {
   foreignKey: 'perf_id',
   onDelete: 'CASCADE'  // Does this mean when performance is deleted that customer is deleted
});
Purchases.belongsTo(Performance, {
   foreignKey: 'perf_id',
});


// Hmmm, a customer's ticket can have many different seat prices.  Okay.
TicketPrices.hasMany(Purchases, {
   foreignKey: 'seat_grade',
});
Purchases.belongsTo(TicketPrices, {
   foreignKey: 'seat_grade',
});

module.exports = { Customer, Purchases, Performance, TicketPrices };

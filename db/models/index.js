const Artist = require('./Artist');
const Customer = require('./Customer');
const PerformanceDates = require('./PerformanceDates');
const Purchases = require('./Purchases');
const TaxRate = require('./TaxRate');
const TicketPrices = require('./TicketPrices');
const Venue = require('./Venue');

// Customer can have many (or one) ticket(s), but a ticket belongs to one customer
Customer.hasMany(Purchases, {
   foreignKey: 'cust_id',
   onDelete: 'CASCADE',
});
Purchases.belongsTo(Customer, {
   foreignKey: 'cust_id',
});


// Performance sells many tickets, but a ticket belongs to one performance
PerformanceDates.hasMany(Purchases, {
   foreignKey: 'perf_id',
   onDelete: 'CASCADE'  // Does this mean when performance is deleted that customer is deleted
});
Purchases.belongsTo(PerformanceDates, {
   foreignKey: 'perf_id',
});


// Customer's ticket can have many different seat prices, but a seat belongs to one customer.
TicketPrices.hasMany(Purchases, {
   foreignKey: 'seat_grade',
});
Purchases.belongsTo(TicketPrices, {
   foreignKey: 'seat_grade',
});
// Do I have this one reverses?


// A venue can have many performances, but a performance is held at one venue
Venue.hasMany(PerformanceDates, {
   foreignKey: 'venue_id',
});
PerformanceDates.belongsTo(Venue, {
   foreignKey: 'venue_id'
});


// An artist can have many performances, but a performance is held by one artist.
Artist.hasMany(PerformanceDates, {
   foreignKey: 'artist_id',
});
PerformanceDates.belongsTo(Artist, {
   foreignKey: 'artist_id',
});

module.exports = { Artist, Customer, PerformanceDates, Purchases, TaxRate, TicketPrices, Venue };




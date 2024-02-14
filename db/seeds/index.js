const sequelize = require('../../src/config/connection');
const seedArtist = require('./artistData');
const seedCustomer = require('./customerData');
const seedPerformance = require('./performanceData');
const seedPurchases = require('./purchasesData');
const seedTaxes = require('./taxData');
const seedTicketPrices = require('./ticketPricesData');
const seedVenue = require('./venueData');

const seedAll = async () => {

  await sequelize.sync({ force: true });

  await seedArtist();  // No foreign keys

  await seedVenue();   // No foreign keys

  await seedTaxes();   // No foreign keys

  await seedTicketPrices();  // No foreign keys

  await seedCustomer();  

  await seedPerformance();  // Foreign keys: artist.artist_id, venue.venue_id

  await seedPurchases();

  process.exit(0);
};

seedAll();

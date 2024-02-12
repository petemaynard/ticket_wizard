const sequelize = require('../../src/config/connection');
const seedArtist = require('./artistData')
const seedPerformance = require('./performanceData');
const seedTaxes = require('./taxData');
const seedTicketPrices = require('./ticketPricesData');
const seedVenue = require('./venueData');

const seedAll = async () => {

  await sequelize.sync({ force: true });

  // Not seeding Customer data or Purchases

  await seedArtist();  // No foreign keys

  await seedVenue();   // No foreign keys

  await seedTaxes();   // No foreign keys

  await seedTicketPrices();  // No foreign keys

  await seedPerformance();  // Foreign keys: artist.artist_id, venue.venue_id

  process.exit(0);
};

seedAll();

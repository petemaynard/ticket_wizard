const sequelize = require('../../src/config/connection');
const seedPerformance = require('./performanceData');
const seedTaxes = require('./taxData');
const seedTicketPrices = require('./ticketPricesData');

const seedAll = async () => {
  await sequelize.sync({ force: true });

  await seedPerformance();

  await seedTaxes();

  await seedTicketPrices();

  process.exit(0);
};

seedAll();

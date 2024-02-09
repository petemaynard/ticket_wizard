const sequelize = require('../../src/config/connection');
const seedPerformance = require('./performanceData');
const seedTaxes = require('./taxData');

const seedAll = async () => {
  await sequelize.sync({ force: true });

  await seedPerformance();

  await seedTaxes();

  process.exit(0);
};

seedAll();

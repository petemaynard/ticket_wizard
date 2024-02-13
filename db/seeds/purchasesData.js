const { Purchases } = require('../models');

const purchasesData = [



];

const seedPurchases = () => Purchases.bulkCreate(purchasesData);

module.exports = seedPurchases;

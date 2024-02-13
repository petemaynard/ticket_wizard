const router = require('express').Router();
const { Artist, Venue, PerformanceDates, TicketPrices, TaxRate, Purchases } = require('../../../db/models');

router.get('/', async (req, res) => {
    try {
        const artist = Artist.findOne({ where: { } })
        res.render('reviewOrder');
    } catch (error) {
        console.log("Query failed");
        res.status(500).json(err);
    }
});

module.exports = router;
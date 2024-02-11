const router = require('express').Router();
const { TicketPrices } = require('../../../db/models');
const { Performance } = require('../../../db/models');

router.get('/store', async (req, res) => {
    try {
        const ticketData = await TicketPrices.findAll();
        const multiplier = await Performance.findAll({ 
         // include: { band_name: } && { date: }
      });
        const ticketCost = ticketData.map(seat_base_price => seat_base_price * multiplier)

        res.json(ticketCost);

    } catch (err) {
        res.status(400).json(err);
    };
});

router.get('/checkout', async (req, res) => {
    try {
        const ticketData = await TicketPrices.findAll();
        const multiplier = await Performance.findAll();
        const ticketCost = ticketData.map(seat_base_price => seat_base_price * multiplier)

        res.json(multiplier, ticketCost);

    } catch (err) {
        res.status(400).json(err);
    };
});

module.exports = router;

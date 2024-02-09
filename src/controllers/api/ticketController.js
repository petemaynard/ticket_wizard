const router = require('express').Router();
const { TicketPrice } = require('../../../db/models/TicketPrice');

router.get('/', async (req, res) => {
    try {

    } catch (err) {
        res.status(400).json(err);
    }
});

module.exports = router;
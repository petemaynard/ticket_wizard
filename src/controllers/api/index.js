const router = require('express').Router();
const authControl = require('./authControl');
const concertControl = require('./concertControl');
const userControl = require('./userControl');
const ticketControl = require('./ticketControl');

router.use('/authControl', authControl);
router.use('/concertControl', concertControl);
router.use('/userControl', userControl);
router.use('/ticketControl', ticketControl);

module.exports = router;
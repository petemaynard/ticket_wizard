const router = require('express').Router();
const authControl = require('./authControl');
const concertControl = require('./concertController');
const userControl = require('./userController');
const ticketControl = require('./ticketController');

router.use('/authControl', authControl);
router.use('/concertController', concertControl);
router.use('/userController', userControl);
router.use('/ticketController', ticketControl);

module.exports = router;
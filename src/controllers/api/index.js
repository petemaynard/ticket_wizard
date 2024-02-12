const router = require('express').Router();
const authControl = require('./authControl');
const concertControl = require('./concertController');
const userControl = require('./userController');
const ticketControl = require('./ticketController');

router.use('/authControl', authControl);
router.use('/concerts', concertControl);
router.use('/users', userControl);
router.use('/tickets', ticketControl);


module.exports = router;
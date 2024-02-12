const router = require('express').Router();
const authControl = require('./authControl');
const concertControl = require('./concertController');
const userControl = require('./userController');
const ticketControl = require('./ticketController');
const search = require('./search');

router.use('/authControl', authControl);
router.use('/concerts', concertControl);
router.use('/users', userControl);
router.use('/tickets', ticketControl);
router.use('/search', search);

module.exports = router;
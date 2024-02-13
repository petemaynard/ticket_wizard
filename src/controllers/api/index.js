const router = require('express').Router();
const concertControl = require('./concertController');
const userControl = require('./userController');
const ticketControl = require('./ticketController');

router.use('/concerts', concertControl);
router.use('/users', userControl);
router.use('/tickets', ticketControl);


module.exports = router;
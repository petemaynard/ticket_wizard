const router = require('express').Router();
const { Artist, Venue, PerformanceDates } = require('../../../db/models');

router.get('/', (req, res) => {
    const searchTerm = req.query.query
})

module.exports = router;
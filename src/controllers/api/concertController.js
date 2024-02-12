const router = require('express').Router();
const { Artist, Venue } = require('../../../db/models');
var currentSearch

router.get('/search', async (req, res) => {
    try {
        const searchResults = await Performance.findAll({ where: { city: currentSearch } || { artist: currentSearch }});

        res.json(searchResults);

    } catch (err) {
        res.status(400).json(err);
    };
});

module.exports = router;
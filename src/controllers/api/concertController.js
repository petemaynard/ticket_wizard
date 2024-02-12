const express = require('express');
const router = express.Router();
const { Op } = require('sequelize');
const { Artist, Venue } = require('../../../db/models'); 

router.get('/search', async (req, res) => {
    const searchQuery = req.query.searchQuery;
    try {
        // Search for Artists
        const artistResults = await Artist.findAll({
            where: {
                artist_name: {
                    [Op.like]: `%${searchQuery}%`
                }
            }
        });

        // Search for Venues by name or city
        const venueResults = await Venue.findAll({
            where: {
                [Op.or]: [
                    { venue_name: { [Op.like]: `%${searchQuery}%` } },
                    { city: { [Op.like]: `%${searchQuery}%` } }
                ]
            }
        });

        // Combine results
        const searchResults = {
            artists: artistResults,
            venues: venueResults
        };

        res.json(searchResults);
    } catch (err) {
        console.error('Search error:', err);
        res.status(500).json({ error: 'Internal server error' });
    }
});

module.exports = router;
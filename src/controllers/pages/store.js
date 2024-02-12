const router = require('express').Router();
const { Artist, TicketPrices } = require('../../../db/models');
const search = searchObject;//searchObjest is a standin for the item the user picks form the search results page


router.get('/', async (req, res) => {
    console.log('The store page route');
    try {
        const basePrice = await TicketPrices.findAll();
        const band = await Artist.findAll({ where: {artist_name: searchObject.artist_name }});
        const finalPrice = basePrice.map((item) => {
            return item.seat_base_price * band.popularity_index
        });
        res.render('store', {finalPrice}, {band});
    } catch (error) {
        console.log("Query failed");
        res.status(500).json(err);
    }
});

module.exports = router;
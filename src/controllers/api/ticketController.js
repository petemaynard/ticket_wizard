const router = require('express').Router();
const { Artist, Venue, PerformanceDates, TicketPrices, TaxRate } = require('../../../db/models');
// const search = searchObject;


// router.get('/store', async (req, res) => {
//     console.log('The store page route');
//     try {
//         const basePrice = await TicketPrices.findAll();
//         const band = await Artist.findAll({ where: {artist_name: searchObject.artist_name }});
//         const finalPrice = basePrice.map((item) => {
//             return item.seat_base_price * band.popularity_index
//         });
//         res.render('store', {finalPrice}, {band});
//     } catch (error) {
//         console.log("Query failed");
//         res.status(500).json(err);
//     }
// });

// router.get('/reviewOrder', async (req, res) => {
//     console.log('review order route');
//     try {

//         res.render('review_order', {})
//     } catch (error) {
//         console.log("Query failed");
//         res.status(500).json(err);
//     }
// })

module.exports = router;

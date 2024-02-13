const router = require('express').Router();
const { Artist, Venue, PerformanceDates, TicketPrices, TaxRate, Purchases } = require('../../../db/models');
const searchObject = {
    artist_name: 'death gary',
    perf_id: '1'
    };//searchObjest is a standin for the item the user picks form the search results page

router.get('/', async (req, res) => {
    console.log('The store page route');
    try {
        const basePrice = await TicketPrices.findAll();
        const band = await Artist.findOne({ where: {artist_name: searchObject.artist_name }});
        const finalPrice = basePrice.map((item) => {
            return item.seat_base_price * band.popularity_index
        });
        console.log(finalPrice)
        res.render('store', {finalPrice, band});
    } catch (error) {
        console.log("Query failed");
        res.status(500).json(err);
    }
});

router.post('/', async (req, res) => {
    console.log('attempting to post initial Purchase data');
    try {
        Purchases.create({
            cust_id: session.user_id,
            perf_id: searchObject.perf_date_id,
            seat_grade: seatGrade,
            seat_count: input_field.value
        });
    } catch (error) {
        console.log("Post failed");
        res.status(500).json(err);
    }
})

module.exports = router;
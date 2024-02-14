const router = require('express').Router();
const { Artist, Venue, PerformanceDates, TicketPrices, TaxRate, Purchases } = require('../../../db/models');
// const searchObject = {
//     artist_name: 'death gary',
//     perf_id: '1'
//     };//searchObjest is a standin for the item the user picks form the search results page

router.get('/', async (req, res) => {
    console.log('The store page route');
    try {
        const searchData = req.query;
        const [concertId, value] = Object.entries(searchData)[0];
        const concert = await PerformanceDates.findByPk(concertId);
        const basePrice = await TicketPrices.findAll();
        const basePriceSerial = basePrice.map((event) =>
            event.get({ plain: true })
        );

        const artistId = concert.artist_id;
        const band = await Artist.findByPk(artistId);
        const finalPrice = basePrice.map((item) => {
            return item.seat_base_price * band.popularity_index
        });

        const priceAndSeat = [
            { seat: basePriceSerial[0].seat_grade_desc, price: finalPrice[0] },
            { seat: basePriceSerial[1].seat_grade_desc, price: finalPrice[1] },
            { seat: basePriceSerial[2].seat_grade_desc, price: finalPrice[2] },
            { seat: basePriceSerial[3].seat_grade_desc, price: finalPrice[3] }
        ];

        res.render('store', { priceAndSeat });
    } catch (err) {
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
    } catch (err) {
        console.log("Post failed");
        res.status(500).json(err);
    }
})

module.exports = router;
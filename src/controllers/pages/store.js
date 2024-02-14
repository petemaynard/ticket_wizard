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
        console.log(basePrice);
        const basePriceSerial = baseprice.map((event))
        const artistId = concert.artist_id;
        const band = await Artist.findByPk(artistId);
        const finalPrice = basePrice.map((item) => {
            return item.seat_base_price * band.popularity_index
        });
        console.log(finalPrice)
        const priceAndSeat = [
            { seat: basePrice.seatGrade[0], price: finalPrice[0] },
            { seat: basePrice.seatGrade[1], price: finalPrice[1] },
            { seat: basePrice.seatGrade[2], price: finalPrice[2] },
            { seat: basePrice.seatGrade[3], price: finalPrice[3] }
        ];
        console.log(priceAndSeat)
        const seatSerial = priceAndSeat.map((event) =>
            event.get({ plain: true })
        );
        // const bandSerial = band.map((event)=> 
        //     event.get({ plain: true })
        // );
        console.log(finalPriceSerial)
        res.render('store', { seatSerial, bandSerial });
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
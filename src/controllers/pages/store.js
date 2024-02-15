const router = require('express').Router();
const { Artist, Venue, PerformanceDates, TicketPrices, TaxRate, Purchases } = require('../../../db/models');

router.get('/', async (req, res) => {
    console.log('The store page route');



    try {
        const searchData = req.query;  // Passed in concert ID and empty string (perf_date_id)
        const [concertId, value] = Object.entries(searchData)[0];
        // Removing empty string

        // This will be displayed on top of table: PD.event_date, A.Artist, V.venue_name
        const headerData = await PerformanceDates.findByPk(concertId, {
         include: [{ model: Artist }, { model: Venue }]
         })
         console.log("Performance artist " + headerData.artist.artist_name);
         console.log("date: "+ headerData.event_date);
         console.log("Venue is: " + headerData.venue.venue_name);
         const eventDate = headerData.event_date;
         const eventArtist = headerData.artist.artist_name;
         const eventVenue = headerData.venue.venue_name;

        // This goes within the table: TP.seat_base_price, TP.seat_name_description
        const basePrice = await TicketPrices.findAll();
        const basePriceSerial = basePrice.map((event) =>
            event.get({ plain: true })
        );

        const finalPrice = basePrice.map((item) => {
            return item.seat_base_price * headerData.artist.popularity_index
        });

        const priceAndSeat = [
            { grade: basePriceSerial[0].seat_grade, seat: basePriceSerial[0].seat_grade_desc, price: finalPrice[0] },
            { grade: basePriceSerial[1].seat_grade, seat: basePriceSerial[1].seat_grade_desc, price: finalPrice[1] },
            { grade: basePriceSerial[2].seat_grade, seat: basePriceSerial[2].seat_grade_desc, price: finalPrice[2] },
            { grade: basePriceSerial[3].seat_grade, seat: basePriceSerial[3].seat_grade_desc, price: finalPrice[3] }
        ];

        res.render('store', { priceAndSeat, eventDate, eventArtist, eventVenue, concertId });
    } catch (err) {
        console.log("Query failed");
        res.status(500).json(err);
    }
});

router.post('/', async (req, res) => {
    console.log('attempting to post initial Purchase data');
    try {
        const numOfTickets = req.body.numOfTickets;
        const seatGrade = req.body.seatGrade;
        const perfId = req.body.eventPk
        console.log(perfId)
        Purchases.create({
            cust_id: 0,
            perf_id: perfId,
            seat_grade: seatGrade,
            seat_count: numOfTickets
        });
    } catch (err) {
        res.status(500).json(err);
    }
})

module.exports = router;
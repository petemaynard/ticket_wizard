const router = require('express').Router();
const { Artist, Venue, PerformanceDates, TicketPrices, Purchases } = require('../../../db/models');
const sequelize = require('../../config/connection');

router.get('/', async (req, res) => {
   try {
      console.log("Hey, it's the purchases page!");
      // Get list of all concert tickets that logged in user has purchased
      const purchasesList = await PerformanceDates.findAll({
         include: [
            { model: Artist},
            { model: Venue},
            // { model: TicketPrices},  //  Having this breaks it
            // { model: Purchases,         // Having this breaks it worse
            //   where: { cust_tix_id: 2},
            // }
         ],
         order: [['event_date', 'ASC']],
      });
      /*  The above sequelize query in simple SQL
      select PD.event_date, A.artist_name, V.venue_name, TP.seat_grade_desc, P.seat_count
      from performancedates PD
      inner join artist A
      on PD.artist_id = A.artist_id
      inner join purchases P
      on PD.perf_date_id = P.perf_id
      inner join venue V
      on PD.venue_id = V.venue_id
      inner join ticketprices TP
      on P.seat_grade = TP.seat_grade
      where cust_tix_id = 1
      */

      console.log("I completed the query.")
      const purchases = purchasesList.map((purchase) => purchase.get({ plain: true }));

      //These are here just for confirmation data is coming through
      console.log("First purchase artist is: " + purchasesList[0].artist.artist_name);
      // console.log("First purchase seat_grade is: " + performance[0].seat_grade);

      res.render('showpurchases', { purchases });

   } catch (err) {
      console.log("Query failed");
      res.status(500).json(err);
   }
});

module.exports = router;
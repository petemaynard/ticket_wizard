const router = require('express').Router();
const { Artist, Venue, PerformanceDates, TicketPrices, Purchases } = require('../../../db/models');
const sequelize = require('../../config/connection');

router.get('/', async (req, res) => {
   try {
      console.log("Hey, it's the purchases page!");
      // Get list of all concert tickets that logged in user has purchased
         const purchasesList = await sequelize.query(
            `SELECT PD.event_date, A.artist_name, V.venue_name, TP.seat_grade_desc, P.seat_count
            FROM performancedates PD
            INNER JOIN artist A ON PD.artist_id = A.artist_id
            INNER JOIN purchases P ON PD.perf_date_id = P.perf_id
            INNER JOIN venue V ON PD.venue_id = V.venue_id
            INNER JOIN ticketprices TP ON P.seat_grade = TP.seat_grade
            WHERE P.cust_tix_id = :cust_tix_id`,
            {
              replacements: { cust_tix_id: 1 },
              type: sequelize.QueryTypes.SELECT
            }
          )


      // const purchasesList = await PerformanceDates.findAll({

         // include: [
         //    {
         //       model: Artist,
         //       attributes: ['artist_name']
         //    },
         //    // {
         //    //    model: Purchases,
         //    //    attributes: ['seat_count'],
         //    //    where: { cust_tix_id: 2 },
         //    // },
         //    // {
         //    //    model: TicketPrices,
         //    //    attributes: ['seat_grade_desc']
         //    // },
         //    {
         //       model: Venue,
         //       attributes: ['venue_name']
         //    }
         // ]
      // });

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
      console.log("purchases[0]. is : " + purchases[0].artist.artist_name)

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
const router = require('express').Router();
const { Artist, Venue, PerformanceDates, TicketPrices, Purchases, Customer } = require('../../../db/models');
const { Op } = require("sequelize");
const sequelize = require('../../config/connection');

router.get("/", async (req, res) => {
   try {
      const loggedInCustId = req.session.user_id;

      const customerData = await Customer.findByPk(loggedInCustId, {
         include: [{
            model: Purchases,
            include: [
               { model: TicketPrices },
               {
                  model: PerformanceDates,
                  include: [{ model: Artist }, { model: Venue }]
               }
            ],
         }],
      });

      const customer = customerData.get({ plain: true })

      res.render('showpurchases', { customer, logged_in: req.session.logged_in });

   } catch (err) {
      console.log("Query failed");
      res.status(500).json(err);
   }
});

/*  The above sequelize query in simple SQL
USE wizard_db;            
  SELECT PD.event_date, A.artist_name, V.venue_name, TP.seat_grade_desc, P.seat_count
  FROM performancedates PD
  INNER JOIN artist A ON PD.artist_id = A.artist_id
  INNER JOIN purchases P ON PD.perf_date_id = P.perf_id
  INNER JOIN venue V ON PD.venue_id = V.venue_id
  INNER JOIN ticketprices TP ON P.seat_grade = TP.seat_grade
  INNER JOIN customer C on P.cust_id = C.cust_id
  WHERE P.cust_id = ?
  and P.purchased = 1;
*/


module.exports = router;
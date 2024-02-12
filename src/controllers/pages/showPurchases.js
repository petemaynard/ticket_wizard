const router = require('express').Router();
const sequelize = require('../../config/connection');

router.get('/purchases', async (req, res) => {
   try {
      // Get list of all concert tickets that logged in user has purchased
      // Will need to search by cust_tickets.cust_id
      // This query needs work
      const purchasesList = await CustTicket.findAll({
         include: [
            {
               model: Performance,
               attributes: ['artist', 'city', 'date'],
            },
            {
               model: Ticketprices,
               attributes: ['seat_grade_name']
            }
         ]
      });

      const purchases = purchasesList.map((purchase) => purchase.get({ plain: true }));

      //These are here just for confirmation data is coming through
      console.log("First purchase id is: " + performance[0].id);
      console.log("First purchase seat_grade is: " + performance[0].seat_grade);

      res.render('showpurchases', { purchases });

   } catch (err) {
      res.status(500).json(err);
   }
});

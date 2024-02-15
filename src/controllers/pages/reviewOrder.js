const router = require("express").Router();
const {
  Artist,
  Venue,
  PerformanceDates,
  TicketPrices,
  TaxRate,
  Purchases,
} = require("../../../db/models");

// const { getPurchaseDetails } = require('../../../db/models/Purchases');

router.get("/", async (req, res) => {
  console.log("going to review order");
  try {
    // const artist = Artist.findOne({ where: {} });
    res.render("reviewOrder");
  } catch (err) {
    console.log("Query failed");
    res.status(500).json(err);
  }
});

router.get('/:cust_tix_id', async (req, res) => {
    console.log('going to review order')
    try {
        const loggedInCustId = req.session.user_id;

        const customerData = await Customer.findByPk(loggedInCustId);

        const customerTaxRate = await TaxRate.findByPk(customerData.state);

        console.log(customerData.state);
        console.log(customerTaxRate.rate);

        res.render('reviewOrder');
    } catch (err) {
        console.log("Query failed");
        res.status(500).json(err);
    }
});


module.exports = router;

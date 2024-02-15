const router = require("express").Router();
const {
  Artist,
  Venue,
  PerformanceDates,
  TicketPrices,
  TaxRate,
  Purchases,
  Customer,
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
        console.log(req.params)

        // const purchaseData = await Purchases.findByPk(req.params.cust_tix_id);

        // const purchaseData = await Purchases.findByPk(req.params.cust_tix_id, {
        //     include: [{model: Customer,},],
        //   });

        const purchaseData = await Purchases.findByPk(req.params.cust_tix_id, {
          include: [
            {
              model: Customer,
            },
            { model: TicketPrices },
            {
              model: PerformanceDates,
              include: [{ model: Artist }, { model: Venue }],
            },
          ],
        });

        const customerTaxRate = await TaxRate.findByPk(purchaseData.customer.state);
        
        const taxAmount = calculateTaxes(purchaseData.seat_count, purchaseData.ticketPrice.seat_base_price, customerTaxRate.rate);

        const feeAmount = 10;

        const totalAmount = (purchaseData.ticketPrice.seat_base_price + taxAmount + feeAmount);
        
        const purchase = purchaseData.get({ plain: true });
    
        res.render('reviewOrder', { purchase, taxAmount, feeAmount, totalAmount });
    } catch (err) {
        console.log("Query failed");
        res.status(500).json(err);
    }
});

function calculateTaxes(a, b, c) {
    return a * b * c;
}


module.exports = router;

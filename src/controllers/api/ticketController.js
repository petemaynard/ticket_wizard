const router = require('express').Router();
const { Purchases } = require('../../../db/models');

// GET all tickets
router.get('/', (req, res) => {
  Purchases.findAll().then((purchaseData) => {
    res.json(purchaseData);
  });
});

router.get('/:cust_tix_id', (req, res) => {
  Purchases.findByPk(req.params.cust_tix_id
  ).then((purchaseData) => {
    res.json(purchaseData);
  });
});

router.put('/:cust_tix_id', (req, res) => {
  // Calls the update method on the cust_tix_id
  Purchases.update(
    {
      cust_id: req.body.cust_id,
      perf_id: req.body.perf_id,
      seat_grade: req.body.seat_grade,
      seat_count: req.body.seat_count,
      purchased: req.body.purchased,
    },
    {
      where: {
        cust_tix_id: req.params.cust_tix_id,
      },
    }
  )
    .then((updatedPurchase) => {
      res.json(updatedPurchase);
      console.log("success!");
    })
    .catch((err) => res.json(err));
});

// const search = searchObject;


// router.get('/store', async (req, res) => {
//     console.log('The store page route');
//     try {
//         const basePrice = await TicketPrices.findAll();
//         const band = await Artist.findAll({ where: {artist_name: searchObject.artist_name }});
//         const finalPrice = basePrice.map((item) => {
//             return item.seat_base_price * band.popularity_index
//         });
//         res.render('store', {finalPrice}, {band});
//     } catch (error) {
//         console.log("Query failed");
//         res.status(500).json(err);
//     }
// });

// router.get('/reviewOrder', async (req, res) => {
//     console.log('review order route');
//     try {

//         res.render('review_order', {})
//     } catch (error) {
//         console.log("Query failed");
//         res.status(500).json(err);
//     }
// })

module.exports = router;

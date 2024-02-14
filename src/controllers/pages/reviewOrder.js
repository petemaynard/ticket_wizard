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

router.get("/:purchase_id", async (req, res) => {
  try {
    const customerData = await performSearch(3);
    // console.log(customerData.state);
    const custTaxRate = TaxRate.findByPk(customerData.state);

    const purchaseId = req.params.purchase_id;
    const purchaseDetails = await getPurchaseDetails(purchaseId);
    // pass purchaseDetails including purchase_id to the template
    res.render("reviewOrder", { purchaseDetails });
  } catch (err) {
    console.error("Error fetching purchase details:", err);
    res.status(500).send("Server error");
  }
});

function performSearch(searchTerm) {
  fetch(`/api/users/${encodeURIComponent(searchTerm)}`)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then((data) => {
      updateSearchResults(data);
    })
    .catch((error) => {
      console.error("Error:", error);
      displayError(error);
    });
}

module.exports = router;

const router = require("express").Router();
const { Op } = require("sequelize");
const { Artist, Venue, PerformanceDates, TicketPrices, Customer, Purchases } = require("../../../db/models");

router.get("/:id", async (req, res) => {
  try {
    const payload = await Customer.findAll({
      where: {
            cust_id: {
              [Op.eq]: req.params.id,
            },
          },
      include: [{ model: Purchases,
      include: [{model: TicketPrices}, {model: PerformanceDates, 
      include: [{model: Artist}, {model: Venue}]}]}],
    });

    if (!payload) {
      res
        .status(404)
        .json({ message: "No events found with that search criteria" });
      return;
    }

    res.status(200).json(payload);
  } catch (err) {
    console.error("Search error:", err);
    res.status(500).json({ error: "Internal server error" });
  }
});

// from module 14 lesson 23 controllers/api/userRoutes
// CREATE new user
router.post("/", async (req, res) => {
  try {
    const userData = await Customer.create({
      f_name: req.body.f_name,
      l_name: req.body.l_name,
      address: req.body.address,
      city: req.body.city,
      state: req.body.state,
      zip: req.body.zip,
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
    });

    req.session.save(() => {
      req.session.user_id = userData.cust_id;
      req.session.logged_in = true;


      res.status(200).json(userData);
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.post("/login", async (req, res) => {
  try {
    const userData = await Customer.findOne({
      where: { username: req.body.username },
    });

    if (!userData) {
      res
        .status(400)
        .json({ message: "Incorrect username or password, please try again" });
      return;
    }

    const validPassword = await userData.checkPassword(req.body.password);

    if (!validPassword) {
      res
        .status(400)
        .json({ message: "Incorrect username or password, please try again" });
      return;
    }

    req.session.save(() => {
      req.session.user_id = userData.cust_id;
      req.session.logged_in = true;

      res.json({ user: userData, message: "You are now logged in!" });
    });
  } catch (err) {
    res.status(400).json(err);
  }
});

router.post("/logout", (req, res) => {
  if (req.session.logged_in) {
    req.session.destroy(() => {
      res.status(204).end();
      console.log("You are now logged out!");
    });
  } else {
    res.status(404).end();
  }
});

module.exports = router;

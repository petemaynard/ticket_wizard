const router = require('express').Router();
const homepage = require('./homepage');
const login = require('./login');
const search = require('./search');
const store = require('./store');
const userRoutes = require('./userRoutes');
const purchases = require('./showPurchases');
const reviewOrder = require('./reviewOrder');

router.use("/login", login);
router.use("/search", search);
router.use("/store", store);
router.use("/user", userRoutes);
router.use("/purchases", purchases);
router.use("/", homepage);
router.use("/reviewOrder", reviewOrder)

module.exports = router;
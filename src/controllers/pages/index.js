const router = require('express').Router();
const homepage = require('./homepage');
const login = require('./login');
const search = require('./search');
const store = require('./store');
const userRoutes = require('./userRoutes');

router.use("/login", login);
router.use("/search", search);
router.use("/store", store);
router.use("/user", userRoutes);
router.use("/", homepage);

module.exports = router;
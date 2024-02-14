const express = require('express');
const router = express.Router();
const db = require('../../../db/models'); // Update with the path to your database module

// GET route for the search page
router.get('/', (req, res) => {
  res.render('search', { logged_in: req.session.logged_in });
});

module.exports = router;
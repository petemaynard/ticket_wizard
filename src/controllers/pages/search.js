const express = require('express');
const router = express.Router();
const db = require('../../../db/models'); // Update with the path to your database module

// GET route for the search page
router.get('/', (req, res) => {
  res.render('search');
});

module.exports = router;
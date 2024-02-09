const router = require('express').Router();
const { Performance } = require('../../../db/models/Performance');

router.get('/', async (req, res) => {
    try {

    } catch (err) {
        res.status(400).json(err);
    }
});

module.exports = router;
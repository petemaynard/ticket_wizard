const router = require('express').Router();

router.get('/', async (req, res) => {
    console.log('Route to the search page');
    try {

    } catch (err) {
        res.status(500).json({ error: err.message })
    }
});

module.exports = router;
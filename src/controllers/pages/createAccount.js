const router = require('express').Router();

router.get('/', async (req, res) => {
    try {

    } catch (err) {
        res.status(500).json({ error: err.message })
    }
});

module.exports = router;
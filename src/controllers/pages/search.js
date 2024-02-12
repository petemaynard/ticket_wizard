const router = require('express').Router();

router.get('/search', async (req, res) => {
    try {

    } catch (err) {
        res.status(500).json({ error: err.message })
    }
});

module.exports = router;
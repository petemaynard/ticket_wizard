const router = require('express').Router();
const { Customer } = require('../../../db/models');

// from moduel 14 lesson 23 controllers/api/userRoutes
router.post('/login', async (req, res) => {
    try {
        const userData = await Customer.findOne({ where: { username: req.body.unsername } });

        if (!userData) {
            res
                .status(400)
                .json({ message: 'Incorrect username or password, please try again' });
            return;
        }

        const validPassword = await userData.checkPassword(req.body.password);

        if (!validPassword) {
            res
                .status(400)
                .json({ message: 'Incorrect username or password, please try again' });
            return;
        }

        req.session.save(() => {
            req.session.user_id = userData.id;
            req.session.logged_in = true;

            res.json({ user: userData, message: 'You are now logged in!' });
        });

    } catch (err) {
        res.status(400).json(err);
    }
});

router.post('/logout', (req, res) => {
    if (req.session.logged_in) {
        req.session.destroy(() => {
            res.status(204).end();
        });
    } else {
        res.status(404).end();
    }
});

router.post('/createAccount', async (req, res) => {
    try {
        const newCustomer = req.body;
        newCustomer.password = req.body.password;
        const customerData = await Customer.create(newCustomer);
        res.status(400).json(customerData);
    } catch (err) {
        res.status(400).json(err);
    }
});


module.exports = router;
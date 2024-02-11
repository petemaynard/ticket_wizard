const router = require('express').Router();
const { Customer } = require('../../../db/models');

// from moduel 14 lesson 23 controllers/api/userRoutes
// CREATE new user
router.post('/', async (req, res) => {
    try {
      const userData = await Customer.create({
        f_name: "f_name",
        l_name: "l_name",
        address: "address",
        state: "MN",
        zip: 55413,
        username: req.body.username,
        email: req.body.email,
        password: req.body.password,
      });
  
      req.session.save(() => {
        req.session.logged_in = true;
        console.log("CONSOLE LOG: " + req.session.logged_in);
  
        res.status(200).json(userData);
      });
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  });

router.post('/login', async (req, res) => {
    try {
        const userData = await Customer.findOne({ where: { username: req.body.username } });

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

// router.post('/createAccount', async (req, res) => {
//     try {
//         const newCustomer = req.body;
//         newCustomer.password = req.body.password;
//         const customerData = await Customer.create(newCustomer);
//         res.status(400).json(customerData);
//     } catch (err) {
//         res.status(400).json(err);
//     }
// });


module.exports = router;
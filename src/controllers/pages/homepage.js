const router = require('express').Router();
const sequelize = require('../../config/connection');

router.get('/', async (req, res) => {
   try {
      // Get top 5 performances
      const performanceData = await Performance.findAll({
         limit: 5,
      });


      const performances = performanceData.map((perform) => perform.get({ plain: true}));
   
      console.log("First performance id is: " + performance[0].id);
      console.log("First perfomance artist is: " + performance[0].artist);

      // Time to create the homepage handlebars page
      res.render('homepage', {performances});
   } catch (err) {
      res.status(500).json(err);
       }

});

module.exports = router;
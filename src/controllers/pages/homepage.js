const router = require('express').Router();
const { Artist, Venue, PerformanceDates } = require('../../../db/models');
const sequelize = require('../../config/connection');

router.get('/', async (req, res) => {
   console.log("Hey, it's the home page");
   try {
      const fiveNextEvents = await PerformanceDates.findAll({
         include: [
            { model: Artist },
            { model: Venue }
         ],
         order: [['event_date', 'ASC']],
         limit: 5
      });
      /*  This is the same query written in regular SQL
      SELECT PD.event_date, A.artist_name, V.city, V.venue_name 
      FROM performancedates PD 
      inner join artist A 
      on PD.artist_id = A.artist_id 
      inner join venue V 
      on PD.venue_id = V.venue_id 
      order by PD.event_date 
      limit 5
      */

      const fiveEventsSerial = fiveNextEvents.map(event => event.get({plain: true}));
      console.log("First performance is: " + fiveEventsSerial[0].artist.artist_name);

      //    // Time to create the homepage handlebars page
          res.render('homepage', {fiveEventsSerial});


   } catch (err) {
      console.log("Query failed");
      res.status(500).json(err);
   }
}
);

module.exports = router;

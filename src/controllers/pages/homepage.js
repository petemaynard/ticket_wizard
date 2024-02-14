const router = require("express").Router();
const { Artist, Venue, PerformanceDates } = require("../../../db/models");
const sequelize = require("../../config/connection");

router.get("/", async (req, res) => {
  try {
    const fiveNextEvents = await PerformanceDates.findAll({
      include: [{ model: Artist }, { model: Venue }],
      order: [["event_date", "ASC"]],
      limit: 5,
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

    const fiveEventsSerial = fiveNextEvents.map((event) =>
      event.get({ plain: true })
    );

    // Select a random picture for the featured artist
    const randomNumber = Math.floor(Math.random() * 10) + 1;
    const picNumber = "pic"+randomNumber+".jpg";
    console.log("picNumber is : " + picNumber);

    // Query for a featured band
    const featuredBand = await Artist.findByPk(randomNumber);
    const featuredBandArtist = featuredBand.artist_name;
    const featuredBandArtistDesc = featuredBand.description;

    //    // Time to create the homepage handlebars page
    res.render("homepage", {
      fiveEventsSerial, picNumber, featuredBandArtist, featuredBandArtistDesc,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    console.log("Query failed");
    res.status(500).json(err);
  }
});

module.exports = router;

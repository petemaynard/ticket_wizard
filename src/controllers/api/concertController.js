const express = require("express");
const router = express.Router();
const { Op } = require("sequelize");
const { Artist, Venue, PerformanceDates } = require("../../../db/models");


// GET all concerts based on search value, comparing against artist_name, venue_name, and venue city fields
router.get("/", async (req, res) => {
  const searchQuery = req.query.searchQuery;
   console.log("searchQuery is : " + req.query);
  try {
    // Search based on entered value

    const searchResults = await PerformanceDates.findAll({
      where: {
        [Op.or]: [
          {
            "$artist.artist_name$": {
              [Op.like]: `%${searchQuery}%`,
            },
          },
          {
            "$venue.venue_name$": {
              [Op.like]: `%${searchQuery}%`,
            },
          },
          {
            "$venue.city$": {
              [Op.like]: `%${searchQuery}%`,
            },
          },
        ],
      },
      include: [{ model: Artist }, { model: Venue }],
    });

    if (!searchResults) {
      res
        .status(404)
        .json({ message: "No events found with that search criteria" });
      return;
    }

    res.status(200).json(searchResults);
  } catch (err) {
    console.error("Search error:", err);
    res.status(500).json({ error: "Internal server error" });
  }
});


// GET all concerts
// router.get("/", async (req, res) => {
//   try {
//     const payload = await PerformanceDates.findAll({
//       include: [{ model: Artist }, { model: Venue }],
//     });
//     res.json(payload);
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// });

// GET a single concert
router.get("/:id", async (req, res) => {
  try {
    const payload = await PerformanceDates.findByPk(req.params.id, {
      include: [{ model: Artist }, { model: Venue }],
    });

    if (!payload) {
      res.status(404).json({ message: "No event found with that id!" });
      return;
    }

    res.status(200).json(payload);
  } catch (err) {
    res.status(500).json(err);
  }
});

// GET all concerts by specific artist
router.get("/artist/:id", async (req, res) => {
  try {
    const payload = await PerformanceDates.findAll({
      where: {
        artist_id: {
          [Op.eq]: req.params.id,
        },
      },
      include: [{ model: Artist }, { model: Venue }],
    });

    if (!payload) {
      res.status(404).json({ message: "No artist found with that id!" });
      return;
    }

    res.status(200).json(payload);
  } catch (err) {
    res.status(500).json(err);
  }
});

// GET all concerts by specific venue
router.get("/venue/:id", async (req, res) => {
  try {
    const payload = await PerformanceDates.findAll({
      where: {
        venue_id: {
          [Op.eq]: req.params.id,
        },
      },
      include: [{ model: Artist }, { model: Venue }],
    });

    if (!payload) {
      res.status(404).json({ message: "No venue found with that id!" });
      return;
    }

    res.status(200).json(payload);
  } catch (err) {
    res.status(500).json(err);
  }
});


module.exports = router;

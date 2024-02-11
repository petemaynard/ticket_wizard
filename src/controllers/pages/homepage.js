const router = require('express').Router();
const sequelize = require('../../config/connection');

router.get('/', (req, res) => {   // Insert middleware authorization checker
db.query('SELECT date, artist, city, venue from performance ORDER BY date asc LIMIT 5;', function (error, result) {
      if(error){
      console.log("Unable to query performance table");
   } else {
      console.log(result);
   }
})

    res.render('homepage');
});

module.exports = router;
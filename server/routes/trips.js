const router = require('express').Router();
const isAuth = require('../middlewares/isAuth');
const imageUpload = require('../middlewares/imageUpload');

const {
  getTrips,
  addTrip,
  updateTrip
} = require('../controllers/tripsController');

// @TODO protect routes

router.get("/", getTrips);

router.post("/", imageUpload.single('picture'), addTrip);

router.put("/", updateTrip);


module.exports = router;
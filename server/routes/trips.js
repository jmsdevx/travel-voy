const router = require('express').Router();
const isAuth = require('../middlewares/isAuth');
const imageUpload = require('../middlewares/imageUpload');

const {
  getTrips,
  addTrip,
  updateTrip
} = require('../controllers/tripsController');

// @TODO protect routes

router.get("/", isAuth, getTrips);

router.post("/", isAuth, imageUpload.single('picture'), addTrip);

router.put("/", isAuth, updateTrip);


module.exports = router;
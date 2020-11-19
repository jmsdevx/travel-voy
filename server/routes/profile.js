const router = require('express').Router();
const isAuth = require('../middlewares/isAuth');


const aws = require('aws-sdk');
const multer = require('multer');
const multerS3 = require('multer-s3');

const {
  accessKey,
  secretKey,
  bucket
} = require('../config/aws');

const s3 = new aws.S3({
  accessKeyId: accessKey,
  secretAccessKey: secretKey,
});

const upload = multer({
  storage: multerS3({
    s3: s3,
    bucket: bucket,
    acl: "public-read",
    contentType: multerS3.AUTO_CONTENT_TYPE,
    key: function (req, file, cb) {
      console.log('file: ', file);
      const fileName = `${Date.now().toString()}-${file.originalname}`;
      cb(null, fileName);
    }
  })
});

const {
  getProfile,
  updateProfile,
  updateProfilePicture,
  updateBackgroundPicture
} = require('../controllers/profileController');

// @TODO protect routes 

router.get("/:id", getProfile);

router.put("/", updateProfile);

router.put("/profile-picture", upload.single('file'), updateProfilePicture);

router.put("/background-picture", upload.single('file'), updateBackgroundPicture);


module.exports = router;
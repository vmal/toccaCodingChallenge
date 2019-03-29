const express = require('express');
const router = express.Router();
const userController = require('../controller/userController');

/* GET users profiles. */
router.get('/getUserProfiles', userController.getUserProfiles);

router.post('/createUserProfile',userController.createUserProfile);

module.exports = router;

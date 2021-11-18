const express = require('express');
const router = express.Router();

const userContrl = require('../controllers/usercontrl');

//User table DB
router.post('/inscription', userContrl.signup);
router.post('/connect', userContrl.login);
//router.post('/connect', userContrl.getOneUser);



module.exports = router;
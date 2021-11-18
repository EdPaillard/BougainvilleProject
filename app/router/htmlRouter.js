const express = require('express');
const router = express.Router();

const htmlContrl = require('../controllers/htmlcontrl');

//displayHtml
router.get('/', htmlContrl.mainPage);
router.get('/contact', htmlContrl.contactPage);
router.get('/fragments', htmlContrl.fragmentsPage);
router.get('/boutique', htmlContrl.shopPage);
router.get('/timeline', htmlContrl.timelinePage);
router.get('/apropos', htmlContrl.resumePage);
router.get('/inscription', htmlContrl.subscribePage);
router.get('/connect', htmlContrl.connectPage);
router.get('/profil/:id', htmlContrl.profilPage);


module.exports = router;
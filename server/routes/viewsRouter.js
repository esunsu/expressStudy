const express = require('express');
const router = express.Router();
const  ctrl = require('../controllers/viewsController');

/* GET home page. */
router.get('/', ctrl.homeController);

module.exports = router;

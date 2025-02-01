var express = require('express');
var router = express.Router();
const config = require("../../config/config");

/* GET home page. */
router.get('/', function(req, res, next) {
  console.log("config", config);
  res.render('index.html', {
    config:config
  });
});

module.exports = router;

const config = require("../../config/config");

homeController = function (req, res, next) {
    res.render('index.html', {
        config:config
    });
}

module.exports = {
    homeController: homeController
}
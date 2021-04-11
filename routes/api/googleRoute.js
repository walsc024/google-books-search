// feeding the searched string through here to a call to google api and returning to the front end
const router = require("express").Router();
const googleController = require("../../controllers/googleController");

router.route("/").get(googleController.googleApiCall);

module.exports = router;

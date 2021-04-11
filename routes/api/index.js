const router = require("express").Router();
const path = require("path");
const booksEndpoints = require("./booksRoutes");
const googleEndpoints = require("./googleRoute");

//router.use("/books", booksEndpoints);
router.use("/google", googleEndpoints);

router.use(function (request, response) {
  response.sendFile(path.join(__dirname, "../../client/build/index.html"));
});

module.exports = router;
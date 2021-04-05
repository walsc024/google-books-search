const router = require("express").Router();
const booksEndpoints = require("./booksRoutes")
const googleEndpoint = require("./googleRoute");

router.use("/books", booksEndpoints);
router.use("/google", googleEndpoint);

module.exports = router; 
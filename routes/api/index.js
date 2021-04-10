const router = require("express").Router();
const booksEndpoints = require("./booksRoutes")
const googleEndpoint = require("./googleRoute");

router.use("/books", booksEndpoints);
router.use("/google", googleEndpoint);

router.use(function(request, response) {
    response.sendFile(path.join(__dirname, '../../client/build/index.html'))
})

module.exports = router; 
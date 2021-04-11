const router = require("express").Router();
const path = require("path");
const allRoutes = require("./api");

router.use("/api", allRoutes);

router.use(function (request, response) {
  response.sendFile(path.join(__dirname, "../../client/build/index.html"));
});
module.exports = router;
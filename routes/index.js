const router = require("express").Router();
const allRoutes = require("/api");

router.use("/api", allRoutes);

module.exports = router; 
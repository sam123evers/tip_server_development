var express = require('express');
var router = express.Router();

router.use("/api", require("./goals"));
router.use("/api", require("./users"));
router.use("/api", require("./bills"));


module.exports = router;

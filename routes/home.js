const router = require("express").Router();
const { Home } = require("../controller/home");
router.get("/", Home);
module.exports = router;

const router = require("express").Router();
router.use("/", (req, res, next) => {
  res.status(404).json({
    message: "Not Found!"
  });
});
module.exports = router;

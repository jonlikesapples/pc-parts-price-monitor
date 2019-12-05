exports.Home = (req, res, next) => {
  res.status(200).json({
    message: "You are in home!"
  });
};

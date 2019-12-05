const express = require("express");
const bodyParser = require("body-parser");

const app = express();

// Config
app.use(bodyParser.json());

// Routes
app.use("/", require("./routes"));

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server running on port: ${port}`);
});

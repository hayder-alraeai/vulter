const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.json({ message: "ha lek doooooq" });
});

app.listen(5000, () => {
  console.log(`app is listening on port 5000`);
});

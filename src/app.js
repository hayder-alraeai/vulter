const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.json({ message: "hello doqi this is a new version" });
});

app.listen(5000, () => {
  console.log(`app is listening on port 5000`);
});

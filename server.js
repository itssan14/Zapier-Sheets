const express = require("express");
const app = express();

app.post("/info", (req, res) => {
  res.send("Succesfully Recieved");
});

const port = 3001 || process.env.PORT;
app.listen(port, () => {
  console.log(`Server running at PORT : ${port}`);
});

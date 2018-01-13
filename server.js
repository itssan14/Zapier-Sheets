const express = require("express");
const bodyParser = require("body-parser");
const app = express();
//Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
//Post Request
app.post("/info", (req, res) => {
<<<<<<< HEAD
  res.send(
    `Entered data was succesfully added into the table ${req.body.tableName}`
  );
=======
  res.send(`Entered message was succesfully sent`);
>>>>>>> 3d158ff679d14adf0f5e6b61da74063caf6d62ca
  console.log(req.body);
});
//Listening for request
const port = 3001 || process.env.PORT;
app.listen(port, () => {
  console.log(`Server running at PORT : ${port}`);
});

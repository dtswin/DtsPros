const express = require("express");
const app = express();
const PORT = 5300;
app.use('/', async (req, res) => {
res.send("wellcome");
});
app.listen(PORT, () => {
    console.log("Database is connected!!!");

  });
//console.log("this is test");
const express = require('express');
const bodyParser = require('body-parser');
const detailRoutes = require("./routes/detail");
const cors = require("cors");

const app=express();

app.use(cors());

app.use(bodyParser.json()); 

app.use(express.json());
app.use("/person", detailRoutes);

app.listen(8080, () => {
  console.log("connected");
});

//require("./helpers/db")
const bodyParser = require("body-parser");
const express = require("express");
const app = express();
const port = process.env.PORT || 6003;
const cors = require("cors");
const jwt = require("./helpers/jwt");
const errorHandler = require("./helpers/error-handler");

// configration
app.use(bodyParser.json());
app.use(express.urlencoded({extended:true}));
app.use(cors());

// use JWT auth to secure the api
app.use(jwt());

// api routes
app.use("/users", require("./user/userControllers"));

// global error handler
app.use(errorHandler);

app.listen(port, ()=>{
    console.log(`Server is running on the ${port} port`);
});
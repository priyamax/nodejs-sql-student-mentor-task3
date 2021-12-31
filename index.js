const express = require("express");
//const dotenv = require("dotenv");
const mysql = require('./shared/connection');
const Router = require('./routes/route');

//dotenv.config();
const app = express();
// To convert req.body into json format
app.use(express.json());
mysql.connect();

app.use('/', Router);

//app.listen(process.env.PORT || 3000);
app.listen(3000);
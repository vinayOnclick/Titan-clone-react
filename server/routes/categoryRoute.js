const express = require("express");
const bodyParser = require("body-parser");

const route = express();

route.use(bodyParser.json());
route.use(bodyParser.urlencoded({ extended: true}));



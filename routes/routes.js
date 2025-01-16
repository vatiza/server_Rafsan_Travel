const express = require("express");
const { getPlaces } = require("../controllers/placesControllers");
const route = express.Router();
route.get("/", (req, res) => res.send(" Rafsan Server is running..😘"));

// get route
route.get("/places", getPlaces);

module.exports = route;

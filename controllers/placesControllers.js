const { db } = require("../config/db");

const getPlaces = async (req, res) => {
  const places = await db.collection("places").find().toArray();
  res.json(places);
};
module.exports = { getPlaces };

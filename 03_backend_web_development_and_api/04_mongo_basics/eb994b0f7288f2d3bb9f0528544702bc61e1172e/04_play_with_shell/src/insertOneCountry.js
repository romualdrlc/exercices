/* global db */

// write your MongoDB shell command here
const country = {
  name: "France",
  capital: "Paris",
  continent: "Europe",
};

db.worldAtlas.insertOne(country);

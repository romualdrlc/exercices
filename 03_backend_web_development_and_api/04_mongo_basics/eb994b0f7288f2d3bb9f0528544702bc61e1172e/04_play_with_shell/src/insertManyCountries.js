/* global db */

// write your MongoDB shell command here
const manyCountry = [
  {
    name: "Italie",
    capital: "Rome",
    continent: "europe",
  },
  {
    name: "Espagne",
    capital: "Madrid",
    continent: "europe",
  },
  {
    name: "Belgique",
    capital: "Bruxelles",
    continent: "europe",
  },
];

db.worldAtlas.insertMany(manyCountry);

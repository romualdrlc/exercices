import * as mongo from "mongodb";

export function findManyCountries(db: mongo.Db): Promise<string | void> {
  // code your function here
  return db
    .collection("worldAtlas")
    .find({ continent: "Europe" })
    .toArray() // 🔍👈
    .then((docs) => {
      console.log(docs);
    });
}

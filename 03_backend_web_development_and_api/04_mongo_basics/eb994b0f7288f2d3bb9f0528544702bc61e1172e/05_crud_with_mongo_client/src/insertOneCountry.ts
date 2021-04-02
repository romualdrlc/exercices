import { resolveNaptr } from "dns";
import * as mongo from "mongodb";

export function insertOneCountry(db: mongo.Db): Promise<any> {
  // code your function here
  return db
    .collection("worldAtlas")
    .insertOne({ name: "Italie" })
    .then((pays) => pays.insertedId);
}

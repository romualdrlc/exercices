/*
 * Requires the MongoDB Node.js Driver
 * https://mongodb.github.io/node-mongodb-native
 */

const agg = [
  {
    $group: {
      _id: "$platform.slug",
      games: {
        $push: {
          name: "$slug",
          genre: "$genres",
        },
      },
    },
  },
  {
    $project: {
      platform: {
        $size: "$games",
      },
    },
  },
];

MongoClient.connect(
  "mongodb+srv://romualdrlc:3005Sandrine%21@cluster0.bj3zp.mongodb.net/modelsWithMongo?authSource=admin&replicaSet=atlas-39ywk4-shard-0&w=majority&readPreference=primary&appname=MongoDB%20Compass&retryWrites=true&ssl=true",
  { useNewUrlParser: true, useUnifiedTopology: true },
  function (connectErr, client) {
    assert.equal(null, connectErr);
    const coll = client.db("modelsWithMongo").collection("games");
    coll.aggregate(agg, (cmdErr, result) => {
      assert.equal(null, cmdErr);
    });
    client.close();
  },
);

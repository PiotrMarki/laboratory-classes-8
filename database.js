const { DB_USER, DB_PASS } = require("./config");
const mongodb = require("mongodb");
const MongoClient = mongodb.MongoClient;

let database;

const mongoConnect = (callback) => {
  MongoClient.connect(`mongodb+srv://${DB_USER}:${DB_PASS}@cluster0.zme8lc6.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`)
    .then((client) => {
      console.log("Connected!");
      database = client.db("shop");
      callback();
    })
    .catch((error) => console.log(error));
};

const getDatabase = () => {
  if (!database) {
    throw "No database found!";
  }

  return database;
};

module.exports = { mongoConnect, getDatabase };

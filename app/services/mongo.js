const mongoose = require("mongoose");
//const dbConfig = require("./../config/db.config");
//const MONGO_URL = dbConfig.url;

mongoose.connection.once("open", () => {
  console.log("MongoDB connection ready!");
});

mongoose.connection.on("error", (err) => {
  console.error(err);
});

async function mongoConnect() {
  await mongoose.connect("mongodb://admin:password@http://dockernodeapp-env.eba-js4t7d5t.eu-west-3.elasticbeanstalk.com:27017/my-test?authSource=admin");
}

async function mongoDisconnect() {
  await mongoose.disconnect();
}

module.exports = {
  mongoConnect,
  mongoDisconnect,
};

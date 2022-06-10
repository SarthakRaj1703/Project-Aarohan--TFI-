const mongoose = require("mongoose");

const connectDB = async (uri) => {
  await mongoose.connect(uri, {}).catch(function (error) {
    console.log(`Unable to connect to mongodb ${error}`);
  });
};

module.exports = connectDB;

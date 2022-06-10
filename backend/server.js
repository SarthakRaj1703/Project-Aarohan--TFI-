const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const connectDB = require("./database/connect");

require("dotenv").config();

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

// const uri = process.env.ATLAS_URI;
// const connectDB = async () => {
//   await mongoose
//     .connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
//     .catch(function (error) {
//       console.log(`Unable to connect to mongodb ${error}`);
//     });
// };
const uri = process.env.ATLAS_URI;
connectDB(uri);

const connection = mongoose.connection;
connection.once("open", () => {
  console.log("MongoDB connection successful");
});

const studentsRouter = require("./routes/students");
const teachersRouter = require("./routes/teachers");

app.use("/students", studentsRouter);
app.use("/teachers", teachersRouter);

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

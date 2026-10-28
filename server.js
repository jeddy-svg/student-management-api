require("dotenv/config")

const express = require("express");
const mongoose = require("mongoose");
const studRoutes = require("./router/studRout");

const app = express();
const PORT = process.env.PORT || 3200;
const MONGO_URI = process.env.MONGO_URI;
console.log(MONGO_URI);
app.use(express.json());
app.get("/", (req, res) => {
  res.json({ message: "Student Management API Running" });
});

app.use("/students", studRoutes);
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));

mongoose
  .connect(MONGO_URI)
  .then(() => {
    console.log("MongoDB connected");
  })
  .catch((err) => {
    console.log(err);
  });

const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema(
  {
    firstname: { type: String, required: [true, "Firstname is required"], trim: true },
    lastname: {
      type: String,
      required: [true, "Lastname is required"],
      trim: true,
    },
    age: { type: Number, required: [true, "Age is required"], min: 1 },
    rollNo: { type: String, required: [true, "RollNo is required"], trim: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Student", studentSchema);

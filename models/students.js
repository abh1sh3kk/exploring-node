const mongoose = require("mongoose");

// Student Schema
const studentSchema = mongoose.Schema({
    firstname: { type: String },
    lastname: { type: String },
    phone: { type: String, unique: true, require: true },
    email: { type: String, unique: true, require: true },
});

// Define and export
module.exports = mongoose.model("Students", studentSchema);

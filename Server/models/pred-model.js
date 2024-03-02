const mongoose = require("mongoose");

const predSchema = new mongoose.Schema({
    Name: String,
    Age: String,
    Gender: String,
    TSH: String,
    T3: String,
    TT4: String,
    OnThyroid: String,
    QueryOnThyroxine: String,
    OnAntithyroidMedication: String,
    Sick: String,
    Pregnant: String,
    ThyroidSurgery: String,
    I131Treatment: String,
    QueryHypothyroid: String,
    QueryHyperthyroid: String,
    Tumor: String,
    Psych: String,
    userId: String
});

const pred = mongoose.model("predictions",predSchema);

module.exports = pred;
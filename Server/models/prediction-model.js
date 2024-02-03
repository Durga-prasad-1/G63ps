const {Schema, model} = require("mongoose");

const predictSchema = new Schema({
    Name: {type: String, required: true},
    Age: {type: Number,required: true },
    Gender: {type: String, required: true},
    TSH: {type: Number, required: true},
    T3: {type: Number, required: true},
    TT4: {type: Number, required: true},
    OnThyroid: {type: String, required: true},
    OnAntithyroidMedication: {type: String, required: true},
    Sick: {type: String, required: true},
    Pregnant: {type: String, required: true},
    ThyroidSurgery: {type: String, required: true},
    I131Treatment: {type: String, required: true},
    QueryHypothyroid:{type: String, required: true},
    QueryHyperthyroid: {type: String, required: true},
    Tumor: {type: String, required: true},
    Psych: {type: String, required: true},
    result: {type: String, required: true}
});

const pred_model =model("Prediction", predictSchema);

module.exports = pred_model;

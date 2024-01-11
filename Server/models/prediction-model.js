const {Schema, model} = require("mongoose");

const predictSchema = new Schema({
    Name: {type: String, required: true},
    age: {type: Number,required: true },
    sex: {type: String, required: true},
    TSH: {type: Number, required: true},
    T3: {type: Number, required: true},
    TT4: {type: Number, required: true},
    onThyroxine: {type: String, required: true},
    onAntiThyroidMedication: {type: String, required: true},
    sick: {type: String, required: true},
    pregnant: {type: String, required: true},
    thyroidSurgery: {type: String, required: true},
    I131Treatment: {type: String, required: true},
    queryHypothyroid:{type: String, required: true},
    queryHyperthyroid: {type: String, required: true},
    lithium: {type: String, required: true},
    goitre: {type: String, required: true},
    tumor: {type: String, required: true},
    Hypopituitary: {type: String, required: true},
    psych: {type: String, required: true},
});

const pred_model =model("Prediction", predictSchema);

module.exports = pred_model;

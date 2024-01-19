const { model } = require("mongoose");
const pred_model = require("../models/prediction-model");
const { PythonShell } = require("python-shell");

const predictForm = async (req, res) => {
    try {
        const dataToPredict = req.body;
        delete dataToPredict.Name;

        const modelPrediction = async (data) => {
            const options = {
                mode: "text",
                scriptPath: "./ML_model",
                args: JSON.stringify(data),
            };
            return new Promise((resolve, reject) => {
                PythonShell.run("deployment_g63.py", options).then((results) => {
                    try {
                        const prediction = JSON.parse(results[0].replace(/'/g, '"'));
                        resolve(prediction);
                    } catch (error) {
                        console.log("Error in parsing the data", error);
                        reject(error);
                    }
                }).catch((err) => {
                    console.log("Error in executing the Python script: ", err);
                    reject(err);
                });
            });
        };

        const prediction = await modelPrediction(dataToPredict);
        res.json({prediction });

    } catch (error) {
        console.log("Error:",error);
        res.status(500).json({ error: "Internal Server Error" });
        return;
    }
};

module.exports = { predictForm };

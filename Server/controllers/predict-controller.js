const { model } = require("mongoose");
const pred_model = require("../models/prediction-model");
const { PythonShell } = require("python-shell");
const User = require("../models/user-model");

const predictForm = async (req, res) => {
    try {
        const dataToPredict = req.body;
        const name = dataToPredict.Name;
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
<<<<<<< HEAD
                    return err;
=======
                    res.json({ error: `Error in executing the Python script ${err}` });
>>>>>>> dbf6ac10da714463ce8b1e19a872fefcb5eabfdd
                    reject(err);
                });
            });
        };

        const prediction = await modelPrediction(dataToPredict);
        const dbData = dataToPredict;
        dbData["Name"]=name;
        dbData["result"]=prediction[0];
        await pred_model.create(dbData);
        res.json({prediction });

    } catch (error) {
        console.log("Error:",error);
        res.json({ error});
        return;
    }
};

module.exports = { predictForm };

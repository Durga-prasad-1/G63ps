const { model } = require("mongoose");
const pred_model = require("../models/prediction-model");
const {PythonShell} = require("python-shell");

const predictForm = async (req, res)=>{
    try {
        const response = req.body;
        const modelPrediction = async (data) => {
            const options = {
                mode: "text",
                scriptPath:"C:/Users/jayan/OneDrive/Documents/KMIT/PS/Thyroid Detection/WebApp/server/ML_model",
                args: JSON.stringify(data),
            };  

            return new Promise((resolve, reject)=>{
                PythonShell.run("deployment_g63.py",options).then((err, results)=>{
                    if (err){
                        reject(err);
                    }else {
                        resolve(JSON.parse(results[0]));
                    }
                });
                //const pyshell = new PythonShell("deployment_g63.py", options);

                // pyshell.on("message", (message) => {
                //     resolve(JSON.parse(message));
                // });

                // pyshell.on("error", (err) => {
                //     reject(err);
                // });
            });
        };
        const dataToPredict = req.body;
        delete dataToPredict.Name;
        //const Data = Object.values(dataToPredict);
        const prediction = await modelPrediction(dataToPredict);
        console.log("Prediction: ",prediction);

    } catch (error) {
        console.log(error);
    }
}

module.exports = {predictForm};

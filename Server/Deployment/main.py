from flask import Flask, request
import pickle
import json
import pandas as pd
from openai import OpenAI
from flask_pymongo import PyMongo
from flask_cors import CORS

app = Flask(__name__)
app.config['MONGO_URI']='mongodb+srv://jayanth:mongoDBps@cluster0.idqmlue.mongodb.net/PS_Thyroid?retryWrites=true&w=majority'
mongo=PyMongo(app)
CORS(app)

@app.route("/")
def hello_world():
    return "<p>Hello, World!</p>"
@app.route("/prediction",methods=['POST'])
def predict():
    if request.method == "POST":
        try:
            with open("model.pkl", 'rb') as model_file:
                model = pickle.load(model_file)    
        except Exception as error:
            return json.dumps(error)
        # Parse input data from command line arguments
        data = request.json
        Name=data["Name"]
        del data['Name']
        input_data = [list(data.values())]
        # Converting strings into integers and NaN
        input_data[0][1]=int(input_data[0][1])
        for i in range(len(input_data[0])):
            if input_data[0][i]=="":
                input_data[0][i] = None
            elif input_data[0][i] == "0" or input_data[0][i] == "1":
                input_data[0][i]=int(input_data[0][i])
            else:
                input_data[0][i]=float(input_data[0][i]) 
        # prediction = model.predict(input_data)
        try:
            df = pd.DataFrame(input_data, columns=['age', 'sex', 'TSH', 'T3', 'TT4', 'on_thyroxine', 'query_on_thyroxine', 'on_antithyroid_medication', 'sick', 'pregnant', 'thyroid_surgery', 'I131_treatment', 'query_hypothyroid', 'query_hyperthyroid', 'tumor', 'psych'])
        except:
            return "Error in connecting to db"
        result = model.predict(df)[0]
        print(result)
        #data["Name"]=Name
        data["result"]=result
        data["Name"]=Name
        mongo.db.predictions.insert_one(data)
        return json.dumps({"prediction":result})
@app.route("/suggestions",methods=['POST'])
def suggest():
    if request.method == 'POST':
        api_key = "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"
        client = OpenAI(api_key=api_key)

        thyroid = request.json

        response = client.chat.completions.create(
            model="gpt-3.5-turbo",
            messages=[
                {"role": "assistant", "content": f"Provide preferred diet plan and exercises for {thyroid}. Main three points only for each."},
            ],
            temperature=0.7,
            max_tokens=500, 
            top_p=1,
            frequency_penalty=0,
            presence_penalty=0,
        )

        generated_text = response.choices[0].message.content
        print(generated_text)
        return generated_text

app.run(debug=True,host='0.0.0.0')

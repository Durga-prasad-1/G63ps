import pickle
import sys
import json
import pandas as pd
import os

path = os.getcwd()
with open(path+"\\ML_model\\model.pkl", 'rb') as model_file:
    model = pickle.load(model_file)

def predict(data):
    df = pd.DataFrame(data, columns=['age', 'sex', 'TSH', 'T3', 'TT4', 'on_thyroxine', 'query_on_thyroxine', 'on_antithyroid_medication', 'sick', 'pregnant', 'thyroid_surgery', 'I131_treatment', 'query_hypothyroid', 'query_hyperthyroid', 'tumor', 'psych'])
    result = model.predict(df)
    return result.tolist()

if __name__ == "__main__":
    # Parse input data from command line arguments
    data = json.loads(sys.argv[1])
    input_data = [list(data.values())]
    # Converting strings into integers and NaN
    #input_data[0][1]=int(input_data[0][1])
    for i in range(len(input_data[0])):
        if input_data[0][i] == "":
            input_data[0][i]=None
        elif input_data[0][i] == "0" or input_data[0][i] == "1":
            input_data[0][i]=int(input_data[0][i])
        else:
            input_data[0][i]=float(input_data[0][i]) 
    prediction = predict(input_data)
    print(json.dumps(prediction))

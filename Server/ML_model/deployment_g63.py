import pickle
import sys
import json
import pandas as pd

path = "C:/Users/jayan/OneDrive/Documents/KMIT/PS/Thyroid Detection/WebApp/server/ML_model/model1.pkl"

with open(path, 'rb') as model_file:
    model = pickle.load(model_file)

def predict(data):
    df = pd.DataFrame(data, columns=['age', 'sex', 'TSH', 'T3', 'TT4', 'on_thyroxine', 'query_on_thyroxine', 'on_antithyroid_medication', 'sick', 'pregnant', 'thyroid_surgery', 'I131_treatment', 'query_hypothyroid', 'query_hyperthyroid', 'lithium', 'goitre', 'tumor', 'hypopituitary', 'psych'])
    # Make predictions using the loaded model
    result = model.predict(df)
    return result.tolist()

if __name__ == "__main__":
    # Parse input data from command line arguments
    data = json.loads(sys.argv[1])
    input_data = [list(data.values())]
    prediction = predict(input_data)
    print(json.dumps(prediction))

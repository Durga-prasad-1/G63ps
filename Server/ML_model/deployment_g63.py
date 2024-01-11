import pickle
import sys
import json

path = "C:/Users/jayan/OneDrive/Documents/KMIT/PS/Thyroid Detection/WebApp/server/ML_model/model.pkl"

with open(path, 'rb') as model_file:
    model = pickle.load(model_file)

def predict(data):
    # Make predictions using the loaded model
    result = model.predict(data)
    return result.tolist()

if __name__ == "__main__":
    # Parse input data from command line arguments
    data = json.loads(sys.argv[1])
    prediction = predict([list(data.values())])
    print(json.dumps(prediction))

website link - https://thyro-aid.vercel.app/

# Thyro-Aid 🩺: A Thyroid Disease Prediction App

Thyro-Aid is a full-stack web application built with the **MERN** (MongoDB, Express.js, React, Node.js) stack to predict thyroid disease. The platform provides an interactive user interface for data input and leverages a machine learning model on the backend to deliver real-time predictions.

![React](https://img.shields.io/badge/react-%2320232A.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)
![MongoDB](https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white)

---

## ✨ Features

* **Full-Stack Application**: A robust backend server built with Node.js and Express, connected to a dynamic React frontend.
* **Interactive UI**: A modern, responsive user interface created with React for seamless data entry.
* **RESTful API**: The backend exposes API endpoints for the frontend to consume for predictions.
* **Database Integration**: Uses MongoDB to store and manage data.

---

## 🛠️ Tech Stack

* **Frontend**: React.js
* **Backend**: Node.js, Express.js
* **Database**: MongoDB
* **Machine Learning**: Scikit-learn (Note: The backend likely runs a Python script or uses a model converted to a compatible format like ONNX.js).

---

## 🚀 How to Run Locally

Follow these steps to get the project running on your local machine.

### Prerequisites

* Node.js and npm (or yarn)
* MongoDB installed and running locally, or a connection string from MongoDB Atlas.

### Installation & Setup

1.  **Clone the repository:**
    ```bash
    git clone [https://github.com/Jayanth-137/Thyro-Aid.git](https://github.com/Jayanth-137/Thyro-Aid.git)
    cd Thyro-Aid
    ```

2.  **Set up the Backend Server:**
    ```bash
    # Navigate to the server directory
    cd server

    # Install dependencies
    npm install

    # Create a .env file in the /server directory and add your variables
    # Add your MongoDB connection string and a port number
    MONGO_URI=your_mongodb_connection_string
    PORT=5000
    ```

3.  **Set up the Frontend Client:**
    ```bash
    # Navigate to the client directory from the root folder
    cd ../Frontend

    # Install dependencies
    npm install
    ```

### Running the Application

You'll need to run the backend and frontend servers in two separate terminals.

1.  **Start the Backend Server:**
    ```bash
    # From the /Server directory
    npm start
    ```
    The server should now be running on `http://localhost:5000`.

2.  **Start the Frontend Client:**
    ```bash
    # From the /Frontend directory
    npm start
    ```
    The React development server will open the application in your browser, usually at `http://localhost:3000`.

---


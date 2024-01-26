require('dotenv').config();
const express = require("express");
const cors = require("cors");
const app = express();
const router = require("./router/auth-router");
const connectDb = require("./utils/db");
const errorMiddleware = require("./middlewares/error-middleware");
const contactRoute = require("./router/contact-router");
const predRoute = require("../server/router/prediction-router");

const corsOptions = {
    origin: "http://localhost:3000",
    methods: "GET, POST, PUT, PATCH, DELETE, HEAD",
    credentials: true,
}

app.use(cors(corsOptions));
app.use(express.json());

app.use("/auth",router);
app.use("/",contactRoute);
app.use("/model",predRoute);
app.use(errorMiddleware);

const PORT = 5000;


connectDb().then(()=>{
    app.listen(PORT,()=>{
        console.log(`Running on Port ${PORT}`);
    });
});

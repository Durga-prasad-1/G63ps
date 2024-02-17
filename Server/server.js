require('dotenv').config();
const express = require("express");
const cors = require("cors");
const app = express();
const router = require("./router/auth-router");
const connectDb = require("./utils/db");
const errorMiddleware = require("./middlewares/error-middleware");
const contactRoute = require("./router/contact-router");
const pwdRoute= require("../Server/router/password-router");

const corsOptions = {
    origin: "https://thyro-aid.vercel.app",
    methods: "GET, POST, PUT, PATCH, DELETE, HEAD",
    credentials: true,
}

app.use(cors(corsOptions));
app.use(express.json());

app.use("/auth",router);
app.use("/",contactRoute);
app.use("/passwords",pwdRoute);
app.use(errorMiddleware);

const PORT = 5000;

connectDb().then(()=>{
    app.listen(PORT,()=>{
        console.log(`Running on Port ${PORT}`);
    });
});

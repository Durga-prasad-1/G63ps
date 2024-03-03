const User = require("../models/user-model");

//Home page Logic
const home = async (req,res)=>{
    try {
        res.status(200).json({msg:"Welcome to home page"});
    } catch (error) {
        console.log(`Error in Home ${error}`);
    }
};

//Registration page Logic
const register = async (req,res)=>{
    try {
        
        const {username, email, password, confirmPassword}=req.body;

        //if EMAIL Already Exists
        const userExist = await User.findOne({email});
        if(userExist){
            return res.status(400).json({msg:"Email Already exists"});
        }

        //if USERNAME Already Exists
        const unameExist = await User.findOne({username});
        if(unameExist){
            return res.status(400).json({msg:"Username already exists."});
        }

        //if Password & Confirm Password doesn't match
        if(password!=confirmPassword){
            return res.status(400).json({msg:"Passwords don't match"});
        }

        const userCreated = await User.create({username,email,password});
        res.status(201).json({
            msg: " Registration Successfull",
            token: await userCreated.generateToken(),
            Id: userCreated._id.toString(),
        });

    } catch (error) {
        res.status(500).json({msg:"Internal server error"});
        console.log(error);
    }
} 

//Login page Logic
const login = async (req, res)=>{
    try {
        const {username, password} = req.body;

        const userExist = await User.findOne({username});

        if(!userExist){
            return res.status(400).json({msg: "Invalid Credentials"});
        }

        const isPasswordValid = await userExist.PasswordCheck(password);

        if(isPasswordValid){
            res.status(200).json({
                msg: "Login Successful",
                token: await userExist.generateToken(),
                Id: userExist._id.toString(),
            });
        }else{
            res.status(400).json({msg: "Invalid Username or Password"});
        }
    } catch (error) {
        res.status(500).json({msg: "Internal server error"})
    }
}

//User Data Retrieving Logic
const user = async (req, res)=>{
    try {
        const userData = req.user;
        return res.json({data:userData});
    } catch (error) {
        console.log(`Error in user route ${error}`)
    }
}

//Prediction History Logic
const pred = require("../models/pred-model");
const history = async (req,res)=>{
    try {
        const Id = req.userId;
        const query = await pred.find({userId:Id});
        res.status(200).json(query);
    } catch (error) {
        console.log("Error in prediction history",error);
        res.status(500).json({msg:"Error while fetching details"});
    }
}

module.exports = { home, register, login, user, history };

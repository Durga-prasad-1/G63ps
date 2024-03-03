const jwt = require("jsonwebtoken");
const User = require("../models/user-model");
const connectDb = require("../utils/db");

const authMiddleware = async (req, res, next)=>{
    const token = req.header("Authorization");
    if(!token){
        return res.status(401).json({msg:"Unautharized HTTP, Token not provided."});
    }
    const jwtToken = token.replace("Bearer","").trim();
    
    try {
        const isVerified = jwt.verify(jwtToken,process.env.JWT_KEY);
        //console.log(isVerified);
        const userData = await User.findOne({_id:isVerified.userId});

        req.token = jwtToken;
        req.user = userData;
        req.userId = userData._id;
    } catch (error) {
        console.log(error);
        return res.status(400).json({msg: "Unautharized. Invalid token."})
    }
    next();
}

module.exports = authMiddleware;

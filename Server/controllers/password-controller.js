const User = require("../models/user-model");

//Reset Password Logic
const resetPwd = async (req, res)=>{
    try {
        const {currPwd, newPwd, confirmPwd} = req.body;
        const userData = req.user;
        const isPwdValid = await userData.PasswordCheck(currPwd);
        if(!isPwdValid){
            res.status(400).json({msg:"Invalid Password."});
        }
        if(newPwd!=confirmPwd){
            res.status(400).json({msg:"Passwords don't match."});
        }
        userData.password=newPwd;
        userData.save();
        res.status(200).json({msg:"Password changed successfully."});
    } catch (error) {
        res.status(500).json({msg:"Internal Server Error."});
        console.log("Error in Reset password",error);
    }
}

//Forgot Password Logic
const forgotpwd = async (req, res)=>{
    try {
        const {email} = req.body;
        const userData = req.user;
        if(userData.email!=email){
            return res.status(400).json({msg:"Please enter correct email"})
        }
        var token =await userData.generateToken();
        try {
            await sendResetMail(email,token);
            res.status(200).json({msg:"Email Sent Successfully."});
        } catch (error) {
            res.status(400).json({msg:"Unable to sent the email."});
        }
        
    } catch (error) {
        console.log(`error in Reset pwd route ${error}`);
    }
}
const jwt = require('jsonwebtoken');
const forgotPwdemail = async (req, res)=>{
    try {
        const resetToken = req.params.token;
        const resetEmail = req.params.email;
        const {newPwd,confirmNewPwd} = req.body;
        const dataVerify = jwt.verify(resetToken,process.env.JWT_KEY);
        if(dataVerify.email!=resetEmail){
            res.status(400).json({msg:"Invalid Link"});
        }
        if(newPwd!=confirmNewPwd){
            res.status(400).json({msg:"Passwords don't match"});
        }
        console.log("Valid URL!!");
        const user =await User.findOne({email:dataVerify.email});
        user.password=newPwd;
        user.save();
        res.status(200).json({});
    } catch (error) {
        res.status(400).json("Invalid Link");
        console.log("Error in reset Password.");
    }
}

module.exports = { resetPwd,forgotpwd, forgotPwdemail };

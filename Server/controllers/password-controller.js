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

module.exports = {resetPwd};

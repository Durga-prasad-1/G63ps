const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const userSchema = new mongoose.Schema({
    username:{
        type: String,
        required: true,
    },
    email:{
        type: String,
        required: true,
    },
    password:{
        type: String,
        required: true,
    },
});

//securing the password with bcrypt.js
userSchema.pre("save", async function (next){
    if(!this.isModified("password")){
        next();
    }

    try {
        const saltRound = await bcrypt.genSalt(10);
        const hash_password = await bcrypt.hash(this.password,saltRound);
        this.password = hash_password;
    } catch (error) {
        next(error);
    }
});

//json web token JWT
userSchema.methods.generateToken = async function(){
    try {
        return jwt.sign({
            userId: this._id.toString(),
            email: this.email,
            name: this.username,
            picture: null
        },
        process.env.JWT_KEY,
        {expiresIn: "16h"},
        )
    } catch (error) {
        console.error(error);
    }
}

//Checking for Password
userSchema.methods.PasswordCheck = async function(password){
    return bcrypt.compare(password,this.password);
};


const User = new mongoose.model("credential",userSchema);
module.exports = User;

const nodemailer =require("nodemailer");

const emailSender = async(email,token)=>{
    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth:{
            user:process.env.EMAIL_ID,
            pass:process.env.EMAIL_PASSWORD,
        }
    });
    const url = `http://localhost:5000/auth/${token}/${email}`;
    const options = {
        from:process.env.EMAIL_ID,
        to:email,
        subject: "Password Reset",
        text:`Please click the below link to Reset your password ${url}`,
        html:`<p>Please click the below link to reset your password</p><p>${url}</p>`
    }
    console.log(url);
    transporter.sendMail(options,(err,info)=>{
        if(err){
            console.error(err);
        }else{
            console.log(url);
            console.log("Email sent Successfully",info.response);
        }
        //res.status(200).json({msg:"Mail set successfully."})
    });
}

module.exports = emailSender;

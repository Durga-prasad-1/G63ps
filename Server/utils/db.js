const mongoose = require("mongoose");
const URI = process.env.MONGODB_URI;
const connectDb = async ()=>{
    try {
        await mongoose.connect(URI);
        console.log("DB Connected!!");
    } catch (error) {
        console.error("Error in DB");
        process.exit(0);
    }
}
module.exports = connectDb;
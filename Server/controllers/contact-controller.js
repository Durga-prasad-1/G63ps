const Contact = require("../models/contact-model");

const contactForm = async (req,res)=>{
    try {
        const response = req.body;
        await Contact.create(response);
        console.log("Contact message recieved.");
        return res.json({ message: "message send successfully" });
    } catch (error) {
        console.error(error);
        // return res.status(500).json({ message: "message not delivered" });   
    }
}

module.exports = contactForm;
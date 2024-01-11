const {z} = require("zod");

const contactSchema = z.object({
    username: z
        .string({required_error: "Username is must"})
        .trim()
        .min(3,{message: "Username must be atleast of 3 characters."})
        .max(50,{message: "Username must not be more than 50 characters."}),
    email: z
        .string({required_error: "Email is required."})
        .trim()
        .email({message: "Invalid email address"})
        .min(10,{message: "Email must be atleast 10 characters."})
        .max(255,{ message: "Email must not be more than 255 characters. "}),
    message: z
        .string({required_error: "Your meassage is required."})
        .min(20,{message: "Message should be atleast 20 characters."})
        .max(500,{message: "Message can't be more than 500 character."})
});

module.exports = contactSchema;
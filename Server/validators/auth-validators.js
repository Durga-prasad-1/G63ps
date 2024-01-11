const {z} = require("zod");

const signupSchema = z.object({
    username: z
        .string({required_error: "Name is required."})
        .trim()
        .min(3,{ msg: "username must be atleast 3 characters."})
        .max(50,{ msg: "Username must not be more than 50 characters."}),
    email: z
        .string({required_error: "Email is required."})
        .trim()
        .email({msg: "Invalid email address"})
        .min(10,{message: "Email must be atleast 10 characters."})
        .max(255,{ message: "Email must not be more than 255 characters. "}),
    password: z
        .string({required_error: "Password is must."})
        .min(8,{ message: "Password must be atleast 8 characters."})
        .max(20,{ message: "Password can't be greater than 20 characters."}),
    confirmPassword: z
        .string({required_error: "confirmPassword is must."})
        .min(8,{ message: "confirmPassword must be atleast 8 characters."})
        .max(20,{ message: "confirmPassword can't be greater than 20 characters."}), 
});

const loginSchema = z.object({
    username: z
        .string({required_error: "Username is required."})
        .trim()
        .min(3,{ message: "Username must be atleast 3 characters."})
        .max(50,{ message: "Username must not be more than 50 characters."}),
    password: z
        .string({required_error: "Password is must."})
        .min(8,{ message: "Password must be atleast 8 characters."})
        .max(20,{ message: "Password can't be greater than 20 characters."}),
});

module.exports = {signupSchema,loginSchema};
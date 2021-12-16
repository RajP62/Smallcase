require("dotenv").config();
const User = require("../models/user.model");

const jwt = require("jsonwebtoken");

const newToken = (user) => {
    return jwt.sign({ user }, process.env.JWT_ACCESS_KEY)
}

const register = async (req, res) => {
    try {
        // check the format of email and password(if you want a proper password)

        //check the email is already there in database
        let user = await User.find({ email: req.body.email }).lean().exec();

        // if yes then throw an error 
        if (user) return res.status(400).json({ status: "failed", message: "Provide different Email" })

        // else create the user and add hook to 
        // hash the provided password for security 

        user = await User.create(req.body);

        // create the token

        const token = newToken(user);

        // return user and token to the request

        return res.status(201).json({ user, token });

    } catch (e) {
        return res.status(500).json({ status: "failed", message: e.message });
    }
}

const login = async (req, res) => {
    try {
        // check the format of email first if not proper throw an error 

        // else check wheather email is present
        const user = await User.findOne({ email: req.body.email });

        // if not present throw an error 
        if (!user) return res.status(400).json({ status: "failed", message: "Provide a valid email address" })

        // else verify the password
        const match = await user.checkpassword(req.body.password);

        // if password not match throw an error
        if (!match) return res.status(400).json({ status: "failed", message: "Enter a valid email address and password" });

        // else create a new token 
        const token = newToken(user);

        // return the user and the token

        return res.status(201).json({ user, token });

    } catch (e) {
        return res.status(500).json({ status: "failed", message: e.message });
    }
}

module.exports = { register, login }
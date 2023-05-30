const express = require("express");
const { UserModel } = require('../model/flight.model');

const userRoute = express.Router();

userRoute.post("/register", async (req, res) => {

    try {
        const data = new UserModel(req.body);
        await data.save();
        res.status(201).json({ ok: true, msg: "Successfully Signed up" });
    } catch (error) {
        // console.log(error);
        res.status(400).json({ ok: false, msg: error.message });
    }

})


userRoute.post("/login", async (req, res) => {
    const { email, password } = req.body;
    try {
        let checked = await UserModel.find({ email, password })

        if (checked.length > 0) {

            res.status(201).json({ ok: true, msg: "Successfully Logged in " });
        } else {
            res.status(400).json({ ok: false, "msg":"wrong credentials" });
        }

    } catch (error) {
        // console.log(error);
        res.status(400).json({ ok: false, msg: error.message });
    }
})

module.exports = {
    userRoute
}
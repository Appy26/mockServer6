const express = require("express");
const { BookingModel } = require("../model/booking");
const bookingRoute = express.Router();

bookingRoute.post("/", async (req, res) => {
    try {
        const booking = new BookingModel({
            user: req.body.userId,
            flight: req.body.flightId
        })
        await booking.save();
        res.status(201).json({ ok: true, msg: "Successfully Booked" });
    } catch (error) {
        res.status(400).json({ ok: false, msg: error.message });
    }
})

bookingRoute.get("/dashboard", async (req, res) => {
    try {
        const bookingDetails = await BookingModel.find().populate('user flight');
        res.status(200).json({ ok: true, bookingDetails });
    } catch (error) {
        res.status(400).json({ ok: false, msg: error.message });
    }
})

module.exports = {
    bookingRoute
}
const experss = require('express');
const { FlightModel } = require("../model/flight.model");

const flightRoute = experss.Router();

flightRoute.get("/", async (req, res) => {
    try {
        const flights = await FlightModel.find();
        res.status(200).json({ ok: true, flights });
    } catch (error) {
        res.status(400).json({ ok: false, msg: error.message });
    }
})

flightRoute.get("/:id", async (req, res) => {
    try {
        const flight = await FlightModel.findById(req.params.id);
        res.status(200).json({ ok: true, flight });
    } catch (error) {
        res.status(400).json({ ok: false, msg: error.message });
    }
})

flightRoute.post("/", async (req, res) => {
    try {
        const Airflight = new FlightModel(req.body);
        await Airflight.save();
        res.status(201).json({ ok: true, "msg": " successsfully flight added" });
    } catch (error) {
        res.status(400).json({ ok: false, msg: error.message });
    }
})

flightRoute.patch("/:id", async (req, res) => {
    try {
        await FlightModel.findByIdAndUpdate(req.params.id, req.body);
        res.status(204).json({ ok: true, "msg": "Flight updated successsfully" });
    } catch (error) {
        res.status(400).json({ ok: false, msg: error.message });
    }
})

flightRoute.delete("/:id", async (req, res) => {
    try {
        await FlightModel.findByIdAndDelete(req.params.id);
        res.status(202).json({ ok: true, "msg": "Flight deleted successsfully" });
    } catch (error) {
        res.status(400).json({ ok: false, msg: error.message });
    }
})

module.exports = {
    flightRoute
}
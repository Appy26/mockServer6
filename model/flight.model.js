
const mongoose = require('mongoose');



const UserSchema = mongoose.Schema({
    name: String,
    email: String,
    password: String
});
const UserModel = mongoose.model("user", UserSchema);



const flightSchema = mongoose.Schema({
    airline: String,
    flightNo: String,
    departure: String,
    arrival: String,
    departureTime: Date,
    arrivalTime: Date,
    seats: Number,
    price: Number
});


const FlightModel = mongoose.model("flight", flightSchema);
module.exports = {
    UserModel, FlightModel
}


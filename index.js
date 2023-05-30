require("dotenv").config()
const express = require('express');
const mongoose = require('mongoose');
const { userRoute } = require("./routes/user.routes");
const { flightRoute } = require("./routes/flightRoutes");
const { bookingRoute } = require("./routes/bookingRoute")

const app = express();
app.use(express.json())

// Connect to MongoDB

app.get("/", (req, res) => {
    res.send("Hello World");
})

app.use("/user", userRoute);
app.use("/flight", flightRoute);
app.use("/booking", bookingRoute);



app.listen(3000, async () => {
    console.log('Server started on port 3000');

    try {
        await mongoose.connect(process.env.mongoUrl);
        console.log("database connected");
    } catch (error) {
        console.log(error.message);
    }


});

"use strict";

const express = require("express");
const sequelize = require('./sequelize');
require("./models/employee");

const app = express();

app.use(express.urlencoded( { extended: true}));
app.use("/api", require("./routes/employees"));

app.listen(7000, async () => {
    console.log("Server started on http://localhost:7000");
    try {
        await sequelize.authenticate();
        console.log("Connection has been established succesfully");
    } catch (err) {
        console.error("Unable to connect to the database: ", err);
    }
});


"use strict";

const express = require("express");
const departmentsRouter = require("./routes/departments");
const statusRouter = require("./routes/status");
require("dotenv").config();

const app = express();


// middleware that logs method and url of each request
const logger = (req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next();
};

app.use(logger);

app.use("/api", departmentsRouter);
app.use("/status", statusRouter);

// additional error handler
app.use((err, req, res, next) => {
     console.log(err.stack)
     res.status(500).json({ Error: "ERR" })
})

// error middleware
app.use((err, req, res, next) => {
    res.status(500).json({ Error: "Something broke!" })
})

app.set("port", process.env.PORT || 7000);

app.listen(app.get("port"), () => {
    console.log(`Server started on http://localhost:${app.get("port")}`);
});
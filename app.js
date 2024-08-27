require("dotenv").config();
const express = require("express");
const app = express();

app.get("/hello", (req, res) => {
    res.send("adya");
});

app.use(express.json());
app.use(require("./routes"));

module.exports = app;

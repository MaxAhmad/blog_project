const express = require("express");

const blogRoute = require("./routes/blogRoute");
const userRoute = require("./routes/userRoute");

const app = express();

app.use(express.json());

app.use("/blog", blogRoute);
app.use("/user", userRoute);

module.exports = app;

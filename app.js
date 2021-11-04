const express = require("express");
const {
	handlePSQLErrors,
	handleCustomErrors,
	handle500,
} = require("./controllers/errors.controllers");
const apiRouter = require("./routes/api.router.js");

const app = express();

app.use(express.json());

app.use("/api", apiRouter);

app.all("*", (req, res) => {
	res.status(404).send({ msg: "Invalid URL" });
});

app.use(handlePSQLErrors);
app.use(handleCustomErrors);
app.use(handle500);

module.exports = app;

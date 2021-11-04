const housesRouter = require("./houses.router");
const studentsRouter = require("./students.router");

const apiRouter = require("express").Router();

apiRouter.get("/", (req, res) => {
	res.status(200).send({ msg: "Welcome to the server!" });
});

apiRouter.use("/houses", housesRouter);
apiRouter.use("/students", studentsRouter);

module.exports = apiRouter;

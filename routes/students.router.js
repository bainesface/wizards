const { getAllStudents } = require("../controllers/students.controller");

const studentsRouter = require("express").Router();

studentsRouter.route("/").get(getAllStudents);

module.exports = studentsRouter;

const { fetchAllStudents } = require("../models/students.models");

exports.getAllStudents = (req, res) => {
	fetchAllStudents().then((students) => {
		res.status(200).send({ students });
	});
};

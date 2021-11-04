const db = require("../db");

exports.fetchAllStudents = () => {
	const query = "SELECT * FROM students;";
	return db.query(query).then(({ rows }) => {
		return rows;
	});
};

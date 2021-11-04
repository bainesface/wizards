const db = require("../db");

exports.fetchAllHouses = () => {
	const query = "SELECT * FROM houses;";
	return db.query(query).then(({ rows }) => {
		return rows;
	});
};

exports.fetchHouseById = (id) => {
	return db
		.query("SELECT * FROM houses WHERE house_id = $1;", [id])
		.then(({ rows }) => {
			const house = rows[0];
			if (!house) return Promise.reject({ status: 404, msg: "Not found" });
			return house;
		});
};

exports.insertHouse = ({ house_name, founder, animal }) => {
	return db
		.query(
			"INSERT INTO houses (house_name, founder, animal) VALUES ($1,$2,$3) RETURNING *;",
			[house_name, founder, animal]
		)
		.then(({ rows }) => {
			return rows[0];
		});
};

exports.removeHouse = (id) => {
	return db.query("DELETE FROM houses WHERE house_id = $1", [id]);
};

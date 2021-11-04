const {
	fetchAllHouses,
	fetchHouseById,
	insertHouse,
	removeHouse,
} = require("../models/houses.models.js");

exports.getAllHouses = (req, res) => {
	fetchAllHouses().then((houses) => {
		res.status(200).send({ houses });
	});
};

exports.getHouseById = (req, res, next) => {
	const { house_id } = req.params;

	fetchHouseById(house_id)
		.then((house) => {
			res.status(200).send({ house });
		})
		.catch((err) => {
			next(err);
		});
};

exports.postHouse = (req, res) => {
	const newHouse = req.body;
	insertHouse(newHouse).then((house) => {
		res.status(201).send({ house });
	});
};

exports.deleteHouseById = (req, res, next) => {
	const { house_id } = req.params;

	removeHouse(house_id).then(() => {
		res.sendStatus(204);
	});
};

const {
	getAllHouses,
	postHouse,
	getHouseById,
	deleteHouseById,
} = require("../controllers/houses.controllers");

const housesRouter = require("express").Router();

housesRouter.route("/").get(getAllHouses).post(postHouse);
housesRouter.route("/:house_id").get(getHouseById).delete(deleteHouseById);

module.exports = housesRouter;

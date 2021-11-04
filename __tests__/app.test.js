const request = require("supertest");
const app = require("../app");
const db = require("../db");

afterAll(() => {
	return db.end();
});

describe("app", () => {
	test("status: 404 responds with a not found error message when passed a bad path", () => {
		return request(app)
			.get("/bad path")
			.expect(404)
			.then(({ body }) => {
				expect(body.msg).toBe("Invalid URL");
			});
	});
	describe("/api/houses", () => {
		describe("GET", () => {
			test("status:200 responds with an array of house objects", () => {
				return request(app)
					.get("/api/houses")
					.expect(200)
					.then(({ body }) => {
						expect(body.houses).toHaveLength(4);
						body.houses.forEach((house) => {
							expect(house).toMatchObject({
								house_id: expect.any(Number),
								house_name: expect.any(String),
								founder: expect.any(String),
								animal: expect.any(String),
							});
						});
					});
			});
		});
		describe("POST", () => {
			test("status:201 responds with freshly posted house object", () => {
				const newHouse = {
					house_name: "Bartledor",
					founder: "David",
					animal: "Moose",
				};

				return request(app)
					.post("/api/houses")
					.send(newHouse)
					.expect(201)
					.then(({ body: { house } }) => {
						expect(house).toEqual({ house_id: 5, ...newHouse });
					});
			});
		});
	});
	describe("/api/houses/:house_id", () => {
		describe("GET", () => {
			test("status:200 responds with the correct house object", () => {
				return request(app)
					.get("/api/houses/2")
					.expect(200)
					.then(({ body }) => {
						expect(body.house).toEqual({
							house_id: 2,
							house_name: "Slytherin",
							founder: "Salazar Slytherin",
							animal: "Serpent",
						});
					});
			});
			test("status:400 responds with an invalid input error when passed an invalid house id", () => {
				return request(app)
					.get("/api/houses/reallysilly")
					.expect(400)
					.then(({ body }) => {
						expect(body.msg).toBe("Invalid input");
					});
			});
			test("status: 404 responds with a not found error when the house does not exist", () => {
				return request(app)
					.get("/api/houses/999")
					.expect(404)
					.then(({ body }) => {
						console.log(body);
						expect(body.msg).toBe("Not found");
					});
			});
		});
		describe("DELETE", () => {
			test("status: 204 deletes the relevant house", () => {
				console.log("hello");
				return request(app)
					.delete("/api/houses/5")
					.expect(204)
					.then(() => {
						return request(app).get("/api/houses").expect(200);
					})
					.then(({ body: { houses } }) => {
						expect(houses).toHaveLength(4);
					});
			});
		});
	});
	describe("/api/students", () => {
		describe("GET", () => {
			test("status:200 responds with an array of student objects", () => {
				return request(app)
					.get("/api/students")
					.expect(200)
					.then(({ body }) => {
						expect(body.students).toHaveLength(7);
						body.students.forEach((student) => {
							expect(student).toMatchObject({
								student_id: expect.any(Number),
								student_name: expect.any(String),
								house_id: expect.any(Number),
							});
						});
					});
			});
		});
	});
});

const app = require("./app");
const supertest = require("supertest");
const request = supertest(app);

describe("/test endpoint", () => {
  test("Debe devolver un 'Hola Mundo'", async () => {
    const response = await request.get("/");
    const body = response.body; 
    expect(response.status).toBe(200);
    expect(body.message).toBe("¡Hola mundo!");
  });
});

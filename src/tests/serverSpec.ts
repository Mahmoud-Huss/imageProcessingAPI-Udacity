/* eslint-disable no-undef */
import supertest from "supertest";
import app from "../server";

const req = supertest(app);

describe("Image API endpoints", function () {
  describe("GET /", function () {
    it("gets the api endpoint /", async () => {
      const res = await req.get("/");
      expect(res.status).toBe(200);
    });
    it("check 404 error for incorrect endpoint", async () => {
      const res = await req.get("/imaaage");
      expect(res.status).toBe(404);
    });
  });
  describe("GET /image", function () {
    it("gets the api endpoint /image", async () => {
      const res = await req.get("/image");
      expect(res.status).toBe(200);
    });
  });
});

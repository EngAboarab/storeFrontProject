"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const supertest_1 = __importDefault(require("supertest"));
const app = express_1.default();
const firstName = "Moahmed";
const lastName = "Aboarab";
const password = "password";
const id = 1;
describe('testing of the users endpoints using supertest', () => {
    it("the create endpoint returns status 200", () => {
        supertest_1.default(app)
            .get("/users/create")
            .set({ firstName, lastName, password })
            .expect(200);
    });
    it("the update endpoint returns status 200", () => {
        supertest_1.default(app)
            .get("/users/update")
            .set({ 'Authorization': "abc123", firstName, lastName, id })
            .expect(200);
    });
    it("the show endpoint returns status 200", () => {
        supertest_1.default(app)
            .get("/users/show")
            .set({ 'Authorization': "abc123", id })
            .expect(200);
    });
    it("the index endpoint returns status 200", () => {
        supertest_1.default(app)
            .get("/users/index")
            .set({ 'Authorization': "abc123" })
            .expect(200);
    });
});

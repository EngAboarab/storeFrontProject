"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const supertest_1 = __importDefault(require("supertest"));
const app = express_1.default();
const userId = 1;
const orderID = 1;
describe('testing of the order endpoints using supertest', () => {
    it("the create endpoint returns status 200", () => {
        supertest_1.default(app)
            .get("/orders/create")
            .set({ 'Authorization': "abc123", userId, orderID })
            .expect(200);
    });
    it("the update endpoint returns status 200", () => {
        supertest_1.default(app)
            .get("/orders/update")
            .set({ 'Authorization': "abc123", userId, orderID })
            .expect(200);
    });
    it("the show endpoint returns status 200", () => {
        supertest_1.default(app)
            .get("/orders/show")
            .set({ 'Authorization': "abc123", userId, orderID })
            .expect(200);
    });
    it("the index endpoint returns status 200", () => {
        supertest_1.default(app)
            .get("/orders/index")
            .set({ 'Authorization': "abc123", userId, orderID })
            .expect(200);
    });
    it("the showLast endpoint returns status 200", () => {
        supertest_1.default(app)
            .get("/orders/showLast")
            .set({ 'Authorization': "abc123", userId, orderID })
            .expect(200);
    });
});

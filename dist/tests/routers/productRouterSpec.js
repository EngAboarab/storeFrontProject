"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const supertest_1 = __importDefault(require("supertest"));
const app = express_1.default();
const userId = 1;
const product_id = 1;
const product_name = "train";
const price = 200;
const category = "toy";
const id = 1;
describe('testing of the products endpoints using supertest', () => {
    it("the create endpoint returns status 200", () => {
        supertest_1.default(app)
            .get("/products/create")
            .set({ 'Authorization': "abc123", product_name, price, category })
            .expect(200);
    });
    it("the update endpoint returns status 200", () => {
        supertest_1.default(app)
            .get("/products/update")
            .set({ 'Authorization': "abc123", product_name, price, category, id })
            .expect(200);
    });
    it("the index endpoint returns status 200", () => {
        supertest_1.default(app)
            .get("/products/index")
            .expect(200);
    });
    it("the show endpoint returns status 200", () => {
        supertest_1.default(app)
            .get("/products/show")
            .set({ product_id })
            .expect(200);
    });
});

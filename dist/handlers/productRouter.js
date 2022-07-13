"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const productModel_1 = require("../models/productModel");
const auth_1 = require("./auth");
const store = new productModel_1.ProductStore();
const index = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const products = yield store.index();
        res.status(200).json(products);
    }
    catch (err) {
        throw new Error(`there was an error:${err}`);
    }
});
const show = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const product_id = req.query.id;
        const product = yield store.show(product_id);
        res.status(200).json(product);
    }
    catch (err) {
        throw new Error(`there was an error:${err}`);
    }
});
const create = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const product_name = req.query.name;
        const price = req.query.price;
        const category = req.query.category;
        const product = yield store.create(product_name, parseInt(price), category);
        res.status(200).json(product);
    }
    catch (err) {
        throw new Error(`there was an error:${err}`);
    }
});
const update = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const product_name = req.query.name;
        const price = req.query.price;
        const category = req.query.category;
        const id = req.query.id;
        const product = yield store.update(product_name, parseInt(price), category, parseInt(id));
        res.status(200).json(product);
    }
    catch (err) {
        throw new Error(`there was an error:${err}`);
    }
});
const productRouter = (app) => {
    app.get('/products', index);
    app.post('/products/create', auth_1.authority, create);
    app.get('/products/show', show);
    app.put('/products/update', auth_1.authority, update);
};
exports.default = productRouter;

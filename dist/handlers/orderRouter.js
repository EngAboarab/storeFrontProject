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
const ordersModel_1 = require("../models/ordersModel");
const auth_1 = require("./auth");
const store = new ordersModel_1.OrderStore();
const index = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const userId = req.query.userId;
        const orders = yield store.index(userId);
        res.status(200).json(orders);
    }
    catch (err) {
        throw new Error(`there was an error:${err}`);
    }
});
const create = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    try {
        const product_id = req.query.productId;
        const product_quantity = req.query.quantity;
        const user_id = req.query.userId;
        const orderCompletness = (_a = req.query.orderCompletness) !== null && _a !== void 0 ? _a : false;
        const order = yield store.create(product_id, product_quantity, user_id, orderCompletness);
        res.status(200).json(order);
    }
    catch (err) {
        throw new Error(`there was an error:${err}`);
    }
});
const update = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // console.log(req.params)
        // const product_id=req.query.productId as unknown as Number
        // const product_quantity=req.query.quantity as unknown as Number;
        const id = req.query.id;
        const orderCompletness = req.query.orderCompletness;
        const order = yield store.update(orderCompletness, id);
        res.status(200).json(order);
    }
    catch (err) {
        throw new Error(`there was an error:${err}`);
    }
});
const showLast = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const userId = req.query.userId;
        const orders = yield store.index(userId);
        const lastOrder = orders[orders.length - 1];
        res.status(200).json(lastOrder);
    }
    catch (err) {
        throw new Error(`there was an error:${err}`);
    }
});
const show = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const userId = req.query.userId;
        const orderId = req.query.id;
        const order = yield store.show(userId, orderId);
        res.status(200).json(order);
    }
    catch (err) {
        throw new Error(`there was an error:${err}`);
    }
});
const orderRouter = (app) => {
    app.get('/orders', auth_1.authority, index);
    app.get('/orders/showLast', auth_1.authority, showLast);
    app.get('/orders/show', auth_1.authority, show);
    app.post('/orders/create', auth_1.authority, create);
    app.patch('/orders/update', auth_1.authority, update);
};
exports.default = orderRouter;

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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const userModel_1 = require("../models/userModel");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const auth_1 = require("./auth");
require("dotenv/config");
const store = new userModel_1.UserStore();
// dotenv.config()
const index = (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const users = yield store.index();
    res.json(users);
});
const show = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.query.id;
    const user = yield store.show(id);
    res.json(user);
});
const create = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // console.log(req.params)
    const first_name = req.query.firstName;
    const last_name = req.query.lastName;
    const password = req.query.password;
    const user = yield store.create(first_name, last_name, password);
    //create a token
    const token = jsonwebtoken_1.default.sign({ user: user }, process.env.TOKEN_SECRET);
    res.json(token);
});
const update = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const first_name = req.query.firstName;
    const last_name = req.query.lastName;
    const id = req.query.id;
    const user = yield store.update(first_name, last_name, parseInt(id));
    res.json(user);
});
const userRouter = (app) => {
    app.get('/users', auth_1.authority, index);
    app.get('/users/show', auth_1.authority, show);
    app.post('/users/create', create);
    app.put('/users/update', auth_1.authority, update);
};
exports.default = userRouter;

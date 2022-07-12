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
exports.authority = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
require("dotenv/config");
const authority = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const webAuthToken = req.headers.authorization;
    const userAuthToken = webAuthToken.split(' ')[1];
    try {
        const token = jsonwebtoken_1.default.verify(userAuthToken, process.env.TOKEN_SECRET);
    }
    catch (err) {
        throw new Error(`the user is not authorized:${err}`);
    }
    next();
    return;
});
exports.authority = authority;

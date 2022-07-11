"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var express_1 = __importDefault(require("express"));
var body_parser_1 = __importDefault(require("body-parser"));
var userRouter_1 = __importDefault(require("./handlers/userRouter"));
var productRouter_1 = __importDefault(require("./handlers/productRouter"));
var orderRouter_1 = __importDefault(require("./handlers/orderRouter"));
var app = express_1["default"]();
var address = "0.0.0.0:3000";
app.use(body_parser_1["default"].json());
app.get('/', function (req, res) {
    res.send('Hello World!');
});
userRouter_1["default"](app);
productRouter_1["default"](app);
orderRouter_1["default"](app);
app.listen(3000, function () {
    console.log("starting app on: " + address);
});

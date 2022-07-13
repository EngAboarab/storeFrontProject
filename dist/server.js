"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const userRouter_1 = __importDefault(require("./handlers/userRouter"));
const productRouter_1 = __importDefault(require("./handlers/productRouter"));
const orderRouter_1 = __importDefault(require("./handlers/orderRouter"));
const cors_1 = __importDefault(require("cors"));
const app = express_1.default();
const address = "0.0.0.0:3000";
app.use(cors_1.default());
// app.use(bodyParser.json())
app.get('/', function (req, res) {
    res.send('Hello World!');
});
userRouter_1.default(app);
productRouter_1.default(app);
orderRouter_1.default(app);
app.listen(3000, function () {
    console.log(`starting app on: ${address}`);
});

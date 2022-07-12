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
exports.ProductStore = void 0;
const database_1 = __importDefault(require("../database"));
class ProductStore {
    index() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const conn = yield database_1.default.connect();
                const sql = 'SELECT * FROM products';
                const results = yield conn.query(sql);
                conn.release();
                return results.rows;
            }
            catch (err) {
                throw new Error(`there was an error:${err}`);
            }
        });
    }
    show(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const conn = yield database_1.default.connect();
                const sql = 'SELECT * FROM products WHERE id=($1) ';
                const results = yield conn.query(sql, [id]);
                conn.release();
                return results.rows[0];
            }
            catch (err) {
                throw new Error(`there was an error:${err}`);
            }
        });
    }
    create(product_name, price, category) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const conn = yield database_1.default.connect();
                const sql = 'INSERT INTO products (product_name,price,category) VALUES ($1,$2,$3) RETURNING *';
                const results = yield conn.query(sql, [product_name, price, category]);
                conn.release();
                return results.rows[0];
            }
            catch (err) {
                throw new Error(`there was an error:${err}`);
            }
        });
    }
    update(product_name, price, category, id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const conn = yield database_1.default.connect();
                const sql = 'UPDATE products SET product_name=($1),price=($2),category= ($3) WHERE id=($4) RETURNING *';
                const results = yield conn.query(sql, [product_name, price, category, id]);
                conn.release();
                return results.rows[0];
            }
            catch (err) {
                throw new Error(`there was an error:${err}`);
            }
        });
    }
}
exports.ProductStore = ProductStore;

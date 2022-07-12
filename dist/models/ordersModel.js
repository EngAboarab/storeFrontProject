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
exports.OrderStore = void 0;
const database_1 = __importDefault(require("../database"));
class OrderStore {
    index(user_id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const conn = yield database_1.default.connect();
                const sql = 'SELECT order_id,product_name,category,price,quantity FROM products JOIN order_product ON order_product.product_id=products.id JOIN orders ON orders.id=order_product.product_id WHERE user_id=($1) ';
                const orders = yield conn.query(sql, [user_id]);
                conn.release();
                return orders.rows;
            }
            catch (err) {
                throw new Error(`there was an error:${err}`);
            }
        });
    }
    show(user_id, order_id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const conn = yield database_1.default.connect();
                const sql = 'SELECT order_id,product_name,category,price,quantity FROM products JOIN order_product ON order_product.product_id=products.id JOIN orders ON orders.id=order_product.product_id WHERE order_id=($1) AND user_id=($2)';
                const results = yield conn.query(sql, [order_id, user_id]);
                conn.release();
                return results.rows[0];
            }
            catch (err) {
                throw new Error(`there was an error:${err}`);
            }
        });
    }
    create(product_id, product_quantity, user_id, order_completness) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                //insert the new order in the orders table 
                const conn = yield database_1.default.connect();
                const order_sql = 'INSERT INTO orders (user_id,order_completeness) VALUES ($1,$2) RETURNING *';
                const order_results = yield conn.query(order_sql, [user_id, order_completness]);
                const order = order_results.rows[0];
                //    insert the order product in the order-product table
                const product_sql = 'INSERT INTO order_product (order_id,product_id,quantity) VALUES ($1,$2,$3) RETURNING *';
                const product_results = yield conn.query(product_sql, [order.id, product_id, product_quantity]);
                const product = product_results.rows[0];
                conn.release();
                return Object.assign(Object.assign({}, order), { product });
            }
            catch (err) {
                throw new Error(`there was an error:${err}`);
            }
        });
    }
    update(order_completness, id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                //insert the new order in the orders table 
                const conn = yield database_1.default.connect();
                const order_sql = 'UPDATE  orders SET order_completeness=($1) WHERE id=($2)RETURNING *';
                const order_results = yield conn.query(order_sql, [order_completness, id]);
                //    const order= order_results.rows[0]
                // //    insert the order product in the order-product table
                //     const product_sql='INSERT INTO order_product (order_id,product_id,quantity) VALUES ($1,$2,$3) RETURNING *'
                //     const product_results = await conn.query(product_sql,[order.id,product_id,product_quantity]);
                //     const product=product_results.rows[0]
                //    conn.release();
                return order_results.rows[0];
            }
            catch (err) {
                throw new Error(`there was an error:${err}`);
            }
        });
    }
}
exports.OrderStore = OrderStore;

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
exports.UserStore = void 0;
const database_1 = __importDefault(require("../database"));
const bcrypt_1 = __importDefault(require("bcrypt"));
class UserStore {
    index() {
        return __awaiter(this, void 0, void 0, function* () {
            const conn = yield database_1.default.connect();
            const sql = 'SELECT * FROM users';
            const results = yield conn.query(sql);
            conn.release();
            return results.rows;
        });
    }
    show(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const conn = yield database_1.default.connect();
            const sql = 'SELECT * FROM users WHERE id=($1)';
            const results = yield conn.query(sql, [id]);
            conn.release();
            return results.rows[0];
        });
    }
    create(first_name, last_name, password) {
        return __awaiter(this, void 0, void 0, function* () {
            //first hashing the password
            const hashedPassword = bcrypt_1.default.hashSync(password.toString(), 10);
            const conn = yield database_1.default.connect();
            const sql = 'INSERT INTO users (first_name,last_name,user_password) VALUES ($1,$2,$3)';
            const results = yield conn.query(sql, [first_name, last_name, hashedPassword]);
            conn.release();
            return results.rows[0];
        });
    }
}
exports.UserStore = UserStore;

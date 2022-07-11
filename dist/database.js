"use strict";
exports.__esModule = true;
var pg_1 = require("pg");
require("dotenv/config");
var _a = process.env, POSTGRES_HOST = _a.POSTGRES_HOST, POSTGRES_DB_DEV = _a.POSTGRES_DB_DEV, POSTGRES_DB_TEST = _a.POSTGRES_DB_TEST, POSTGRES_USER = _a.POSTGRES_USER, POSTGRES_PASSWORD = _a.POSTGRES_PASSWORD, ENV = _a.ENV;
// console.log(ENV)
// let client 
// if (ENV==='test'){
//     client = new Pool ({
//         host:POSTGRES_HOST,
//         database:POSTGRES_DB_TEST,
//         user:POSTGRES_USER,
//         password:POSTGRES_PASSWORD
// }
//     )
// }
// if(ENV==='dev'){
//     client = new Pool ({
//         host:POSTGRES_HOST,
//         database:POSTGRES_DB_DEV,
//         user:POSTGRES_USER,
//         password:POSTGRES_PASSWORD
//     })
// }
var client = new pg_1.Pool({
    host: POSTGRES_HOST,
    database: ENV === "dev" ? POSTGRES_DB_DEV : POSTGRES_DB_TEST,
    user: POSTGRES_USER,
    password: POSTGRES_PASSWORD
});
exports["default"] = client;

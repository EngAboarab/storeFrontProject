"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pg_1 = require("pg");
require("dotenv/config");
const { POSTGRES_HOST, POSTGRES_DB_DEV, POSTGRES_DB_TEST, POSTGRES_USER, POSTGRES_PASSWORD, ENV } = process.env;
const client = new pg_1.Pool({
    host: POSTGRES_HOST,
    database: ENV === "dev" ? POSTGRES_DB_DEV : POSTGRES_DB_TEST,
    user: POSTGRES_USER,
    password: POSTGRES_PASSWORD
});
exports.default = client;
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

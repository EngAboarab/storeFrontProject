import {Pool} from 'pg'
import  'dotenv/config'



const {POSTGRES_HOST,POSTGRES_DB_DEV,POSTGRES_DB_TEST,POSTGRES_USER,POSTGRES_PASSWORD,ENV}=process.env

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


const  client = new Pool ({
    host:POSTGRES_HOST,
    database:ENV==="dev"?POSTGRES_DB_DEV:POSTGRES_DB_TEST,
    user:POSTGRES_USER,
    password:POSTGRES_PASSWORD
})


export default client;
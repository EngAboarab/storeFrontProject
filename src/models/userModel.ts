import client from "../database";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

export type User={
    id:Number,
    first_name:String,
    last_name:String,
    user_password:String

}


export class UserStore{
    
    async index():Promise<User[]>{
        try{   
            const conn= await client.connect();
            const sql= 'SELECT * FROM users';
            const results = await conn.query(sql);
            conn.release();
            return results.rows;
        }catch(err){
            throw new Error (`there was an error:${err}`)
        }
        
    }


    async show(id:Number):Promise<User>{
        try{    
            const conn= await client.connect();
            const sql= 'SELECT * FROM users WHERE id=($1)';
            const results = await conn.query(sql,[id]);
            conn.release();
            return results.rows[0];
        }catch(err){
            throw new Error (`there was an error:${err}`)
        }
        
    }
    async create(first_name:String,last_name:String,password:String):Promise<User>{

      
        try{
        //first hashing the password
        const hashedPassword= bcrypt.hashSync(password.toString(),10)

       

       
            const conn= await client.connect();
            const sql= 'INSERT INTO users (first_name,last_name,user_password) VALUES ($1,$2,$3)RETURNING *';
            const results = await conn.query(sql,[first_name,last_name,hashedPassword ]);
            conn.release();
            
            return results.rows[0];
        }catch(err){
            throw new Error (`there was an error:${err}`)
        }
        
        }

        async update(first_name:String,last_name:String,id:Number):Promise<User>{

            try{
                const conn= await client.connect();
                const sql= 'UPDATE users SET first_name=($1),last_name=($2)  WHERE id=($3) RETURNING *';
                const results = await conn.query(sql,[first_name,last_name,id ]);
                conn.release();
                
                return results.rows[0];
            }catch(err){
                throw new Error (`there was an error:${err}`)
            }
            
            }

    
    }


    


   

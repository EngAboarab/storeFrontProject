import client from "../database";

export type Product={
    id:Number,
    product_name:String,
    price:Number,
    category:String

}


export class ProductStore{
    
    async index():Promise<Product[]>{
        try{
            const conn= await client.connect();
            const sql= 'SELECT * FROM products';
            const results = await conn.query(sql);
            conn.release();
            return results.rows;
        }catch(err){
            throw new Error (`there was an error:${err}`)
        }
            
    
      
    }


    async show(id:Number):Promise<Product>{
         try{
            const conn= await client.connect();
            const sql= 'SELECT * FROM products WHERE id=($1) ';
            const results = await conn.query(sql,[id]);
            conn.release();
            return results.rows[0];
        }catch(err){
            throw new Error (`there was an error:${err}`)
        }
        
    }
   
    
    async create(product_name:String,price:Number,category:String):Promise<Product>{
        try{
            const conn= await client.connect();
            const sql= 'INSERT INTO products (product_name,price,category) VALUES ($1,$2,$3) RETURNING *';
            const results = await conn.query(sql,[product_name,price,category]);
            conn.release();
            return results.rows[0];
        }catch(err){
            throw new Error (`there was an error:${err}`)
        }
       
    }
    async update(product_name:String,price:Number,category:String,id:Number):Promise<Product>{
        try{
            const conn= await client.connect();
            const sql= 'UPDATE products SET product_name=($1),price=($2),category= ($3) WHERE id=($4) RETURNING *';
            const results = await conn.query(sql,[product_name,price,category,id]);
            conn.release();
            return results.rows[0];
        }catch(err){
            throw new Error (`there was an error:${err}`)
        }
       
    }

}

    


   

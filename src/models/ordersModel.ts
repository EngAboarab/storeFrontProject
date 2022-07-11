import client from "../database"


export type Order={
    product_id:Number,
    product_quantity:Number,
    user_id:Number,
    orderCompletness:Boolean
}
 
export class OrderStore{
    async index(user_id:Number):Promise<Order[]>{
        
        try{
            const conn= await client.connect()
            const sql= 'SELECT * FROM orders WHERE user_id=($1)'
            const orders= await conn.query(sql,[user_id])
            conn.release()
            return orders.rows;
        }catch(err){
            throw new Error (`there was an error:${err}`)
        }
    }
    async show(user_id:Number,order_id:Number):Promise<Order>{
        
        try{
           const conn= await client.connect();
           const sql= 'SELECT * FROM orders WHERE id=($1) AND user_id=($2)';
           const results = await conn.query(sql,[order_id,user_id]);
           conn.release();
           
           return results.rows[0];
       }catch(err){
           throw new Error (`there was an error:${err}`)
       }
       
   }
   async create(product_id:Number,product_quantity:Number,user_id:Number,order_completness:Boolean):Promise<Order>{
       try{
           const conn= await client.connect();
           const sql= 'INSERT INTO orders (product_id,product_quantity,user_id,order_completness) VALUES ($1,$2,$3,$4)';
           const results = await conn.query(sql,[product_id,product_quantity,user_id,order_completness]);
           conn.release();
           return results.rows[0];
       }catch(err){
           throw new Error (`there was an error:${err}`)
       }
      
   }
}
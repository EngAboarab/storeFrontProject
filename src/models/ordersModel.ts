import client from "../database"


export type Order={
    user_id:Number,
    orderCompletness:Boolean
}
export type OrderProuct={
    order_id:Number,
    product_id:Number,
    quantity:Number
}
 
export class OrderStore{
    async index(user_id:Number):Promise<Order[]>{
        
        try{
            const conn= await client.connect()
            const sql= 'SELECT order_id,product_name,category,price,quantity FROM products JOIN order_product ON order_product.product_id=products.id JOIN orders ON orders.id=order_product.product_id WHERE user_id=($1) '
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
           const sql= 'SELECT order_id,product_name,category,price,quantity FROM products JOIN order_product ON order_product.product_id=products.id JOIN orders ON orders.id=order_product.product_id WHERE order_id=($1) AND user_id=($2)';
           const results = await conn.query(sql,[order_id,user_id]);
           conn.release();
           
           return results.rows[0];
       }catch(err){
           throw new Error (`there was an error:${err}`)
       }
       
   }
   async create(product_id:Number,product_quantity:Number,user_id:Number,order_completness:Boolean):Promise<Order>{
       try{
           //insert the new order in the orders table 
           const conn= await client.connect();
           const order_sql= 'INSERT INTO orders (user_id,order_completeness) VALUES ($1,$2) RETURNING *';
           const order_results = await conn.query(order_sql,[user_id,order_completness]);
           
           const order= order_results.rows[0]
          

        //    insert the order product in the order-product table
            const product_sql='INSERT INTO order_product (order_id,product_id,quantity) VALUES ($1,$2,$3) RETURNING *'
            const product_results = await conn.query(product_sql,[order.id,product_id,product_quantity]);
            const product=product_results.rows[0]
           conn.release();
           return {...order,product};
        
       }catch(err){
           throw new Error (`there was an error:${err}`)
       }
      
   }
   async update(order_completness:Boolean,id:Number):Promise<Order>{
       try{
           //insert the new order in the orders table 
           const conn= await client.connect();
           const order_sql= 'UPDATE  orders SET order_completeness=($1) WHERE id=($2)RETURNING *';
           const order_results = await conn.query(order_sql,[order_completness,id]);
           
        //    const order= order_results.rows[0]
          

        // //    insert the order product in the order-product table
        //     const product_sql='INSERT INTO order_product (order_id,product_id,quantity) VALUES ($1,$2,$3) RETURNING *'
        //     const product_results = await conn.query(product_sql,[order.id,product_id,product_quantity]);
        //     const product=product_results.rows[0]
        //    conn.release();
           return order_results.rows[0];
        
       }catch(err){
           throw new Error (`there was an error:${err}`)
       }
      
   }
}
import { Order,OrderStore } from "../models/ordersModel";
import express,{Request,Response} from 'express'
import { authority } from "./auth";

const store=new OrderStore()

    const index=async(req:Request,res:Response)=>{
        try{
            const userId=req.query.userId as unknown as Number
            const orders:Order[]=await store.index(userId);
            res.status(200).json(orders);
        }catch(err){
            throw new Error (`there was an error:${err}`)
        }

}
const create=async(req:Request,res:Response)=>{

    try{
        const product_id=req.query.productId as unknown as Number
        const product_quantity=req.query.quantity as unknown as Number;
        const user_id=req.query.userId as unknown as Number;
        const orderCompletness= (req.query.orderCompletness as unknown) as boolean??false;

    
        const order=await store.create(product_id,product_quantity,user_id,orderCompletness)
        
        res.status(200).json(order)
    }catch(err){
        throw new Error (`there was an error:${err}`)
}

}

const update=async(req:Request,res:Response)=>{
    try{
    // console.log(req.params)
    // const product_id=req.query.productId as unknown as Number
    // const product_quantity=req.query.quantity as unknown as Number;

        const id=req.query.id as unknown as Number;
        const orderCompletness= (req.query.orderCompletness as unknown) as boolean;
        

    
        const order=await store.update(orderCompletness,id)
        
        res.status(200).json(order)
    }catch(err){
        throw new Error (`there was an error:${err}`)
    }
 
}
const showLast=async(req:Request,res:Response)=>{
    try{
        const userId=req.query.userId as unknown as Number
        const orders:Order[]=await store.index(userId);
        
        const lastOrder:Order= orders[orders.length-1]
        res.status(200).json(lastOrder);
    }catch(err){
        throw new Error (`there was an error:${err}`)
}
}

const show=async(req:Request,res:Response)=>{
    try{
        const userId=req.query.userId as unknown as Number
        const orderId=req.query.id as unknown as Number
        const order:Order=await store.show(userId,orderId);
        res.status(200).json(order);
    }catch(err){
        throw new Error (`there was an error:${err}`)
    }
}

const orderRouter=(app:express.Application)=>{
    app.get('/orders',authority,index)
    app.get('/orders/showLast',authority,showLast);
    app.get('/orders/show',authority,show);
    app.post('/orders/create',authority,create);
    app.patch('/orders/update',authority,update)
}


export default orderRouter
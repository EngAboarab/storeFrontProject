import { Product,ProductStore } from "../models/productModel";
import express,{Request,Response} from 'express'
import { authority } from "./auth";

const store= new ProductStore()
const index=async(req:Request,res:Response)=>{
    const products= await store.index()
    res.json(products)
}
const show=async(req:Request,res:Response)=>{
   
    const product_id=(req.query.id as unknown)as Number
    
    const product= await store.show(product_id)
    res.json(product)
}
const create=async(req:Request,res:Response)=>{
    const product_name=req.query.name as string
    const price=req.query.price as string
    const category=req.query.category as string
    const product= await store.create(product_name,parseInt(price),category);
    res.json(product)
}
const update=async(req:Request,res:Response)=>{
    const product_name=req.query.name as string
    const price=req.query.price as string
    const category=req.query.category as string
    const id=req.query.id as string
    const product= await store.update(product_name,parseInt(price),category,parseInt(id));
    res.json(product)
}




const productRouter=(app:express.Application)=>{
    app.get('/products',authority,index)
    app.get('/products/create',authority,create)
    app.post('/products/show',authority,show)
    app.put('/products/update',authority,update)
}

export default productRouter;
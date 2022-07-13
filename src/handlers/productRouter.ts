import { Product,ProductStore } from "../models/productModel";
import express,{Request,Response} from 'express'
import { authority } from "./auth";

const store= new ProductStore()

const index=async(req:Request,res:Response)=>{
    try{
        const products= await store.index()
        res.status(200).json(products)
    }catch(err){
        throw new Error (`there was an error:${err}`)
    }
}
const show=async(req:Request,res:Response)=>{
    try{
        const product_id=(req.query.id as unknown)as Number
        
        const product= await store.show(product_id)
        res.status(200).json(product)
    }catch(err){
        throw new Error (`there was an error:${err}`)
    }
}


const create=async(req:Request,res:Response)=>{
    try{
        const product_name=req.query.name as string
        const price=req.query.price as string
        const category=req.query.category as string
        const product= await store.create(product_name,parseInt(price),category);
        res.status(200).json(product)
    }catch(err){
        throw new Error (`there was an error:${err}`)
    }
}
const update=async(req:Request,res:Response)=>{
    try{
        const product_name=req.query.name as string
        const price=req.query.price as string
        const category=req.query.category as string
        const id=req.query.id as string
        const product= await store.update(product_name,parseInt(price),category,parseInt(id));
        res.status(200).json(product)
    }catch(err){
        throw new Error (`there was an error:${err}`)
    }
}




const productRouter=(app:express.Application)=>{
    app.get('/products',index)
    app.post('/products/create',authority,create)
    app.get('/products/show',show)
    app.put('/products/update',authority,update)
}

export default productRouter;
import express,{Request,Response} from 'express'
import {User,UserStore} from "../models/userModel"
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import { authority } from './auth'
import 'dotenv/config'

const store=new UserStore()
// dotenv.config()

const index=async(_req:Request,res:Response)=>{
    try{
        const users:User[]=await store.index();
        res.status(200).json(users);
    }catch(err){
        throw new Error (`there was an error:${err}`)
    }
}

const show=async(req:Request,res:Response)=>{
    try{
        const id = (req.query.id as unknown) as Number
        const user:User=await store.show(id);
        res.status(200).json(user)
    }catch(err){
        throw new Error (`there was an error:${err}`)
    }
}

const create=async(req:Request,res:Response)=>{
    try{
        // console.log(req.params)
        const first_name=req.query.firstName as string;
        const last_name=req.query.lastName as string;
        const password= req.query.password as string;

    
        const user=await store.create(first_name,last_name,password)
        //create a token
        
        const token=jwt.sign({user:user},process.env.TOKEN_SECRET as string)
        res.status(200).json(token)
    }catch(err){
        throw new Error (`there was an error:${err}`)
    }
}

const update=async(req:Request,res:Response)=>{

    try{
        const first_name=req.query.firstName as string;
        const last_name=req.query.lastName as string;
        const id= req.query.id as string;

    
        const user=await store.update(first_name,last_name,parseInt(id))
        res.status(200).json(user)
    }catch(err){
        throw new Error (`there was an error:${err}`)
    }
}


const userRouter=(app:express.Application)=>{
    app.get('/users',authority,index);
    app.get('/users/show',authority,show);
    app.post('/users/create',create);
    app.put('/users/update',authority,update)
   

}


export default userRouter;
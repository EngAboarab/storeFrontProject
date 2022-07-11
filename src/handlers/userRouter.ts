import express,{Request,Response} from 'express'
import {User,UserStore} from "../models/userModel"
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import { authority } from './auth'
import 'dotenv/config'

const store=new UserStore()
// dotenv.config()

const index=async(_req:Request,res:Response)=>{

    const users:User[]=await store.index();
    res.json(users);
}

const show=async(req:Request,res:Response)=>{
    const id = (req.query.id as unknown) as Number
    const user:User=await store.show(id);
    res.json(user)
}

const create=async(req:Request,res:Response)=>{

    // console.log(req.params)
    const first_name=req.query.firstName as string;
    const last_name=req.query.lastName as string;
    const password= req.query.password as string;

   
    const user=await store.create(first_name,last_name,password)
    //create a token
    
    const token=jwt.sign({user:user},process.env.TOKEN_SECRET as string)
    res.json(token)

}

const userRouter=(app:express.Application)=>{
    app.get('/users',authority,index);
    app.get('/users/show',authority,show);
    app.get('/users/create',create);
}


export default userRouter;
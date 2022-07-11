// import { AuthStore } from "../models/services/token"; 
import express,{Request,Response} from 'express'
import jwt from 'jsonwebtoken'
import  'dotenv/config'


export const authority=async(req:Request,res:Response,next:Function)=>{

    const webAuthToken= req.headers.authorization as string
    
    const userAuthToken=webAuthToken.split(' ')[1]
    
    try{
        const token= jwt.verify(userAuthToken,process.env.TOKEN_SECRET as string)
       
    }catch(err){
        throw new Error (`the user is not authorized:${err}`)
    }
    next()
    return
    
}

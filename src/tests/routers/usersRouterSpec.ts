import express from "express" 
import request  from "supertest";


const app:express.Application=express();
const firstName="Moahmed";
const lastName="Aboarab";
const password="password"
const id=1;



describe('testing of the users endpoints using supertest',()=>{
 
 
 
    it("the create endpoint returns status 200",()=>{
        request(app)
        .get("/users/create")
        .set({firstName,lastName,password})
        .expect(200)

    })
    it("the update endpoint returns status 200",()=>{
        request(app)
        .get("/users/update")
        .set({'Authorization':"abc123",firstName,lastName,id})
        .expect(200)

    })
    it("the show endpoint returns status 200",()=>{
        request(app)
        .get("/users/show")
        .set({'Authorization':"abc123",id})
        .expect(200)

    })
    it("the index endpoint returns status 200",()=>{
        request(app)
        .get("/users/index")
        .set({'Authorization':"abc123"})
        .expect(200)

    })
 
})
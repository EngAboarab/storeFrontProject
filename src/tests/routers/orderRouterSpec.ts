
import express from "express" 
import request  from "supertest";


const app:express.Application=express();
const userId=1;
const orderID=1;



describe('testing of the order endpoints using supertest',()=>{
 
 
 
    it("the create endpoint returns status 200",()=>{
        request(app)
        .get("/orders/create")
        .set({'Authorization':"abc123",userId,orderID})
        .expect(200)

    })
    it("the update endpoint returns status 200",()=>{
        request(app)
        .get("/orders/update")
        .set({'Authorization':"abc123",userId,orderID})
        .expect(200)

    })
    it("the show endpoint returns status 200",()=>{
        request(app)
        .get("/orders/show")
        .set({'Authorization':"abc123",userId,orderID})
        .expect(200)

    })
    it("the index endpoint returns status 200",()=>{
        request(app)
        .get("/orders/index")
        .set({'Authorization':"abc123",userId,orderID})
        .expect(200)

    })
    it("the showLast endpoint returns status 200",()=>{
        request(app)
        .get("/orders/showLast")
        .set({'Authorization':"abc123",userId,orderID})
        .expect(200)

    })
})
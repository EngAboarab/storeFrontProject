
import express from "express" 
import request  from "supertest";


const app:express.Application=express();
const userId=1;
const product_id=1;
const product_name="train";
const price=200;
const category="toy"
const id=1;



describe('testing of the products endpoints using supertest',()=>{
 
 
 
    it("the create endpoint returns status 200",()=>{
        request(app)
        .get("/products/create")
        .set({'Authorization':"abc123",product_name,price,category})
        .expect(200)

    })
    it("the update endpoint returns status 200",()=>{
        request(app)
        .get("/products/update")
        .set({'Authorization':"abc123",product_name,price,category,id})
        .expect(200)

    })
    it("the index endpoint returns status 200",()=>{
        request(app)
        .get("/products/index")
        .expect(200)

    })
    it("the show endpoint returns status 200",()=>{
        request(app)
        .get("/products/show")
        .set({product_id})
        .expect(200)

    })
  
})
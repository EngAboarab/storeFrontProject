import { Order,OrderStore } from "../../models/ordersModel";


const store=new OrderStore()
const userId=1;
const productId=1;
const id=1;
const quantity=3
const orderCompletness=true

describe('tesing of the Order model',()=>{
    it('it has an index method',()=>{
        expect(store.index).toBeDefined

    })
    it('it has an show method',()=>{
        expect(store.show).toBeDefined

    })
    it('it has an create method',()=>{
        expect(store.create).toBeDefined

    })
    it('it has an update method',()=>{
        expect(store.update).toBeDefined

    })
    it ('the methode create will return a value not null',async()=>{
        const results= await store.create(productId,quantity,userId,orderCompletness);
        expect(results).not.toBeNull
    })
    it ('the methode update will return a value not null',async()=>{
        const results= await store.update(orderCompletness,id);
        expect(results).not.toBeNull
    })
    it ('the methode index will return a value not null',async()=>{
        const results= await store.index(id);
        expect(results).not.toBeNull
    })
    it ('the methode show will return a value not null',async()=>{
        const results= await store.show(userId,id);
        expect(results).not.toBeNull
    })
  
})
import { Order,OrderStore } from "../../models/ordersModel";


const store=new OrderStore()

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

    it ('the methode index will return a value not null',async()=>{
        const results= await store.index(1);
        expect(results).toEqual([])
    })
    it ('the methode show will return a value not null',async()=>{
        const results= await store.show(1,1);
        expect(results).not.toBeNull
    })
})